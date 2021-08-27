import React from "react";
import Head from "next/head";
import Header from "../../../components/Header/Header";
import classes from "../voor-studenten.module.scss";
import SignatureHeader from "../../../components/SignatureHeader/SignatureHeader";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { menuStructure } from "../../../contents/menuStructure";
import Video from "../../../components/Video/Video";
import LeerlingMenu from "../../../components/LeerlingMenu/LeerlingMenu";

const Index = (props: {}) => (
  <>
    <Head>
      <title>
        Co-Teach Informatica voor Leerlingen
      </title>
    </Head>
    <Header navData={menuStructure} />

    <main className={classes.main}>
      <article className="restrictedWidth">
        <section className="columns">
					<SignatureHeader
            title="Domein F: Informatica en Ik"
						subtitle="Week 3"
          />
		  
					<LeerlingMenu weeknr={3}/>
					
					<details>
            <summary>
              <h2>Leerdoelen week 3</h2>
            </summary>
            <h3>Deze leerdoelen gaan we in deze week behandelen:</h3>
            <p className={classes.nestedlist}>
							<ol>
								<li>Je kan uitleggen wat <i>usability</i> en <i>user experience</i> van een product of app betekenen. </li>
								<li>Je kan de 10 heuristieken van Nielsen voor gebruiksvriendelijk ontwerp toelichten. </li>
								<li>Je kan de usability van een digitaal artefact beoordelen aan de hand van de 10 heuristieken van Nielsen.</li>
							</ol>
            </p>
          </details>
					
          <h3>Deze week is nog niet beschikbaar.</h3>
					
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
