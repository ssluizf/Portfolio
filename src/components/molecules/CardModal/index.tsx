import Glitch from "@/components/atoms/Glitch"
import Icon from "@/components/atoms/Icon"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type CardModalProps = {
  open: boolean
  onClose: () => void
  title: string
  description: string
  imageURL?: StaticImageData | string
  links?: { label: string; link: string }[]
  skills?: string[]
}

export default function CardModal({
  open,
  onClose,
  title,
  description,
  imageURL = "",
  links = [],
  skills = [],
}: CardModalProps) {
  return open ? (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto w-6/12 h-min"
      >
        <Glitch>
          <button
            onClick={onClose}
            className="bg-black rounded-full p-3 -m-4 absolute top-0 right-0 text-white hover:text-green"
          >
            <Icon name="close" className="h-5 w-5 md:h-5 md:w-5" />
          </button>
        </Glitch>
        <div className="h-min grid grid-flow-row auto-rows-min gap-4 overflow-hidden bg-black rounded-lg pb-8">
          <div className="flex">
            <Image
              className="w-2/3 bg-dark-gray h-72 object-cover object-top"
              alt="Card Image"
              src={imageURL}
            />
            <div className="w-1/3 p-4 pt-12 space-y-3">
              {links.map(({ label, link }, index) => (
                <Link
                  key={`link-${index}`}
                  className="flex justify-between gap-2 bg-black rounded-full p-0 text-white hover:text-green"
                  href={link}
                  target="_blank"
                >
                  <p className="font-medium text-sm md:text-base">{label}</p>
                  <Icon name="arrowRight" className="h-6 w-6 md:h-6 md:w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-2/3 pl-6 space-y-6">
            <div className="space-y-3">
              <p className="text-white font-medium text-md md:text-xl">
                {title}
              </p>
              <p className="text-white text-xs md:text-base">{description}</p>
            </div>
            {skills.length > 0 && (
              <div className="space-y-3">
                <p className="text-white font-medium text-md md:text-xl">
                  Skills
                </p>
                <div className="flex space-x-2">
                  {skills.map((skill, index) => (
                    <div
                      key={`skill-${index}`}
                      className="flex items-center space-x-1"
                    >
                      <Icon
                        name="star"
                        className="text-white h-6 w-6 md:h-6 md:w-6"
                      />
                      <p className="text-white text-xs md:text-base">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  )
}
