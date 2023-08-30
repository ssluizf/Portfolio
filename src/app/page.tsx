import Link from "next/link"
import Image from "next/image"

import login from "@/assets/images/Login.png"

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
        <div className="flex flex-col h-screen container mx-auto px-28 py-8">
          <p className="text-white font-medium text-5xl w-min pb-16 whitespace-nowrap z-10">
            Case Studies
          </p>
          <div className="h-3/5 grid grid-cols-3 grid-rows-1 gap-8">
            <div className="relative">
              <Glitch>
                <Link
                  className="bg-black rounded-full p-2 -m-4 absolute top-0 right-0 text-white hover:text-green -rotate-45"
                  href="https://github.com/ssluizf/Artificium"
                  target="_blank"
                >
                  <Icon name="link" className="h-8 w-8" />
                </Link>
              </Glitch>
              <div className="h-min grid grid-flow-row auto-rows-min gap-4 overflow-hidden bg-black rounded-lg pb-8">
                <Image
                  className="bg-dark-gray h-44 object-cover object-top cursor-pointer"
                  alt="Banner Image"
                  src={login}
                />
                <p className="text-white font-medium text-lg mx-6">
                  Projeto Artificium
                </p>
                <p className="text-white text-sm mx-6">
                  {`Site built in Next.js 13 for studies over techs as Cypress and Storybook`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-72 container bottom-0 snap-end"></div>
    </div>
  )
}
