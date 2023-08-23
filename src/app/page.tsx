import Link from "next/link"

import Icon from "@/components/atoms/Icon"
import Glitch from "@/components/atoms/Glitch"

export default function Home() {
  return (
    <div className="h-screen">
      <main className="flex flex-col w-full h-full fixed top-0 snap-end">
        <div className="absolute flex items-center space-x-8 mr-8 mt-8 text-white self-end">
          <Glitch>
            <Link title="linkedin" href="https://www.linkedin.com/in/ssluizf/">
              <Icon name="linkedin" className="h-8 w-8" />
            </Link>
          </Glitch>
          <Glitch>
            <Link title="github" href="https://github.com/ssluizf">
              <Icon name="code" className="h-10 w-10" />
            </Link>
          </Glitch>
        </div>
        <div className="flex flex-col items-center my-auto text-white font-roboto">
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
      </main>
      <div className="h-full snap-end"></div>
      <div className="h-2/5 snap-end"></div>
      <div className="h-1/5 bg-dark-green opacity-50 snap-end"></div>
      <div className="h-2/5 bg-dark-green snap-end"></div>
    </div>
  )
}
