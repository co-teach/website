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
						subtitle="Week 4"
          />
		  
					<LeerlingMenu weeknr={4}/>
					
					<details>
            <summary>
              <h2>Leerdoelen week 4</h2>
            </summary>
            <h3>Deze leerdoelen gaan we in deze week behandelen:</h3>
            <p className={classes.nestedlist}>
							<ol>
								<li>Je kan tenminste 2 positieve en 2 negatieve effecten van social media noemen. </li>
								<li>Je kan aangeven hoe je privacy in gevaar kan komen door de rol van social media, het bedrijfsleven of de overheid. </li>
								<li>Je kan een korte beschrijving geven van de AVG en kan aangeven waar de afkorting voor staat.</li>
								<li>Je kan 3 vormen van bedreigingen voor je data noemen. </li>
								<li>Je kan voor elke vorm van bedreiging minimaal 2 voorbeelden geven en voor elke bedreiging een juiste manier van beveiliging. </li>
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
