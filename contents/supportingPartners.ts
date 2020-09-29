import { Partner } from "../models/Partner";

export const supportingPartners: Partner[] = [
  {
    name: "Ministerie van Onderwijs, Cultuur en Wetenschap",
    slug: "ocw",
    fileType: "svg",
    website: new URL(
      "https://www.rijksoverheid.nl/ministeries/ministerie-van-onderwijs-cultuur-en-wetenschap"
    ),
  },
  {
    name: "Ministerie van Economische Zaken en Klimaat",
    slug: "ezk",
    fileType: "svg",
    website: new URL(
      "https://www.rijksoverheid.nl/ministeries/ministerie-van-economische-zaken-en-klimaat"
    ),
  },
];
