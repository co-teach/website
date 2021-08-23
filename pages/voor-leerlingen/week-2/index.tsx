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
						subtitle="Week 2"
          />
		  
					<LeerlingMenu weeknr={2}/>
					
        </section>
				
				<section>
					<section>
						<VideoPlaceholder
							headingText={"Embedded systems"}
						/>
					</section>
					<section>
						<VideoPlaceholder
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over embedded systems hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854752" target="_blank">Embedded Systems - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854756" target="_blank">Embedded systems - 2</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit is een peer feedback opdracht. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854754" target="_blank">Aan de slag 8</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854758" target="_blank">Aan de slag 9</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854762" target="_blank">Aan de slag 10</a></li>
					</ul>
					
				</section>

				<hr/>

        <section>
					<section>
						<VideoPlaceholder
							headingText={"Wearables"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over wearables hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854789" target="_blank">Wearables - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854793" target="_blank">Wearables - 2</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit is een peer feedback opdracht. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854791" target="_blank">Aan de slag 17</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854795" target="_blank">Aan de slag 18</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854797" target="_blank">Aan de slag 19</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854799" target="_blank">Aan de slag 20</a></li>
					</ul>
				</section>

				<hr/>

        <section>
					<section>
						<VideoPlaceholder
							headingText={"VR vs AR"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video over VR en AR hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854801" target="_blank">VR vs AR - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854805" target="_blank">VR vs AR - 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854813" target="_blank">VR vs AR - 3</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854821" target="_blank">VR vs AR - 4</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten alleen. Dit is een peer feedback opdracht. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854803" target="_blank">Aan de slag 21</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854807" target="_blank">Aan de slag 22</a></li>
					</ul>
				</section>
				
				<hr/>
				
				<section>
					<div className={classes.header}>
						<h2>Mijlpaalopdracht 2</h2>
					</div>
					
					<h2>VR of AR ervaren</h2>
					<p>Bij deze opdracht werk je alleen</p>
					<h3>Beschrijving</h3>
					<p>
						Je gaat voor deze opdracht een VR of een AR applicatie uitproberen.
						<br/>
						Bekijk de opdrachten <a href='https://maken.wikiwijs.nl/157979#!page-5854809'>23</a>, <a href='https://maken.wikiwijs.nl/157979#!page-5854815'>25</a> of <a href='https://maken.wikiwijs.nl/157979#!page-5854817'>26</a> uit de lesmethode en kies er een van de apps uit die je graag nader wilt verkennen.
						<br/>
						Installeer de gekozen app en probeer deze uit. 
					</p>
					<p>
						Geef antwoord op onderstaande vragen:
					</p>
					<ol>
						<li>Beschrijf waarvoor de app is bedoeld: Wat kun je ermee doen?<br/><br/></li>
						<li>Beschrijf nu wat je hebt uitgeprobeerd: Wat heb je bekeken, welke taken heb je uitgevoerd?<br/><br/></li>
						<li>Beschrijf nu je ervaring:
							<ul>
								<li>In hoeverre lukte het om te doen wat je wilde doen, en op een soepele manier? </li>
								<li>Wat voegde de AR of VR functionaliteit toe ten opzichte van standaard applicaties?</li>
								<li>Wat had je anders verwacht dan het uiteindelijk werkte? Wat viel tegen?</li>
							</ul>
						<br/></li>
						<li>Trek een conclusie: Zou je deze app wel/niet aanbevelen aan je vrienden of familieleden en waarom wel/niet?</li>
					</ol>
					
					<h3>Inleveren</h3>
					<p>
						Lever je antwoorden voor deze opdracht in bij het vaksteunpunt. Van je leraar krijg je het email adres waar je het naar toe kan sturen.
					</p>
					<p>
						Let op! Stuur je antwoorden als een bijlage (word document) en zorg er voor dat het onderwerp er zo uit ziet:<br/><b>[de opdrachtnaam] - [je volledige naam] - [je school naam]</b>
					</p>
					<p>Als je dit niet doet, kan het zijn dat je opdracht niet goed verwerkt wordt.<br/><br/></p>
					
				</section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
