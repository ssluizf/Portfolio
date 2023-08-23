"use client"

import React, { useEffect } from "react"
import { useGlitch } from "react-powerglitch"

type GlitchProps = {
  children: React.ReactNode
  specialMode?: "scroll"
  playMode?: "always" | "hover" | "click" | "manual"
}

export default function Glitch({
  children,
  playMode = "hover",
  specialMode,
}: GlitchProps) {

  const glitch = useGlitch({
    playMode,
    hideOverflow: false,
    glitchTimeSpan: false,
  })

  useEffect(() => {
    if (specialMode === "scroll") {
      glitch.stopGlitch()
    }
  }, [specialMode, glitch])

  useEffect(() => {
    if (specialMode === "scroll") {
      let timer: any = null

      window.addEventListener(
        "scroll",
        () => {
          if (timer !== null) {
            clearTimeout(timer)
          } else {
            glitch.startGlitch()
          }

          timer = setTimeout(function () {
            glitch.stopGlitch()
            
            timer = null
          }, 150)
        },
        false,
      )
    }
  }, [specialMode, glitch])

  return (
    <div className="grid">
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, {
          ref: glitch.ref,
        }),
      )}
    </div>
  )
}
