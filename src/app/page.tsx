import Link from "next/link"

import login from "@/assets/images/Login.png"
import home from "@/assets/images/Home.png"
import Icon from "@/components/atoms/Icon"
import Glitch from "@/components/atoms/Glitch"
import BinaryLayer from "@/components/molecules/BinaryLayer"
import Card from "@/components/molecules/Card"

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
            <p className="font-medium text-6xl leading-snug w-min whitespace-nowrap">
              <Glitch playMode="always" specialMode="scroll">
                <span>Hello,</span>
              </Glitch>
              <span> My name </span>
              <Glitch playMode="always" specialMode="scroll">
                <span>is</span>
              </Glitch>
              <span> Luiz</span>
            </p>
            <p className="text-4xl leading-snug w-min whitespace-nowrap">
              <span>{"I'm a "}</span>
              <Glitch playMode="always" specialMode="scroll">
                <span>Front</span>
              </Glitch>
              <span> End </span>
              <Glitch playMode="always" specialMode="scroll">
                <span> Developer</span>
              </Glitch>
            </p>
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
      <div className="relative bg-dark-gray snap-start">
        <div className="flex w-full absolute z-0">
          <p className="ml-10 text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>11</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>0110</span>
          </p>
          <p className="mr-auto text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>0</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>1000111210120011</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>1000111110</span>
          </p>
          <p className="mr-96 text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>1111001</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>100011121012</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>1000111</span>
          </p>
          <p className="mr-96 text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>1111002110011100</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>011</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>0112</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>0101112</span>
          </p>
          <p className="text-dark-green w-min text-4xl leading-none break-all select-none">
            <span>01100200110101</span>
          </p>
        </div>
        <div
          className="flex flex-col h-screen container mx-auto px-28 py-8"
          id="case-studies"
        >
          <p className="text-white font-medium text-5xl w-min pb-16 whitespace-nowrap z-10">
            Case Studies
          </p>
          <div className="h-3/5 grid grid-cols-3 grid-rows-1 gap-8">
            <Card
              title="Portfolio"
              description="This site is built in Next.js 13 and uses a library named powerglitch for glitch animations"
              imageURL={home}
              link=""
            />
            <Card
              title="Projeto Artificium"
              description="Site built in Next.js 13 for studies over techs as Cypress and Storybook"
              imageURL={login}
              link="https://github.com/ssluizf/Artificium"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 auto-rows-auto h-72 container bg-black mx-auto px-28 pt-8 pb-6 bottom-0 snap-end">
        <div className="grid h-min gap-4">
          <p className="text-dark-green font-bold">MENU</p>
          <Link className="w-min" href="/">
            <p className="text-white whitespace-nowrap">Home</p>
          </Link>
          <Link className="w-min" href="/#case-studies">
            <p className="text-white whitespace-nowrap">Case Studies</p>
          </Link>
          <Link className="w-min" href="/#skills">
            <p className="text-white whitespace-nowrap">Skills</p>
          </Link>
        </div>
        <div className="grid h-min gap-4">
          <p className="text-dark-green font-bold">Redes Sociais</p>
          <Link
            className="w-min"
            href="https://www.linkedin.com/in/ssluizf/"
            target="_blank"
          >
            <p className="text-white whitespace-nowrap">Linkedin</p>
          </Link>
          <Link
            className="w-min"
            href="https://www.instagram.com/ssluizf/"
            target="_blank"
          >
            <p className="text-white whitespace-nowrap">Instagram</p>
          </Link>
        </div>
        <div className="grid h-min gap-4">
          <p className="text-dark-green font-bold">Contato</p>
          <p className="text-white whitespace-nowrap">ssl_log@outlook.com</p>
          <p className="text-white whitespace-nowrap">+55 11 96476 2156</p>
        </div>
        <p className="text-white text-center col-span-3 mt-auto">
          Made with 💚 by ssluizf
        </p>
      </div>
    </div>
  )
}
