"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import Glitch from "@/components/atoms/Glitch"
import Icon from "@/components/atoms/Icon"

type CardModalProps = {
  layoutId?: string
  open: boolean
  onClose: () => void
  title: string
  description: string
  imageURL?: string
  links?: { label: string; link: string }[]
  skills?: string[]
}

export default function CardModal({
  layoutId,
  open,
  onClose,
  title,
  description,
  imageURL = "",
  links = [],
  skills = [],
}: CardModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onClick={onClose}
          className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 z-20"
        >
          <motion.div
            layoutId={layoutId}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 bottom-0 left-0 right-0 my-auto sm:max-w-xl sm:mx-auto md:max-w-2xl xl:max-w-3xl h-min"
          >
            <Glitch>
              <motion.button
                onClick={onClose}
                className="z-10 bg-black text-white hover:text-green rounded-full p-3 right-0 left-0 mx-auto -mt-4 w-min absolute top-0 sm:-m-4 sm:left-auto sm:right-0"
              >
                <Icon name="close" className="h-5 w-5 md:h-5 md:w-5" />
              </motion.button>
            </Glitch>
            <motion.div className="h-min grid grid-flow-row auto-rows-min gap-4 overflow-hidden bg-black rounded-lg pb-8">
              <motion.div className="flex">
                <motion.div className="w-full md:w-2/3 h-72">
                  <motion.img
                    className="absolute w-full z-0 md:w-2/3 md:z-50 bg-dark-gray h-72 object-cover object-top rounded-tl-lg hover:rounded-none"
                    alt="Card Image"
                    src={imageURL}
                    whileHover={{
                      y: -25,
                      x: -25,
                      scale: 1.025,
                      transition: { delay: 0.2, duration: 0.15 },
                    }}
                  />
                </motion.div>
                <motion.div className="w-1/3 p-4 pt-12 space-y-3 hidden md:block">
                  {links.map(({ label, link }, index) => (
                    <Link
                      key={`link-${index}`}
                      className="flex justify-between gap-2 bg-black rounded-full p-0 text-white hover:text-green"
                      href={link}
                      target="_blank"
                    >
                      <motion.p className="font-medium text-sm md:text-base">
                        {label}
                      </motion.p>
                      <Icon
                        name="arrowRight"
                        className="h-6 w-6 md:h-6 md:w-6"
                      />
                    </Link>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div className="w-full px-6 md:w-2/3 md:pr-0 space-y-6">
                <motion.div className="space-y-3">
                  <motion.p className="text-white font-medium text-md md:text-xl">
                    {title}
                  </motion.p>
                  <motion.p className="text-white text-xs md:text-base">
                    {description}
                  </motion.p>
                </motion.div>
                {skills.length > 0 && (
                  <motion.div className="space-y-3">
                    <motion.p className="text-white font-medium text-md md:text-xl">
                      Skills
                    </motion.p>
                    <motion.div className="flex space-x-2">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={`skill-${index}`}
                          className="flex items-center space-x-1"
                        >
                          <Icon
                            name="star"
                            className="text-white h-5 w-5 md:h-6 md:w-6"
                          />
                          <motion.p className="text-white text-xs md:text-base">
                            {skill}
                          </motion.p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
              <motion.div className="w-full py-4 px-6 space-y-3 md:hidden">
                {links.map(({ label, link }, index) => (
                  <Link
                    key={`link-${index}`}
                    className="flex justify-between gap-2 bg-black rounded-full p-0 text-white hover:text-green"
                    href={link}
                    target="_blank"
                  >
                    <motion.p className="font-medium text-sm md:text-base">
                      {label}
                    </motion.p>
                    <Icon name="arrowRight" className="h-6 w-6 md:h-6 md:w-6" />
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
