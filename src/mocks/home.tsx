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
  madeByTitle: "Made with 💚 by ssluizf"
}

export const projects = [
  {
    title: "Portfolio",
    description:
      "This site is built in Next.js 13 and uses a library named powerglitch for glitch animations",
    imageURL: home,
    link: "https://github.com/ssluizf/Portfolio",
  },
  {
    title: "Projeto Artificium",
    description:
      "Site built in Next.js 13 for studies over techs as Cypress and Storybook",
    imageURL: login,
    link: "https://github.com/ssluizf/Artificium",
  },
]
