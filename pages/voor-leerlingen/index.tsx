import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./voor-studenten.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import { menuStructure } from "../../contents/menuStructure";
import Video from "../../components/Video/Video";
import LeerlingMenu from "../../components/LeerlingMenu/LeerlingMenu";

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
            title="Welkom!"
            subtitle="bij Co-teach Informatica."
          />
					
					<LeerlingMenu/>
		  
					<section>
						<Video
							url={"https://youtu.be/bVtNsMuJdew"}
							headingText={"Bekijk eerst deze video"}
						/>
					</section>
					
					<section>
						<Video
							url={"https://youtu.be/zQxbM48SgYg"}
							headingText={"Wat gaan we doen?"}
						/>
					</section>
					
					<div id={classes.Professionals}>
						<div className={classes.content}>
							<h2>
								Hoe werkt het?
							</h2>
							<h3>Het begin gaat iets anders dan de volgende modules.</h3>
							<p>
								Omdat dit het eerste jaar van het project is, staat de eerste module hier op deze website. In latere modules gaan we een ander systeem gebruiken. Als het zo ver is komt daar meer uitleg over.
							</p>
							<h3>Waar vind ik de lessen?</h3>
							<p>
								Bovenaan deze pagina vind je linkjes naar de 5 weken van de eerste module. Als je klaar bent met dit lezen, kan je daar beginnen met week 1. Het is de bedoeling dat je aan het eind van de week de opdrachten van die week inlevert.
							</p>
							<h3>Hoe lever ik de opdrachten in?</h3>
							<p>
								Als er onder een opdracht staat dat je hem in moet leveren, dan moet je de opdracht via mail naar het vaksteunpunt sturen. Van je leraar krijg je een email adres waar je de antwoorden op de opdrachten naar toe kan sturen.
							</p>
							<p>
								Let op! Stuur je antwoorden als een bijlage (word document) en zorg er voor dat het onderwerp er zo uit ziet:<br/><b>[de opdrachtnaam] - [je volledige naam] - [je school naam]</b><br/><br/>Bijvoorbeeld als Alan Turing van het Enigma College de eerste opdracht inlevert, dan ziet het er zo uit:
							</p>
							<img
								src={"/images/voor-leerlingen/email_voorbeeld.png"}
								width="1219"
								height="834"
								aria-hidden
								alt={""}
							/>
							<p>Als je dit niet doet, kan het zijn dat je opdracht niet goed verwerkt wordt.<br/><br/></p>
							
							<h3>Waar kan ik vragen stellen?</h3>
							<p>
								Als je vragen hebt, stel ze dan eerst aan je medeleerlingen in de klas! Niet alleen jij, maar ook je medeleerlingen kunnen zo leren. Als jullie er niet uit komen, dan kan je de vraag sturen naar het zelfde email adres als waar je de antwoorden op de opdrachten naar toe stuurt.<br/>
								<br/>
								Gebruik als onderwerp:<br/>
								<b>Vraag [de opdrachtnaam] - [je volledige naam] - [je school naam]</b>
							</p>
							
						</div>
					</div>

          
        </section>

        
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
