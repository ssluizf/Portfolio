"use client"

import React, { useEffect } from "react"
import { useGlitch } from "react-powerglitch"

type GlitchProps = {
  children: React.ReactNode
  display?: "auto" | "block"
  specialMode?: "scroll" | "random"
  playMode?: "always" | "hover" | "click" | "manual"
  hideOverflow?: boolean
  glitchTimeSpan?: false | {}
}

export default function Glitch({
  children,
  playMode = "hover",
  specialMode,
  hideOverflow = false,
  glitchTimeSpan = false,
}: GlitchProps) {
  const { startGlitch, stopGlitch, ...glitch } = useGlitch({
    playMode,
    hideOverflow,
    glitchTimeSpan,
    slice: {
      hueRotate: false,
    },
  })

  useEffect(() => {
    if (specialMode === "scroll") {
      stopGlitch()
    }
  }, [specialMode, stopGlitch])

  useEffect(() => {
    let timer: any = null
    let lastScrollTop: number = 0

    function activateGlitchOnDownscroll() {
      const scrollTop = document.documentElement.scrollTop

      if (scrollTop > lastScrollTop) {
        if (timer === null) {
          startGlitch()
        }

        timer = setTimeout(function () {
          stopGlitch()

          timer = null
        }, 1000)
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    if (specialMode === "scroll") {
      window.addEventListener("scroll", activateGlitchOnDownscroll, false)
    }
  }, [specialMode, startGlitch, stopGlitch])

  useEffect(() => {
    let timer: any = null

    function getRandomArbitrary(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    function activateGlithOnRandom() {
      if (timer === null) {
        timer = setTimeout(
          () => {
            startGlitch()

            timer = null
          },
          getRandomArbitrary(1000, 10000),
        )
      }
    }

    if (specialMode === "random") {
      document.addEventListener("scroll", activateGlithOnRandom)
    }
  }, [specialMode, startGlitch])

  return React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      ref: glitch.ref,
    }),
  )
}
