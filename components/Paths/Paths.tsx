import React from "react";
import classes from "./Paths.module.scss";

const Paths = (props: {}) => (
  <section>
    <div id={classes.Professionals}>
      <ul>
        <li>Enthusiasmeer leerlingen om in IT te werken</li>
        <li>Gebruik je expertise om authentieke uitdagingen te ontwerpen</li>
        <li>Bouw bekwaamheden op in lesgeven en communicatie</li>
        <li>Lever een maatschappelijke bijdrage in digitale geletterheid</li>
      </ul>
      <p>
        Als gastdocent ontvang je een <em>crash course</em>, doorlopende
        professionele begeleiding en heb je de vrijheid om zelf projectonderwijs
        vorm te geven. Lees hier meer over hoe professionals en bedrijven kunnen
        aanhaken en wat de spelregels zijn.
      </p>
    </div>
    <div id={classes.Schools}>
      <ul>
        <li>Volg informatica, van de eerste kennismaking tot het eindexamen</li>
        <li>Leer van professionals en bouw je netwerk op</li>
        <li>Werk aan projecten die nu spelen in het werkveld</li>
      </ul>
      <p>
        Door het aanbieden van zowel een leerlijn als projectonderwijs geeft
        Co-Teach Informatica scholen de kans om ondanks het leraartekort toch
        dit belangrijke vak vorm te kunnen geven. Ben jij een leerling, leraar,
        of school en wil je meedoen? Kijk dan hier.
      </p>
    </div>
  </section>
);

export default Paths;
