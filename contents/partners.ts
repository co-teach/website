import type { Partner } from "../models/Partner";

export const partners: { [id: string]: Partner } = {
  unl: {
    name: "Universiteiten van Nederland",
    slug: "unl",
    fileType: "png",
    website: new URL("https://www.universiteitenvannederland.nl/"),
  },
  voRaad: {
    name: "VO-raad",
    slug: "vo-raad",
    fileType: "png",
    website: new URL("https://www.vo-raad.nl/"),
  },
  nldigital: {
    name: "NLdigital",
    slug: "nldigital",
    fileType: "svg",
    website: new URL("https://www.nldigital.nl/"),
  },
  slo: {
    name: "SLO",
    slug: "slo",
    fileType: "svg",
    website: new URL("https://www.slo.nl/"),
  },
  ieni: {
    name: "vakvereniging i&i",
    slug: "i&i",
    fileType: "svg",
    website: new URL("https://ieni.org/"),
  },
  uu: {
    name: "Universiteit Utrecht",
    slug: "uu",
    fileType: "svg",
    website: new URL("https://www.uu.nl/"),
  },
  ut: {
    name: "Universiteit Twente",
    slug: "ut",
    fileType: "svg",
    website: new URL("https://www.utwente.nl/"),
  },
  vu: {
    name: "Vrije Universiteit Amsterdam",
    slug: "vu",
    fileType: "svg",
    website: new URL("https://www.vu.nl/"),
  },
  ocw: {
    name: "Ministerie van Onderwijs, Cultuur en Wetenschap",
    slug: "ocw",
    fileType: "svg",
    website: new URL(
      "https://www.rijksoverheid.nl/ministeries/ministerie-van-onderwijs-cultuur-en-wetenschap"
    ),
  },
  ezk: {
    name: "Ministerie van Economische Zaken en Klimaat",
    slug: "ezk",
    fileType: "svg",
    website: new URL(
      "https://www.rijksoverheid.nl/ministeries/ministerie-van-economische-zaken-en-klimaat"
    ),
  },
  deloitte: {
    name: "Deloitte",
    slug: "deloitte",
    fileType: "svg",
    website: new URL(
      "https://www2.deloitte.com/nl/nl.html"
    ),
  },
};
