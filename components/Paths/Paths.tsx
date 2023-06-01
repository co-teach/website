import React from "react";
import classes from "./Paths.module.scss";
import Link from "next/link";

const Paths = () => (
  <section id={classes.Paths}>
    <div id={classes.Professionals}>
      <Link href="/gastdocenten">
        <a aria-hidden tabIndex={-1}>
          <img src="/images/professionals_illustration.svg" aria-hidden />
        </a>
      </Link>
      <div className={classes.content}>
        <h2>
          Professionals{" "}
          <span>Voor bedrijven en instanties met oog voor de toekomst</span>
        </h2>
        <ul>
          <li>Enthousiasmeer leerlingen om in de IT te werken</li>
          <li>Gebruik je expertise om authentieke uitdagingen te ontwerpen</li>
          <li>Bouw bekwaamheden op in lesgeven en communicatie</li>
          <li>
            Lever een maatschappelijke bijdrage aan digitale geletterdheid
          </li>
        </ul>
        <p>
          Als gastdocent krijg je een <em>gastdocenten cursus</em>, doorlopende
          professionele begeleiding en heb je de vrijheid om zelf
          projectonderwijs vorm te geven.{" "}
          <Link href="/voor-professionals">
            <a>
              Meer informatie voor IT-professionals, managers en werkgevers.
            </a>
          </Link>
        </p>
      </div>
    </div>
    <div id={classes.Schools}>
      <Link href="/voor-scholen">
        <a aria-hidden tabIndex={-1}>
          <img src="/images/schools_illustration.svg" aria-hidden />
        </a>
      </Link>
      <div className={classes.content}>
        <h2>
          Scholen <span>Voor leerlingen die digitaal bekwaam willen zijn</span>{" "}
        </h2>
        <ul>
          <li>
            Bied informatica aan, van eerste kennismaking tot eindexamen
            (havo/vwo)
          </li>
          <li>
            Breng de laatste vernieuwingen in het werkveld naar het klaslokaal
          </li>
          <li>
            Geef leerlingen de kans hun professionele network op te bouwen
          </li>
        </ul>
        <p>
          Door het aanbieden van zowel een leerlijn als projectonderwijs geeft
          Co-Teach Informatica scholen de kans om ondanks het lerarentekort toch
          dit belangrijke vak vorm te kunnen geven.{" "}
          <Link href="/voor-scholen">
            <a>
              Meer informatie voor schoolbestuurders, leraren en leerlingen.
            </a>
          </Link>
        </p>
      </div>
    </div>
  </section>
);

export default Paths;
