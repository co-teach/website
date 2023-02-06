import type { SyntheticEvent } from "react";
import React from "react";
import classes from "./Person.module.scss";
import { FaInfoCircle, FaMailBulk } from "react-icons/fa";
import type { PersonModel } from "../../models/PersonModel";

const Person = ({
  person: { firstName, lastName, organisation, roles, email, personalPage },
}: {
  person: PersonModel;
}) => {
  // Determine type of role
  const rolesRender = roles.map((role) => {
    let colorClass = "";
    if (role.toLowerCase().match("utrecht")) {
      colorClass = "uu";
    } else if (role.toLowerCase().match("twente")) {
      colorClass = "ut";
    } else if (role.toLowerCase().match("amsterdam")) {
      colorClass = "vu";
    }

    return (
      <span key={role} className={colorClass}>
        {role}
      </span>
    );
  });

  const imageSrc =
    `/images/team/${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg`.replace(
      / /g,
      "-"
    );

  return (
    <div className={classes.Person} vocab="https://schema.org/" typeof="Person">
      <div className={classes.image}>
        <img
          src={imageSrc}
          alt={`Foto van ${firstName} ${lastName}`}
          property="image"
          width="150px"
          height="150px"
          onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
            const replacementImage = "/images/team/photo-not-available.jpg";
            if (e.currentTarget.src === replacementImage) {
              return;
            }
            e.currentTarget.src = replacementImage;
          }}
        />
      </div>
      <div className={classes.data}>
        <div property="name">
          {firstName} {lastName}
        </div>
        <div property="affiliation">{organisation}</div>
        <div property="jobTitle">{rolesRender}</div>
        {personalPage && (
          <a
            href={personalPage}
            property="mainEntityOfPage"
            target="_blank"
            rel="noopener"
          >
            <FaInfoCircle /> meer over mij
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} property="email" rel="noopener">
            <FaMailBulk /> contact
          </a>
        )}
      </div>
    </div>
  );
};

export default Person;
