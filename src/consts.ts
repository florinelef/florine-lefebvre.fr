import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Florine Lefebvre",
  DESCRIPTION: "Portfolio / CV Numérique de Florine Lefebvre.",
  AUTHOR: "Florine Lefebvre",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Mes projets",
  DESCRIPTION: "Liste de mes projets professionels et personnels.",
}

//Search Page
export const SEARCH: Page = {
  TITLE: "Recherche",
  DESCRIPTION: "Rechercher mes projets par mots clés.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Accueil", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  { 
    TEXT: "Projets", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Parcours", 
    HREF: "/parcours", 
  },
  { 
    TEXT: "Contact", 
    HREF: "/contact", 
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "florinelefebvre6@gmail.com",
    HREF: "mailto:florinelefebvre6@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "florinelef",
    HREF: "https://github.com/florinelef"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Florine Lefebvre",
    HREF: "https://www.linkedin.com/in/florine-lefebvre-309317313/",
  },
]

