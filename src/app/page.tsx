import Link from "next/link"

import { homepage, projects } from "@/mocks/home"

import Icon from "@/components/atoms/Icon"
import Glitch from "@/components/atoms/Glitch"
import BinaryLayer from "@/components/molecules/BinaryLayer"
import CardWithModal from "@/components/organisms/CardWithModal"

export default function Home() {
  const {
    titleFragments,
    subtitleFragments,
    caseStudiesTitle,
    menuTitle,
    homeTitle,
    skillsTitle,
    socialTitle,
    linkedinTitle,
    instagramTitle,
    madeByTitle,
    contactTitle,
    emailTitle,
    phoneTitle,
  } = homepage

  return (
    <div className="h-screen lg:snap-start">
      <div className="relative lg:snap-end">
        <div className="container mx-auto introduction-banner flex flex-col w-full h-[80vh] md:h-screen sticky top-0">
          <div className="absolute flex items-center space-x-4 mr-4 mt-4 md:space-x-8 md:mr-8 md:mt-8 text-white self-end">
            <Glitch>
              <Link
                title="linkedin"
                href="https://www.linkedin.com/in/ssluizf/"
                target="_blank"
              >
                <Icon name="linkedin" className="h-6 w-6 md:h-8 md:w-8" />
              </Link>
            </Glitch>
            <Glitch>
              <Link
                title="github"
                href="https://github.com/ssluizf"
                target="_blank"
              >
                <Icon name="code" className="h-8 w-8 md:h-10 md:w-10" />
              </Link>
            </Glitch>
          </div>
          <div className="flex flex-col items-start w-min ml-8 mt-44 md:items-center md:mx-auto md:my-auto text-white font-roboto overflow-hidden">
            <p className="font-medium text-4xl md:text-6xl leading-snug w-min whitespace-nowrap">
              <Glitch mode="scrollDown">
                <span className="block md:inline">{titleFragments[0]}</span>
              </Glitch>
              <span>{titleFragments[1]}</span>
              <Glitch mode="scrollDown">
                <span>{titleFragments[2]}</span>
              </Glitch>
              <span>{titleFragments[3]}</span>
            </p>
            <p className="text-xl md:text-4xl leading-normal w-min whitespace-nowrap">
              <span>{subtitleFragments[0]}</span>
              <Glitch mode="scrollDown">
                <span>{subtitleFragments[1]}</span>
              </Glitch>
              <span>{subtitleFragments[2]}</span>
              <Glitch mode="scrollDown">
                <span>{subtitleFragments[3]}</span>
              </Glitch>
            </p>
          </div>
        </div>
        <div className="h-[25vh] md:h-[25vh]"></div>
        <div className="h-[25vh] overflow-hidden">
          <BinaryLayer color="dark-green" />
        </div>
      </div>
      <div className="h-[50vh] overflow-hidden bg-gradient-to-b from-black to-dark-gray lg:snap-center">
        <BinaryLayer color="green" />
      </div>
      <div className="h-[25vh] overflow-hidden bg-dark-gray">
        <BinaryLayer color="dark-green" />
      </div>
      <div className="relative h-screen bg-dark-gray lg:snap-start">
        <div className="flex w-full absolute z-0 text-dark-green text-4xl leading-none break-all select-none">
          <p className="hidden xs:inline ml-10">
            <span>11</span>
          </p>
          <p className="hidden xs:inline text-dark-green w-min">
            <span>0110</span>
          </p>
          <p className="hidden xs:inline mr-auto text-dark-green w-min">
            <span>0</span>
          </p>
          <p className="hidden lg:inline text-dark-green w-min">
            <span>1000111210120011</span>
          </p>
          <p className="hidden lg:inline text-dark-green w-min">
            <span>1000111110</span>
          </p>
          <p className="hidden lg:inline mr-52 xl:mr-96 text-dark-green w-min">
            <span>1111001</span>
          </p>
          <p className="hidden sm:inline text-dark-green w-min">
            <span>100011121012</span>
          </p>
          <p className="hidden sm:inline text-dark-green w-min">
            <span>1000111</span>
          </p>
          <p className="hidden sm:inline mr-52 xl:mr-96 text-dark-green w-min">
            <span>1111002110011100</span>
          </p>
          <p className="ml-auto text-dark-green w-min">
            <span>011</span>
          </p>
          <p className="text-dark-green w-min">
            <span>0112</span>
          </p>
          <p className="text-dark-green w-min">
            <span>0101112</span>
          </p>
          <p className="text-dark-green w-min">
            <span>01100200110101</span>
          </p>
        </div>
        <div
          className="flex flex-col container mx-auto px-8 md:px-28 py-8"
          id="case-studies"
        >
          <p className="text-white font-medium text-2xl md:text-5xl w-min pb-8 md:pb-16 whitespace-nowrap z-10">
            {caseStudiesTitle}
          </p>
          <div className="h-auto grid grid-rows-1 grid-cols-1 lg:h-3/5 lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <CardWithModal key={`card-${index}`} {...project} />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-dark-gray to-black h-screen lg:snap-start">
        <div id="skills" className="flex flex-col h-full items-center container mx-auto px-8 md:px-28 py-8">
          <p className="text-white font-medium text-2xl md:text-5xl w-min pb-8 md:pb-16 whitespace-nowrap z-10">
            Skills
          </p>
          <div className="w-1/2 rounded-xl">
            <div className="flex items-center px-4 space-x-2 bg-white bg-opacity-20 h-8 rounded-t-xl">
              <div className="bg-white w-3 h-3 rounded-full"></div>
              <div className="bg-green w-3 h-3 rounded-full"></div>
              <div className="bg-dark-green w-3 h-3 rounded-full"></div>
            </div>
            <div className="bg-dark-gray h-96 p-8 space-y-4 rounded-xl">
              <p className="w-min whitespace-nowrap text-white hover:text-green cursor-pointer select-none">
                <span className="text-3xl">{"> "}</span>
                <span className="text-2xl">React</span>
              </p>
              <p className="w-min whitespace-nowrap text-white hover:text-green cursor-pointer select-none">
                <span className="text-3xl">{"> "}</span>
                <span className="text-2xl">Next.js</span>
              </p>
              <p className="w-min whitespace-nowrap text-white hover:text-green cursor-pointer select-none">
                <span className="text-3xl">{"> "}</span>
                <span className="text-2xl">Typescript</span>
              </p>
              <p className="w-min whitespace-nowrap text-white hover:text-green cursor-pointer select-none">
                <span className="text-3xl">{"> "}</span>
                <span className="text-2xl">Vitest</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 auto-rows-auto md:h-72 container bg-black mx-auto px-8 md:px-28 pt-8 pb-6 bottom-0 lg:snap-end">
        <div className="grid h-min gap-4">
          <p className="text-dark-green font-bold">{menuTitle}</p>
          <Link className="w-min" href="/">
            <p className="text-white whitespace-nowrap">{homeTitle}</p>
          </Link>
          <Link className="w-min" href="/#case-studies">
            <p className="text-white whitespace-nowrap">{caseStudiesTitle}</p>
          </Link>
          <Link className="w-min" href="/#skills">
            <p className="text-white whitespace-nowrap">{skillsTitle}</p>
          </Link>
        </div>
        <div className="grid h-min gap-4">
          <p className="text-dark-green font-bold">{socialTitle}</p>
          <Link
            className="w-min"
            href="https://www.linkedin.com/in/ssluizf/"
            target="_blank"
          >
            <p className="text-white whitespace-nowrap">{linkedinTitle}</p>
          </Link>
          <Link
            className="w-min"
            href="https://www.instagram.com/ssluizf/"
            target="_blank"
          >
            <p className="text-white whitespace-nowrap">{instagramTitle}</p>
          </Link>
        </div>
        <div className="grid h-min gap-4">
          <p className="text-dark-green font-bold">{contactTitle}</p>
          <p className="text-white whitespace-nowrap">{emailTitle}</p>
          <p className="text-white whitespace-nowrap">{phoneTitle}</p>
        </div>
        <p className="text-white text-center mt-4 md:col-span-3 md:mt-auto">
          {madeByTitle}
        </p>
      </div>
    </div>
  )
}
