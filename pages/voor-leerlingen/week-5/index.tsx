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
					<ol>
						<li>Je kan een onderbouwd advies formuleren voor automatisering in een voorgegeven context: gezondheidszorg, domotica of voertuigen in het verkeer. </li>
						<li>Je kan een zelf opgesteld automatiseringsadvies op een begrijpelijke manier presenteren. </li>
					</ol>
					
        </section>
				
				<hr/>
				
				<section>
					<div className={classes.header}>
						<h2>Eindopdracht</h2>
					</div>
					
					<h2>Automatiseringsadvies</h2>
					<p>Bij deze opdracht werk je in groepjes van 3.</p>
					<h3>Beschrijving</h3>
					<p>
						Voor de eindopdracht maak je een automatiseringsadvies voor een opdrachtgever (die je zelf mag verzinnen). Je kunt daarbij kiezen uit een van de volgende onderwerpen:
					</p>
					<ol>
						<li>Automatisering woonhuis</li>
						<li>Intelligente auto</li>
						<li>Wearables voor je gezondheid</li>
						<li>E-consulten: advies op afstand</li>
						<li>Een robot voor je grootouders</li>
						<li>Opereren op afstand</li>
					</ol>
					<h3>Onderzoek</h3>
					<p>
						Bestudeer de lesstof uit de lesmethode voor jouw onderwerp en maak de bijbehorende opdrachten. Zie onderstaande lijst:
					</p>
					<ol>
						<li><b>Automatisering woonhuis:</b><br/>
						zie Domotica en domotica protocollen, lesmethode deel B2: vanaf pagina Domotica: protocollen – <a href="https://maken.wikiwijs.nl/157979#!page-5854768" target="_blank">X10</a> t/m <a href="https://maken.wikiwijs.nl/157979#!page-5854786" target="_blank">Ads 16</a></li>
						<li><b>Intelligente auto:</b><br/>
						zie lesmethode deel C: <a href="https://maken.wikiwijs.nl/157979#!page-5854838" target="_blank">Voertuigen in het verkeer</a> + <a href="https://maken.wikiwijs.nl/157979#!page-5854840" target="_blank">Ads 32</a> en <a href="https://maken.wikiwijs.nl/157979#!page-5854842" target="_blank">33</a></li>
						<li><b>Wearables voor je gezondheid:</b><br/>
						zie Gezondheidsplatvormen, lesmethode deel C: <a href="https://maken.wikiwijs.nl/157979#!page-5854848" target="_blank">Gezondheidszorg 2</a> + <a href="https://maken.wikiwijs.nl/157979#!page-5854850" target="_blank">Ads 35</a></li>
						<li><b>E-consulten: advies op afstand:</b><br/>
						Zie E-health: lesmethode deel C: <a href="https://maken.wikiwijs.nl/157979#!page-5854852" target="_blank">Gezondheidszorg 3</a> + <a href="https://maken.wikiwijs.nl/157979#!page-5854854" target="_blank">Ads 36</a></li>
						<li><b>Een robot voor je grootouders:</b><br/>
						zie zorgrobots, lesmethode deel C: <a href="https://maken.wikiwijs.nl/157979#!page-5854856" target="_blank">Gezondheidszorg 4</a> + <a href="https://maken.wikiwijs.nl/157979#!page-5854858" target="_blank">Ads 37</a></li>
						<li><b>Opereren op afstand:</b><br/>
						zie operatierobots, lesmethode deel C: <a href="https://maken.wikiwijs.nl/157979#!page-5854860" target="_blank">Gezondheidszorg 5</a> + <a href="https://maken.wikiwijs.nl/157979#!page-5854862" target="_blank">Ads 38</a></li>
					</ol>
					<p>
						Zoek nu aanvullende informatie op internet.
					</p>
					
					<h3>Opdracht</h3>
					<p>
						De opdracht bestaat uit 2 delen:
					</p>
					<ol>
						<li>Schriftelijke advies: een Word document met daarin je automatiseringsadvies.</li>
						<li>Presentatie voor de klas over jouw advies.</li>
					</ol>
					
					<h4><i>Schriftelijk advies</i></h4>
					<p>
						Gebruik <a href="/docs/voor-leerlingen/Domein F - Informatica en Ik - Eindopdracht - SJABLOON.docx">dit word sjabloon</a> en verwerk de volgende onderdelen in je advies:
					</p>
					<table className={classes.ttop}>
						<tbody>
							<tr>
								<td>Inleiding</td>
								<td>Hierin wordt kort aangeven wie de opdrachtgever is (bijv. een ziekenhuis, een privépersoon, een eigenaar van een woning) en waarom de opdrachtgever automatisering wenst. Beschrijf ook de (fictieve) uitgangssituatie van de opdrachtgever (die mag je dus zelf verzinnen).</td>
							</tr>
							<tr>
								<td>Doel</td>
								<td>Geef in een of twee zinnen aan wat het resultaat van dit project moet zijn.</td>
							</tr>
							<tr>
								<td>Advies</td>
								<td>
									<ol>
										<li>Werk uit wat er geautomatiseerd gaat worden en hoe. Beschrijf duidelijk welke functies het nieuwe systeem over gaat nemen.</li>
										<li>Benoem drie verschillende technische alternatieven waarmee het gewenste resultaat bereikt kan worden.</li>
										<li>Maak een keuze voor één van de hiervoor genoemde alternatieven. Beargumenteer waarom deze keuze het beste is. Denk daarbij bijv. aan kosten, mogelijkheden/uitbreidbaarheid van het systeem, de kenmerken van de situatie waarvoor de oplossing wordt gekozen, etc.</li>
										<li>Benoem mogelijke risico’s van het systeem mbt privacy en beveiliging. Beschrijf daarna mogelijke oplossingen, om deze risico’s zo klein mogelijk te houden.</li>
									</ol>
								</td>
							</tr>
						</tbody>
					</table>
					
					<h4><i>Presentatie</i></h4>
					<p>
						Bereid een presentatie voor de opdrachtgever voor.<br/>
						Maak een poster of dia waarom je het volgende opneemt: 
					</p>
					<ul>
						<li>Waarover breng je advies uit?</li>
						<li>Welke alternatieven zijn er om het genoemde probleem aan te pakken?</li>
						<li>Welke keuze stel je voor (markeer het gekozen alternatief/ de gekozen opties)?</li>
						<li>Je onderbouwing: Waarom adviseer je juist deze oplossing?</li>
					</ul>
					
					
					<h3>Inleveren</h3>
					<p>
						Lever je automatiseringsadvies (gebruik hiervoor het Word sjabloon) en (een foto van) je poster/dia in bij het vaksteunpunt. Van je leraar krijg je het email adres waar je het naar toe kan sturen.
					</p>
					<p>
						Let op! Stuur je antwoorden als een bijlage van een mail (word document) en zorg er voor dat de naam van het document en het onderwerp van de mail er zo uit zien:<br/><b>[de opdrachtnaam] - [eerste volledige naam], [tweede volledige naam], [derde volledige naam] - [je school naam]</b>
					</p>
					<p>Als je dit niet doet, kan het zijn dat je opdracht niet goed verwerkt wordt.<br/><br/></p>
					<p>
						Houd je presentatie op school.
					</p>
					
				</section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
