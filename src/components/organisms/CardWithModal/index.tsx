"use client"

import { useState } from "react"
import { StaticImageData } from "next/image"

import Card from "@/components/molecules/Card"
import CardModal from "@/components/molecules/CardModal"

type CardWithModalProps = {
  title: string
  description: string
  imageURL?: StaticImageData | string
  link?: string
  links: { link: string; label: string }[]
  skills: string[]
}

export default function CardWithModal({
  title,
  description,
  imageURL,
  link,
  links,
  skills
}: CardWithModalProps) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <CardModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={title}
        description={description}
        imageURL={imageURL}
        links={links}
        skills={skills}
      />
      <Card
        title={title}
        description={description}
        imageURL={imageURL}
        link={link}
        onClick={() => setOpenModal(true)}
      />
    </>
  )
}
