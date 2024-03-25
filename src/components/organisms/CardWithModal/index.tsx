"use client"

import { useState } from "react"
import { StaticImageData } from "next/image"

import Card from "@/components/molecules/Card"
import CardModal from "@/components/molecules/CardModal"

type CardWithModalProps = {
  id: number
  title: string
  description: string
  imageURL?: string
  link?: string
  links: { link: string; label: string }[]
  skills: string[]
}

export default function CardWithModal({
  id,
  title,
  description,
  imageURL,
  link,
  links,
  skills
}: CardWithModalProps) {
  const [selectedId, setSelectedId] = useState<string>()

  return (
    <>
      <CardModal
        layoutId={selectedId}
        open={Boolean(selectedId)}
        onClose={() => setSelectedId(undefined)}
        title={title}
        description={description}
        imageURL={imageURL}
        links={links}
        skills={skills}
      />
      <Card
        layoutId={id.toString()}
        title={title}
        description={description}
        imageURL={imageURL}
        link={link}
        onClick={() => setSelectedId(id.toString())}
      />
    </>
  )
}
