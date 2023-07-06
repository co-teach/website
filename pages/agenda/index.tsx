import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./agenda.module.scss";
import { menuStructure } from "../../contents/menuStructure";


const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header navData={menuStructure} />
      <main className={classes.Contact}>
        <article className="restrictedWidth">
          <SignatureHeader title="Co-Teach Informatica Agenda" subtitle="." />
      
         const router = useRouter();
  
  useEffect(() => {
    router.push("https://co-teach.nl/agenda/");
  }, []);

  return null;
};
         
          <h2>Webinars voor IT-professionals</h2>
          
          Tijdens deze online informatiebijeenkomst vertellen hoe je als gastdocent een gastlessenreeks van 6 á 8 weken kan verzorgen voor bovenbouw havo/vwo leerlingen. 
          
          <ul>
            <li>
              Maandag 26 juni 2023 – 12.00 tot 12.30&nbsp;
              <a href="https://events.teams.microsoft.com/event/fb3d0629-dadd-47fb-b343-6a7d7715657b@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
            <li>
              Dinsdag 27 juni 2023 – 12.30 tot 13.00&nbsp;
              <a href="https://events.teams.microsoft.com/event/b28e4322-a04b-4415-9886-9126ebf4cc8a@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
            <li>
              Maandag 3 juli 2023  - 12.00 tot 12.30&nbsp;
              <a href="https://events.teams.microsoft.com/event/301d0c2f-f053-42cd-b107-104ff6bd96ca@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
            <li>
              Vrijdag 7 juli 2023 – 12.00 tot 12.30&nbsp;
              <a href="https://events.teams.microsoft.com/event/cf77e24a-4a7f-4013-9740-6eff03630ebc@d72758a0-a446-4e0f-a0aa-4bf95a4a10e7">Microsoft Teams</a>
            </li>
          </ul>

          <h2>Gastdocenten cursus planning</h2>

          <h3>GASTDOCENTEN CURSUS – UTRECHT - JUNI 2023</h3>
          
          Locatie: Universiteit Utrecht

          <ul>
            <li>
              Week 23: Vrijdag 9 Juni 2023 – Deel I | Utrecht | 14u – 17u
            </li>
            <li>
              Week 24: Vrijdag 16 Juni 2023 – Deel II | Online | 14u – 17u
            </li>
            <li>
              Week 26: Vrijdag 30 Juni 2023 – Deel III | Utrecht | 13u – 17u
            </li>
          </ul>
          
          <h3>GASTDOCENTEN CURSUS – DELFT - SEPTEMBER/OKTOBER 2023</h3>
          
          Locatie: TU Delft

          <ul>
            <li>
              Week 37: Vrijdag 15 September 2023 – Deel I | Delft | 14u – 17u
            </li>
            <li>
              Week 38: Vrijdag 22 September 2023 – Deel II | Online | 14u – 17u
            </li>
            <li>
              Week 41: Vrijdag 13 Oktober 2023 – Deel III | Delft | 13u – 17u
            </li>
          </ul>
          
          <h3>GASTDOCENTEN CURSUS – ENSCHEDE - OKTOBER 2023</h3>
          
          Locatie: Universiteit Twente

          <ul>
            <li>
              Week 40: Vrijdag 6 Oktober 2023 – Deel I & II | Enschede| 11u – 17u
            </li>
            <li>
              Week 41: Vrijdag 13 Oktober 2023 – Deel III | Enschede| 13u – 17u
            </li>
          </ul>
          
          
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Home;
