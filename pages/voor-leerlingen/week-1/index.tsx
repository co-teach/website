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
						subtitle="Week 1"
          />
		  
					<LeerlingMenu weeknr={1}/>
					
          <section>
						<Video
							url={"https://youtu.be/wRjw88grEL8"}
							headingText={"Introductie domein F"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>
						We beginnen met een intro over informatica in de samenleving. Om er in te komen, kan je beginnen met het lezen op deze pagina:
					</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854716" target="_blank">Vooraf</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>
						Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Deze opdrachten zijn peer feedback opdrachten. Dat betekent dat je de oplossingen bij een groepje (tweetal) medeleerlingen inlevert en die er feedback op geven. Je docent vertelt je hoe je dat inleveren en reageren praktisch gaat doen (bijv. via mail of een schrift).
					</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854718" target="_blank">Aan de slag 1</a></li>
					</ul>
					<p>
						Ga feedback geven op de oplossingen die je van je medeleerlingen hebt gekregen: Hoe tevreden ben je met de oplossingen? Wat is goed en wat moet anders?
					</p>
					
					<details>
            <summary>
              <h2>Bijlagen</h2>
            </summary>
            <h3>Als jouw school het vak informatica nog niet aanbiedt</h3>
            <p>
              Voor deze module maken we gebruik van een aantal apps voor de smartphone:
							<ul>
								<li>Within VR</li>
								<li>IKEA Place</li>
								<li>Halo AR</li>
							</ul>
              Deze kunnen van de App Store (iOS) of Google Play Store (Android) op de smartphone gezet worden.
            </p>
          </details>
					
					<details>
            <summary>
              <h2>Leerdoelen</h2>
            </summary>
            <h3>Deze leerdoelen gaan we in deze module behandelen:</h3>
            <p className={classes.nestedlist}>
							<ol>
								<li>Ubiquitous computing, ambient intelligence, en internet of things
								<ol>
									<li>Je kan de begrippen <i>ubiquitous (pervacive) computing</i> en <i>ambient intelligence</i> uitleggen en het verschil ertussen benoemen.</li>
									<li>Je kan voorbeelden van apparaten noemen die geschikt zijn voor ubiquitous computing.</li>
									<li>Je kan de drie basiselementen noemen voor ambient intelligence.</li>
									<li>Je kan uitleggen wat het <i>internet of things</i>, <i>smart objects</i> en <i>smart en connected devices</i> zijn en wat het verschil tussen deze drie is.</li>
									<li>Je kan uitleggen hoe het internet of things het internet verandert.</li>
								</ol></li>
								
								<li>Embedded systems, AR en VR, en toepassingen
								<ol>
									<li>Je kan het begrip <i>embedded system</i> uitleggen en een aantal voorbeelden en kenmerken ervan opnoemen.</li>
									<li>Je kan uitleggen wat een <i>protocol</i> is en waar het voor dient.</li>
									<li>Je kan het begrip <i>domotica</i> uitleggen en de vijf niveaus van woningautomatisering benoemen.</li>
									<li>Je kan tenminste 3 voorbeelden van <i>wearables</i> geven en tenminste 2 voordelen noemen van het gebruik van wearables in de gezondheidszorg.</li>
									<li>Je kan het verschil uitleggen tussen <i>VR</i> en <i>AR</i> en tenminste 1 voorbeeld geven van VR en 1 van AR.</li>
									<li>Je kan uitleggen wat <i>human</i> en <i>ambient awareness</i> zijn en wat het verschil ertussen is.</li>
									<li>Je kan van <i>human awareness</i> en van <i>ambient awareness</i> telkens minimaal één voorbeeld geven bij thuisgebruik.</li>
								</ol></li>
								
								<li>Usability
								<ol>
									<li>Je kan uitleggen wat <i>usability</i> en <i>user experience</i> van een product of app betekenen. </li>
									<li>Je kan de 10 heuristieken van Nielsen voor gebruiksvriendelijk ontwerp toelichten. </li>
									<li>Je kan de usability van een digitaal artefact beoordelen aan de hand van de 10 heuristieken van Nielsen.</li>
								</ol></li>
								
								<li>Maatschappelijke aspecten, privacy, en security
								<ol>
									<li>Je kan tenminste 2 positieve en 2 negatieve effecten van social media noemen. </li>
									<li>Je kan aangeven hoe je privacy in gevaar kan komen door de rol van social media, het bedrijfsleven of de overheid. </li>
									<li>Je kan een korte beschrijving geven van de AVG en kan aangeven waar de afkorting voor staat.</li>
									<li>Je kan 3 vormen van bedreigingen voor je data noemen. </li>
									<li>Je kan voor elke vorm van bedreiging minimaal 2 voorbeelden geven en voor elke bedreiging een juiste manier van beveiliging. </li>
								</ol></li>
								
								<li>Eindopdracht
								<ol>
									<li>Je kan een onderbouwd advies formuleren voor automatisering in een voorgegeven context: gezondheidszorg, domotica of voertuigen in het verkeer. </li>
									<li>Je kan een zelf opgesteld automatiseringsadvies op een begrijpelijke manier presenteren. </li>
								</ol></li>
							</ol>
            </p>
          </details>
					
        </section>

				<hr/>

        <section>
					<section>
						<Video
							url={"https://youtu.be/OAgvDMI5098"}
							headingText={"Ubiquitous computing"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over ubiquitous computing hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854727" target="_blank">Ubiquitous Computing - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854731" target="_blank">Ubiquitous Computing - 2</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Deze opdrachten zijn peer feedback opdrachten. Dat betekent dat je de oplossingen bij een groepje (tweetal) medeleerlingen inlevert en die er feedback op geven. Je docent vertelt je hoe je dat inleveren en reageren praktisch gaat doen (bijv. via mail of een schrift).</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854729" target="_blank">Aan de slag 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854733" target="_blank">Aan de slag 3</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854735" target="_blank">Aan de slag 4</a></li>
					</ul>
					<p>
						Ga feedback geven op de oplossingen die je van je medeleerlingen hebt gekregen: Hoe tevreden ben je met de oplossingen? Wat is goed en wat moet anders?
					</p>
					
				</section>

				<hr/>

        <section>
					<section>
						<Video
							url={"https://youtu.be/eRmt6Nlfay8"}
							headingText={"Ambient intelligence"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over ambient intelligence hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854737" target="_blank">Ambient Intelligence - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854741" target="_blank">Ambient Intelligence - 2</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Deze opdrachten zijn peer feedback opdrachten. Dat betekent dat je de oplossingen bij een groepje (tweetal) medeleerlingen inlevert en die er feedback op geven. Je docent vertelt je hoe je dat inleveren en reageren praktisch gaat doen (bijv. via mail of een schrift).</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854739" target="_blank">Aan de slag 5</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854743" target="_blank">Aan de slag 6</a></li>
					</ul>
					<p>
						Ga feedback geven op de oplossingen die je van je medeleerlingen hebt gekregen: Hoe tevreden ben je met de oplossingen? Wat is goed en wat moet anders?
					</p>
				</section>

				<hr/>

        <section>
					<section>
						<Video
							url={"https://youtu.be/XQeFLvGZJsc"}
							headingText={"Internet of things"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over ambient intelligence hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854745" target="_blank">Internet of Things - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854749" target="_blank">Internet of Things - 2</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdracht hier onder vinden. Maak deze opdracht in tweetallen. Deze opdracht is een peer feedback opdracht. Dat betekent dat je de oplossing bij een groepje (tweetal) medeleerlingen inlevert en die er feedback op geven. Je docent vertelt je hoe je dat inleveren en reageren praktisch gaat doen (bijv. via mail of een schrift).</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854747" target="_blank">Aan de slag 7</a></li>
					</ul>
					<p>
						Ga feedback geven op de oplossing die je van je medeleerlingen hebt gekregen: Hoe tevreden ben je met de oplossing? Wat is goed en wat moet anders?
					</p>
				</section>
				
				<hr/>
				
				<section>
					<div className={classes.header}>
						<h2>Mijlpaalopdracht 1</h2>
					</div>
					
					<h2>Een mooie toepassing</h2>
					<p>Bij deze opdracht werk je in tweetallen</p>
					<h3>Beschrijving</h3>
					<p>
						Hoe zou informatica jouw leven fijner kunnen maken? Bedenk een mooie toepassing voor je dagelijkse leven die je graag zou willen gebruiken. Probeer iets nieuws te verzinnen dat je leven echt verrijkt of makkelijk maakt. Beschrijf vervolgens hoe die toepassing gerealiseerd zou kunnen worden door een systeem met een aantal smart en connected devices (deze hoeven nog niet in het echt te bestaan). Ga uit van een systeem met circa 5 devices. 
					</p>
					<p>
						Geef antwoord op onderstaande vragen:
					</p>
					<ol>
						<li>Wat is de bedoeling van het systeem?<br/>
						In hoeverre kan het systeem het leven van een gebruiker ‘verbeteren’?<br/><br/></li>
						<li>Hoe ziet het systeem er uit?
							<ul>
								<li>Maak een schets van het systeem.</li>
								<li>Benoem alle onderdelen (devices) en de ‘taak’/functie van elk device (sensoren en actuatoren).</li>
								<li>Beschrijf hoe de onderdelen samenwerken.</li>
							</ul>
						<br/></li>
						<li>In hoeverre gaat het bij je systeem om ubiquitous computing, ambient intelligence en internet of things? Beargumenteer je antwoord.</li>
					</ol>
					
					<h3>Inleveren</h3>
					<p>
						Lever je antwoorden voor deze opdracht in bij het vaksteunpunt. Van je leraar krijg je het email adres waar je het naar toe kan sturen.
					</p>
					<p>
						Let op! Stuur je antwoorden als een bijlage (word document) en zorg er voor dat het onderwerp er zo uit ziet:<br/><b>[de opdrachtnaam] - [eerste volledige naam], [tweede volledige naam] - [je school naam]</b><br/><br/>Bijvoorbeeld als Alan Turing en Ada Lovelace van het Enigma College deze opdracht inleveren, dan ziet het er zo uit:
					</p>
					<img
						src={"/images/voor-leerlingen/email_voorbeeld.png"}
						width="1219"
						height="834"
						aria-hidden
						alt={""}
					/>
					<p>Als je dit niet doet, kan het zijn dat je opdracht niet goed verwerkt wordt.<br/><br/></p>
					
				</section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
