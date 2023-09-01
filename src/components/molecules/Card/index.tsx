import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Glitch from "@/components/atoms/Glitch";
import Icon from "@/components/atoms/Icon";

type CardProps = {
  title: string,
  description: string,
  imageURL?: StaticImageData | string
  link?: string
}

export default function Card({ title, description, imageURL = "", link = "" }: CardProps) {
  return (
    <div className="relative">
      <Glitch>
        <Link
          className="bg-black rounded-full p-2 -m-4 absolute top-0 right-0 text-white hover:text-green -rotate-45"
          href={link}
          target="_blank"
        >
          <Icon name="link" className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
      </Glitch>
      <div className="h-min grid grid-flow-row auto-rows-min gap-4 overflow-hidden bg-black rounded-lg pb-8">
        <Image
          className="bg-dark-gray h-44 object-cover object-top cursor-pointer"
          alt="Card Image"
          src={imageURL}
        />
        <p className="text-white font-medium text-md md:text-lg mx-6">
          {title}
        </p>
        <p className="text-white text-xs md:text-sm mx-6">
          {description}
        </p>
      </div>
    </div>
  )
}
