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
						subtitle="Week 5"
          />
		  
					<LeerlingMenu weeknr={5}/>
					
					<h2>Leerdoelen week 5</h2>
					<h3>Hieronder vind je de leerdoelen van de vijfde week.</h3>
					<p>
						<ol>
								<li>Je kan een onderbouwd advies formuleren voor automatisering in een voorgegeven context: gezondheidszorg, domotica of voertuigen in het verkeer. </li>
								<li>Je kan een zelf opgesteld automatiseringsadvies op een begrijpelijke manier presenteren. </li>
						</ol>
					</p>
					
          <h3>Deze week is nog niet beschikbaar.</h3>
					
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;