"use client"

import { useEffect, useRef, useMemo, useCallback, useState } from "react"
import Glitch from "@/components/atoms/Glitch"

type BinaryLayerProps = {
  color: "green" | "dark-green"
}

export default function BinaryLayer({ color }: BinaryLayerProps) {
  const colorClasses: any = {
    green: "text-green",
    "dark-green": "text-dark-green",
  }

  const glitchRef = useRef<HTMLDivElement | null>(null)
  const [binaryLength, setBinaryLength] = useState(0)
  const [hydrated, setHydrated] = useState(false)

  const binaryText = useMemo(() => {
    let result = ""
    const characters = "11111110000002"
    const charactersLength = characters.length

    let counter = 0

    while (counter < binaryLength) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }

    return result
  }, [binaryLength])

  const handleWindowResize = useCallback(() => {
    const currentRef = glitchRef.current

    if (currentRef) {
      const width = currentRef.getBoundingClientRect().width
      const height = currentRef.getBoundingClientRect().height

      const windowHeight = window.innerHeight

      const proportionHeight = height / windowHeight
      const proportionValue = 1.027777777777778

      setBinaryLength(Math.trunc(width * proportionValue * proportionHeight))
    }
  }, [])

  useEffect(() => {
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      handleWindowResize()
    }
  }, [handleWindowResize, hydrated])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [handleWindowResize])

  if (!hydrated) return null

  return (
    <Glitch
      ref={glitchRef}
      playMode="manual"
      specialMode="random"
      hideOverflow={true}
    >
      <div className="overflow-hidden">
        <span
          className={`w-min align-middle my-auto ${colorClasses[color]} text-4xl break-words leading-[5vh]`}
        >
          {binaryText}
        </span>
      </div>
    </Glitch>
  )
}
