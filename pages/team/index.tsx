import Head from "next/head";
import Header from "../../components/Header/Header";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import React from "react";
import Person from "../../components/Person/Person";
import classes from "./team.module.scss";
import { teamMembers } from "../../contents/teamMembers";
import { PersonModel } from "../../models/PersonModel";
import { menuStructure } from "../../contents/menuStructure";
import PartnerLink from "../../components/PartnerLink/PartnerLink";
import { partners } from "../../contents/partners";

const Index = (props: {}) => {
  const projectGroup: PersonModel[] = [
    teamMembers.ivar,
    teamMembers.ingrid,
    teamMembers.martijn,
    teamMembers.berenice,
    teamMembers.felienne,
    teamMembers.rhea,
    teamMembers.fleur,
    teamMembers.jelmer,
    teamMembers.jos,
    teamMembers.aad,
    teamMembers.vera,
  ];

  return (
    <>
      <Head>
        <title>Over Co-Teach Informatica</title>
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
              met de <PartnerLink partner={partners.vsnu} />,{" "}
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
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Index;
