import React from "react";
import classes from "./Partners.module.scss";

interface Partner {
  name: string;
  slug: string;
  fileType: "svg" | "png";
  website?: URL;
}

const partners: Partner[] = [
  {
    name: "VSNU",
    slug: "vsnu",
    fileType: "png",
    website: new URL("https://www.vsnu.nl/"),
  },
  {
    name: "VO-raad",
    slug: "vo-raad",
    fileType: "png",
    website: new URL("https://www.vo-raad.nl/"),
  },
  {
    name: "NLdigital",
    slug: "nldigital",
    fileType: "svg",
    website: new URL("https://www.nldigital.nl/"),
  },
  {
    name: "SLO",
    slug: "slo",
    fileType: "svg",
    website: new URL("https://www.slo.nl/"),
  },
  {
    name: "Vakvereniging i&i",
    slug: "i&i",
    fileType: "svg",
    website: new URL("https://ieni.org/"),
  },
  {
    name: "Universiteit Utrecht",
    slug: "uu",
    fileType: "svg",
    website: new URL("https://www.uu.nl/"),
  },
  {
    name: "Universiteit Twente",
    slug: "ut",
    fileType: "svg",
    website: new URL("https://www.utwente.nl/"),
  },
  {
    name: "Vrije Universiteit Amsterdam",
    slug: "vu",
    fileType: "svg",
    website: new URL("https://www.vu.nl/"),
  },
];

const Partners = (props: {}) => (
  <section id={classes.Partners}>
    <h2>Een samenwerking tussen</h2>
    <ul>
      {partners.map((partner: Partner) => {
        return (
          <li key={partner.slug}>
            <a
              href={partner.website ? partner.website.toString() : "#"}
              target="_blank"
              rel="noopener"
            >
              <img
                src={`/images/partners/${partner.slug}_logo.${partner.fileType}`}
                alt={partner.name}
              />
            </a>
          </li>
        );
      })}
    </ul>
  </section>
);

export default Partners;
