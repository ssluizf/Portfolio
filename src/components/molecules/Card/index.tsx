"use client"

import Link from "next/link";
import { motion } from "framer-motion"

import Glitch from "@/components/atoms/Glitch";
import Icon from "@/components/atoms/Icon";

type CardProps = {
  layoutId: string,
  title: string,
  description: string,
  onClick?: (e?: any) => any,
  imageURL?: string
  link?: string
}

export default function Card({ layoutId, title, description, onClick, imageURL = "", link = "" }: CardProps) {
  return (
    <motion.div layoutId={layoutId} className="relative">
      <Glitch>
        <Link
          className="bg-black rounded-full p-2 -m-4 absolute top-0 right-0 text-white hover:text-green -rotate-45"
          href={link}
          target="_blank"
        >
          <Icon name="link" className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
      </Glitch>
      <motion.div className="h-min grid grid-flow-row auto-rows-min gap-4 overflow-hidden bg-black rounded-lg pb-8">
        <motion.img
          className="bg-dark-gray w-full h-44 object-cover object-top cursor-pointer"
          alt="Card Image"
          onClick={onClick}
          src={imageURL}
        />
        <motion.p className="text-white font-medium text-md md:text-lg mx-6">
          {title}
        </motion.p>
        <motion.p className="text-white text-xs md:text-sm mx-6">
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
