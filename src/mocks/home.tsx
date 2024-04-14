import login from "@/assets/images/Login.png"
import home from "@/assets/images/Home.png"

export const homepage = {
  titleFragments: ["Hello,", " My name ", "is", " Luiz"],
  subtitleFragments: ["I'm a ", "Front", " End ", " Developer"],
  caseStudiesTitle: "Case Studies",
  menuTitle: "MENU",
  homeTitle: "Home",
  skillsTitle: "Skills",
  socialTitle: "Redes Sociais",
  linkedinTitle: "Linkedin",
  instagramTitle: "Instagram",
  contactTitle: "Contato",
  emailTitle: "ssl_log@outlook.com",
  phoneTitle: "+55 11 96476 2156",
  madeByTitle: "Made with 💚 by ssluizf",
}

export const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "This site is built in Next.js 13 and uses a library named powerglitch for glitch animations",
    imageURL: "/Home.png",
    link: "https://github.com/ssluizf/Portfolio",
    links: [
      {
        link: "https://github.com/ssluizf/Portfolio",
        label: "Repository",
      },
      {
        link: "https://portfolio-ssluizf.vercel.app/",
        label: "Site",
      },
    ],
    skills: ["React", "Next.js"],
  },
  {
    id: 2,
    title: "Projeto Artificium",
    description:
      "Site built in Next.js 13 for studies over techs as Cypress and Storybook",
    imageURL: "/Login.png",
    link: "https://github.com/ssluizf/Artificium",
    links: [
      {
        link: "https://github.com/ssluizf/Artificium",
        label: "Repository",
      },
      {
        link: "https://artificium-cyan.vercel.app/",
        label: "Site",
      },
      {
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7085364631044562944/",
        label: "Post",
      },
    ],
    skills: ["React", "Next.js", "Firebase"],
  },
]

export const skills = ["React", "Next", "Typescript", "Vitest"]
