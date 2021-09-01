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
					
					<details>
            <summary>
              <h2>Leerdoelen week 2</h2>
            </summary>
            <h3>Hieronder vind je de leerdoelen van de tweede week.</h3>
            <p className={classes.nestedlist}>
							<ol>
								<li>Je kan het begrip <i>embedded system</i> uitleggen en een aantal voorbeelden en kenmerken ervan opnoemen.</li>
								<li>Je kan uitleggen wat een <i>protocol</i> is en waar het voor dient.</li>
								<li>Je kan het begrip <i>domotica</i> uitleggen en de vijf niveaus van woningautomatisering benoemen.</li>
								<li>Je kan tenminste 3 voorbeelden van <i>wearables</i> geven en tenminste 2 voordelen noemen van het gebruik van wearables in de gezondheidszorg.</li>
								<li>Je kan het verschil uitleggen tussen <i>VR</i> en <i>AR</i> en tenminste 1 voorbeeld geven van VR en 1 van AR.</li>
								<li>Je kan uitleggen wat <i>human</i> en <i>ambient awareness</i> zijn en wat het verschil ertussen is.</li>
								<li>Je kan van <i>human awareness</i> en van <i>ambient awareness</i> telkens minimaal één voorbeeld geven bij thuisgebruik.</li>
							</ol>
            </p>
          </details>
					
        </section>
				
				<section>
					<section>
						<Video
							url={"https://youtu.be/eWEGpaCmbhI"}
							headingText={"Embedded systems"}
						/>
					</section>
					<section>
						<Video
							url={"https://youtu.be/NeTbRRC0KyQ"}
						/>
					</section>
					
					<h2>Lesstof</h2>
					
					<p>Nu je deze video's over embedded systems en protocollen hebt gezien, kan je beginnen met het lezen van de lesstof op deze paginas:</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854752" target="_blank">Embedded Systems - 1</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854756" target="_blank">Embedded systems - 2</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854760" target="_blank">Domotica: een smart home</a></li>
					</ul>
					
					<h2>Opdrachten</h2>
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854754" target="_blank">Aan de slag 8</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854758" target="_blank">Aan de slag 9</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854762" target="_blank">Aan de slag 10</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
					
				</section>

				<hr/>

        <section>
					<section>
						<Video
							url={"https://youtu.be/7iUjOwA6JPM"}
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
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten in tweetallen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854791" target="_blank">Aan de slag 17</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854795" target="_blank">Aan de slag 18</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854797" target="_blank">Aan de slag 19</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854799" target="_blank">Aan de slag 20</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
				</section>

				<hr/>

        <section>
					<section>
						<Video
						url={"https://youtu.be/RQQjfG7DXGg"}
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
					
					<p>Nu kan je de opdrachten hier onder vinden. Maak deze opdrachten alleen. Dit zijn peer feedback opdrachten. Stuur je antwoorden naar een medeleerling.</p>
					<ul>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854803" target="_blank">Aan de slag 21</a></li>
						<li><a href="https://maken.wikiwijs.nl/157979#!page-5854807" target="_blank">Aan de slag 22</a></li>
					</ul>
					<p>
						Geef feedback op de oplossingen van je medeleerlingen.
					</p>
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
						Je gaat voor deze opdracht een VR (Within VR) en een AR applicatie uitproberen.
						<br/><br/>
						Eerst ga je de VR applicatie Within VR uitproberen. Vervolgens ga je één van de AR applicaties IKEA Place (IKEA meubels in je huis plaatsen), Halo AR (zelfgekozen objecten in AR plaatsen) of Google/Google Lens (objecten in de ruimte herkennen) kiezen en uitproberen. Volg daarvoor de volgende stappen: 
					</p>
					<h4>Stap 1:</h4>
					<ul>
						<li>VR applicatie Within VR uitproberen: maak opdracht <a href="https://maken.wikiwijs.nl/157979#!page-5854809" target="_blank">23</a>.<br/><br/></li>
						<li>Mogelijkheden van AR: Bekijk het filmpje bij opdracht <a href="https://maken.wikiwijs.nl/157979#!page-5854823" target="_blank">23</a>.<br/><br/></li>
					</ul>
					<h4>Stap 2:</h4>
					<p>
						Kies uit de opdrachten 25 t/m 27 één van de apps uit die je graag nader wilt verkennen. Installeer vervolgens de gekozen app en probeer deze uit. 
						<br/><br/>
						Geef antwoord op onderstaande vragen:
					</p>
					<ol>
						<li>Beschrijf waarvoor de app is bedoeld: Wat kun je ermee doen?<br/><br/></li>
						<li>Beschrijf nu wat je hebt uitgeprobeerd: Wat heb je bekeken, welke taken heb je uitgevoerd? (Ga uit van 3 taken die je hebt uitgeprobeerd.)<br/><br/></li>
						<li>Beschrijf nu je ervaring:
							<ul>
								<li>In hoeverre lukte het om te doen wat je wilde doen, en op een soepele manier? </li>
								<li>In hoeverre voegde de AR functionaliteit iets essentieels toe ten opzichte van standaard applicaties?</li>
								<li>Wat had je anders verwacht dan het uiteindelijk werkte? Wat viel tegen?</li>
							</ul>
						<br/></li>
						<li>Trek een conclusie: Zou je deze app wel/niet aanbevelen aan je vrienden of familieleden en waarom wel/niet?<br/><br/></li>
						<li>Vergelijk nu VR en AR:
							<ul>	
								<li>Wat zijn de overeenkomsten tussen virtual reality en augmented reality?</li>
								<li>Wat zijn de verschillen tussen virtual reality en augmented reality?</li>
								<li>Waarvoor zou jij een VR headset gebruiken? Beschrijf een voorbeeldsituatie.</li>
								<li>Waarvoor zou jij een AR headset gebruiken? Beschrijf een voorbeeldsituatie.</li>
							</ul>
						</li>
					</ol>
					
					<h3>Inleveren</h3>
					<p>
						Lever je antwoorden op de vragen 1 t/m 5 (ca. 2 A4's) in bij het vaksteunpunt. Van je leraar krijg je het email adres waar je het naar toe kan sturen.
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
