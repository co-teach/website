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
						subtitle="Week 4"
          />
		  
					<LeerlingMenu weeknr={4}/>
					
					<h2>Leerdoelen week 4</h2>
					<h3>Hieronder vind je de leerdoelen van de vierde week.</h3>
					<ol>
						<li>Je kan tenminste 2 positieve en 2 negatieve effecten van social media noemen. </li>
						<li>Je kan aangeven hoe je privacy in gevaar kan komen door de rol van social media, het bedrijfsleven of de overheid. </li>
						<li>Je kan een korte beschrijving geven van de AVG en kan aangeven waar de afkorting voor staat.</li>
						<li>Je kan 3 vormen van bedreigingen voor je data noemen. </li>
						<li>Je kan voor elke vorm van bedreiging minimaal 2 voorbeelden geven en voor elke bedreiging een juiste manier van beveiliging. </li>
					</ol>
					
        </section>
				
				<section>
					<section>
						<VideoPlaceholder
							headingText={"Sociale Media"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over sociale media hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854865" target="_blank">Sociale media - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854869" target="_blank">Sociale media - 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854873" target="_blank">Sociale media - 3</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854867" target="_blank">Aan de slag 39</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854871" target="_blank">Aan de slag 40</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854875" target="_blank">Aan de slag 41</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
					
				</section>

				<hr/>
				
				<section>
					<section>
						<VideoPlaceholder
							headingText={"Privacy"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over privacy hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854877" target="_blank">Privacy - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854881" target="_blank">Privacy - 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854885" target="_blank">Privacy - 3</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854879" target="_blank">Aan de slag 42</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854883" target="_blank">Aan de slag 43</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854887" target="_blank">Aan de slag 44</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
					
				</section>

				<hr/>
				
				<section>
					<section>
						<VideoPlaceholder
							headingText={"Beveiliging"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over beveiliging hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854889" target="_blank">Beveiliging - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854893" target="_blank">Beveiliging - 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854897" target="_blank">Beveiliging - 3</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854903" target="_blank">Beveiliging - 4</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854891" target="_blank">Aan de slag 45</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854895" target="_blank">Aan de slag 46</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854899" target="_blank">Aan de slag 47</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854901" target="_blank">Aan de slag 48</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
					
				</section>

				<hr/>
				
				<section>
					<div className={classes.header}>
						<h2>Mijlpaalopdracht 4</h2>
					</div>
					
					<h2>Toets Maatschappelijke Aspecten</h2>
					<p>Bij deze opdracht werk je individueel.</p>
					<h3>Beschrijving</h3>
					<p>
						Jullie docent op school gaat jullie de toets uitdelen of mailen. De docent laat je ook weten hoe je de antwoorden moet opschrijven (op papier of in een digitaal document).

						Let op: de toets wordt beoordeeld met een cijfer dat meetelt voor je eindcijfer.
					</p>
					<h3>Inleveren</h3>
					<p>
						De docent laat je weten hoe je de antwoorden op de toets kunt inleveren: of bij de docent of bij het vaksteunpunt. 
					</p>
					
				</section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
