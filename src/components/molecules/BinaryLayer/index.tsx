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

  const MAX_NUMBER_OF_LINES = 20
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

  const binaryList = useMemo(() => {
    const currentRef = glitchRef.current

    if (currentRef) {
      const height = currentRef.getBoundingClientRect().height
      const windowHeight = window.innerHeight

      const proportionHeight = height / windowHeight
      const currNumberOfLines = Math.round(
        proportionHeight * MAX_NUMBER_OF_LINES,
      )

      const lineLength = binaryLength / currNumberOfLines

      let binaryList = []

      for (let i = 0; i < currNumberOfLines; i++) {
        binaryList[i] = binaryText.slice(lineLength * i, lineLength * (i + 1))
      }

      binaryList = binaryList.map((line) => {
        const separateText = line.match(/[^2]+2?|2/g) || []

        return separateText
      })

      binaryList = binaryList.flat()

      return binaryList
    }

    return []
  }, [binaryText, binaryLength])

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
    <div className="h-[inherit] overflow-hidden" ref={glitchRef}>
      {binaryList.map((value, index) => (
        <Glitch key={`binary-${index}`} playMode="manual" specialMode="random">
          <span
            className={`${colorClasses[color]} align-middle w-full text-4xl break-words break-all leading-[4.5vh] select-none`}
          >
            {value}
          </span>
        </Glitch>
      ))}
    </div>
  )
}
