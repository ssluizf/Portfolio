"use client"

import React, { useEffect } from "react"
import { useGlitch } from "react-powerglitch"

type GlitchProps = {
  children: React.ReactNode
  mode?: "hover" | "scroll" | "scrollDown"
  timeFunc?: "random"
  hideOverflow?: boolean
  glitchTimeSpan?: false | {}
}

export default function Glitch({
  children,
  mode = "hover",
  timeFunc,
  hideOverflow = false,
  glitchTimeSpan = false,
}: GlitchProps) {
  const playModeCustomProps: any = {
    scroll: "manual",
    scrollDown: "always",
  }

  const { startGlitch, stopGlitch, ...glitch } = useGlitch({
    playMode: playModeCustomProps[mode] || mode,
    hideOverflow,
    glitchTimeSpan,
    slice: {
      hueRotate: false,
    },
  })

  useEffect(() => {
    if (mode === "scrollDown") {
      stopGlitch()
    }
  }, [mode, stopGlitch])

  useEffect(() => {
    let startTimer: any = null
    let stopTimer: any = null
    let lastScrollTop: number = 0

    function getRandomArbitrary(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function clearTimers() {
      startTimer = null
      stopTimer = null
    }

    function startGlitchOnTime(time: number) {
      if (startTimer === null) {
        startTimer = setTimeout(() => {
          startGlitch()
        }, time)
      }
    }

    function stopGlitchOnTime(time: number) {
      if (stopTimer === null) {
        stopTimer = setTimeout(() => {
          stopGlitch()
          clearTimers()
        }, time)
      }
    }

    function doAnimation() {
      const randomTime = getRandomArbitrary(1000, 10000)
      
      const startTime = timeFunc !== "random" ? 0 : randomTime
      const stopTime = startTime + 1000

      startGlitchOnTime(startTime)
      stopGlitchOnTime(stopTime)
    }

    function animateOnScroll() {
      doAnimation()
    }

    function animateOnScrollDown() {
      const scrollTop = document.documentElement.scrollTop
      const isScrollingDown = scrollTop > lastScrollTop

      if (isScrollingDown) {
        doAnimation()
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    function activateGlitchOnScroll() {
      switch (mode) {
        case "scroll": {
          animateOnScroll()
          break
        }
        case "scrollDown": {
          animateOnScrollDown()
          break
        }
      }
    }

    window.addEventListener("scroll", activateGlitchOnScroll, false)
  }, [mode, timeFunc, startGlitch, stopGlitch])

  return React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      ref: glitch.ref,
    }),
  )
}
