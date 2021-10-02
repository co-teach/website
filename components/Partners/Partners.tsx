import React from "react";
import classes from "./Partners.module.scss";
import type { Partner } from "../../models/Partner";

const Partners = (props: { partners: Partner[]; headingText: string }) => (
  <section className={classes.Partners}>
    <h2>{props.headingText}</h2>
    <ul>
      {props.partners.map((partner: Partner) => {
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
