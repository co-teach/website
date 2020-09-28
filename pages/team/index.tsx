import Head from "next/head";
import Header from "../../components/Header/Header";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import React from "react";
import Person from "../../components/Person/Person";
import classes from "./team.module.scss";
import { persons } from "./persons";
import { PersonModel } from "../../models/PersonModel";

const Index = (props: {}) => {
  const projectGroup: PersonModel[] = [
    persons.ivar,
    persons.ingrid,
    persons.martijn,
    persons.berenice,
    persons.felienne,
    persons.rhea,
    persons.fleur,
    persons.jelmer,
    persons.jos,
    persons.aad,
    persons.vera,
  ];

  return (
    <>
      <Head>
        <title>Over Co-Teach Informatica</title>
      </Head>
      <Header />
      <main className={classes.Team}>
        <article className={"restrictedWidth"}>
          <SignatureHeader title="Het team" subtitle="stelt zich graag voor" />
          <section className={"restrictedWidth"}>
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
