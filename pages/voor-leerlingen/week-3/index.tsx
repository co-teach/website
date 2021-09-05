import React from "react";
import Head from "next/head";
import Header from "../../../components/Header/Header";
import classes from "../voor-studenten.module.scss";
import SignatureHeader from "../../../components/SignatureHeader/SignatureHeader";
import Footer from "../../../components/Footer/Footer";
import Link from "next/link";
import { menuStructure } from "../../../contents/menuStructure";
import Video from "../../../components/Video/Video";
import VideoPlaceholder from "../../../components/VideoPlaceholder/VideoPlaceholder";
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
					
					<h2>Leerdoelen week 3</h2>
					<h3>Hieronder vind je de leerdoelen van de derde week.</h3>
					<p>
						<ol>
							<li>Je kan uitleggen wat <i>usability</i> en <i>user experience</i> van een product of app betekenen. </li>
							<li>Je kan de 10 heuristieken van Nielsen voor gebruiksvriendelijk ontwerp toelichten. </li>
							<li>Je kan de usability van een digitaal artefact beoordelen aan de hand van de 10 heuristieken van Nielsen.</li>
						</ol>
					</p>
					
        </section>
				
				<section>
					<section>
						<Video
							url={"https://youtu.be/DruDvGDDeYc"}
							headingText={"Awareness"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over awareness hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854826" target="_blank">Awareness - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854830" target="_blank">Awareness - 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854834" target="_blank">Thuisgebruik</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854844" target="_blank">Gezondheidszorg</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854828" target="_blank">Aan de slag 29</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854832" target="_blank">Aan de slag 30</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854836" target="_blank">Aan de slag 31</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854846" target="_blank">Aan de slag 34</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
					
				</section>

				<hr/>
				
				<section>
					<div className={classes.header}>
						<h2>Mijlpaalopdracht 3</h2>
					</div>
					
					<h2>Usability</h2>
					<p>Bij deze opdracht werk je in tweetallen.</p>
					<h3>Beschrijving</h3>
					<p>
						In deze opdracht ga je een website beoordelen op usability.
						Je kan de opdrachten <a href="/docs/voor-leerlingen/Domein F - Informatica en ik - Mijlpaalopdracht 3.docx" download>hier</a> downloaden.
					</p>
					
					
					<h3>Inleveren</h3>
					<p>
						Lever je antwoorden op de vragen in bij het vaksteunpunt. Van je leraar krijg je het email adres waar je het naar toe kan sturen.
					</p>
					<p>
						Let op! Stuur je antwoorden als een bijlage van een mail (word document) en zorg er voor dat de naam van het document en het onderwerp van de mail er zo uit zien:<br/><b>[de opdrachtnaam] - [je volledige naam] - [je school naam]</b>
					</p>
					<p>Als je dit niet doet, kan het zijn dat je opdracht niet goed verwerkt wordt.<br/><br/></p>
					
				</section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
