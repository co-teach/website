import Head from "next/head";
import Header from "../../components/Header/Header";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import React from "react";
import Person from "../../components/Person/Person";
import classes from "./team.module.scss";
import { teamMembers } from "../../contents/teamMembers";
import type { PersonModel } from "../../models/PersonModel";
import { menuStructure } from "../../contents/menuStructure";
import PartnerLink from "../../components/PartnerLink/PartnerLink";
import { partners } from "../../contents/partners";

const Index = () => {
  const projectGroup: PersonModel[] = [
    teamMembers.sia,
    teamMembers.rachel,
    teamMembers.ingrid,
    teamMembers.yuen,
    teamMembers.ilona,
    teamMembers.alie,
    teamMembers.koos,
    teamMembers.heather,
    teamMembers.rhea,
    teamMembers.fleur,
    teamMembers.jelmer,
    teamMembers.jos,
    teamMembers.aad,
  ];
  const steeringGroup: PersonModel[] = [
    teamMembers.pieter,
    teamMembers.ingriddebonth,
    teamMembers.michiel,
    teamMembers.inge,
    teamMembers.gerard,
  ];
  const vspGroup: PersonModel[] = [
    teamMembers.paulina,
    teamMembers.thirza,
    teamMembers.denise,
    teamMembers.karlijn,
    teamMembers.andor,
  ];

  return (
    <>
      <Head>
        <title>Het Team achter Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Team}>
        <article className={"restrictedWidth"}>
          <SignatureHeader title="Het team" subtitle="stelt zich graag voor" />
          <section className={"restrictedWidth"}>
            <p style={{ marginTop: "20px" }}>
              Co-Teach informatica wordt uitgevoerd door{" "}
              <PartnerLink partner={partners.uu} /> (als penvoerder),{" "}
              <PartnerLink partner={partners.ut} /> en{" "}
              <PartnerLink partner={partners.vu} />. Dit in hechte samenwerking
              met de <PartnerLink partner={partners.unl} />,{" "}
              <PartnerLink partner={partners.voRaad} />,{" "}
              <PartnerLink partner={partners.nldigital} />,{" "}
              <PartnerLink partner={partners.slo} /> en{" "}
              <PartnerLink partner={partners.ieni} />.
            </p>
            <h2>De projectgroep</h2>
            <p>
              Onderstaande leden geven vorm aan de inhoud en uitvoering van
              Co-Teach Informatica, zowel op landelijk als regionaal niveau.
            </p>

            <ul className={classes.persons}>
              {projectGroup.map((person) => (
                <li key={`${person.firstName}-${person.lastName}`}>
                  <Person person={person} />
                </li>
              ))}
            </ul>
            <h2>De Vaksteunpunten</h2>
            <p>
              Onderstaande student-assistenten maken via de Co-Teach steunpunten
              het verschil. Dit zowel door te helpen met het vormgeven van
              lesmateriaal als begeleiding van leerlingen.
            </p>
            <ul className={classes.persons}>
              {vspGroup.map((person) => (
                <li key={`${person.firstName}-${person.lastName}`}>
                  <Person person={person} />
                </li>
              ))}
            </ul>
            <h2>De Stuurgroep</h2>
            <p>
              Onderstaande leden borgen de visie en missie van het project,
              evenals de betrokkenheid van partners.
            </p>

            <ul className={classes.persons}>
              {steeringGroup.map((person) => (
                <li key={`${person.firstName}-${person.lastName}`}>
                  <Person person={person} />
                </li>
              ))}
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Index;
