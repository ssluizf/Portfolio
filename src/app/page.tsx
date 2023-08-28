import Link from "next/link"

import Icon from "@/components/atoms/Icon"
import Glitch from "@/components/atoms/Glitch"
import BinaryLayer from "@/components/molecules/BinaryLayer"

export default function Home() {
  return (
    <div className="h-screen snap-start">
      <div className="relative snap-end">
        <div className="container mx-auto introduction-banner flex flex-col w-full h-screen sticky top-0">
          <div className="absolute flex items-center space-x-8 mr-8 mt-8 text-white self-end">
            <Glitch>
              <Link
                title="linkedin"
                href="https://www.linkedin.com/in/ssluizf/"
                target="_blank"
              >
                <Icon name="linkedin" className="h-8 w-8" />
              </Link>
            </Glitch>
            <Glitch>
              <Link
                title="github"
                href="https://github.com/ssluizf"
                target="_blank"
              >
                <Icon name="code" className="h-10 w-10" />
              </Link>
            </Glitch>
          </div>
          <div className="flex flex-col items-center my-auto text-white font-roboto overflow-hidden">
            <Glitch playMode="always" specialMode="scroll">
              <p className="font-medium text-6xl leading-snug w-min whitespace-nowrap">
                Hello, My name is Luiz
              </p>
            </Glitch>
            <Glitch playMode="always" specialMode="scroll">
              <p className="text-4xl leading-snug w-min whitespace-nowrap">
                {"I'm a Front End Developer"}
              </p>
            </Glitch>
          </div>
        </div>
        <div className="h-[25vh]"></div>
        <div className="h-[25vh] overflow-hidden">
          <BinaryLayer color="dark-green" />
        </div>
      </div>
      <div className="h-[50vh] overflow-hidden bg-gradient-to-b from-black to-dark-gray snap-center">
        <BinaryLayer color="green" />
      </div>
      <div className="h-[25vh] overflow-hidden bg-dark-gray">
        <BinaryLayer color="dark-green" />
      </div>
      <div className="h-screen bg-dark-gray snap-start">
        <div className="container mx-auto">
          <p className="text-white font-medium text-6xl leading-snug w-min whitespace-nowrap">
            Projects
          </p>
        </div>
      </div>
    </div>
  )
}
