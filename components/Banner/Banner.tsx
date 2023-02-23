import React from "react";
import classes from "./Banner.module.scss";

const Banner = () => (
  <section className={classes.Banner}>
    <div className={classes.Background} />
    <div className={classes.Content}>
      <h1 className={classes.SignatureHeader}>
        {/* WARNING: The current styling (spacing etc.) is tailored to this sentence. CSS requires an update if changed. */}
        <span>Informatica op school</span>
        <span> dat doen we samen.</span>
      </h1>
      <p>
        We gunnen iedere leerling een vakdocent informatica voor de klas. 
        Helaas is het tekort aan informaticadocenten nijpend. 
        Terwijl in het land wordt doorgewerkt aan meer docenten voor de klas biedt Co-Teach Informatica 
        de oplossing voor scholen die binnenkort geen informaticadocent hebben omdat deze met pensioen gaat. 
        Alsook een oplossing voor scholen die nog geen docent hebben en graag met informatica willen starten.
        Nu de wereld steeds verder digitaliseert, zijn de kennis en vaardigheden die met dit vak worden opgedaan van onschatbare waarde. 
        Met Co-Teach Informatica kunnen vo-leerlingen de wereld van de informatica op een innovatieve manier ervaren, 
        digitale kennis en vaardigheden opdoen die voor iedereen belangrijk zijn, ongeacht vervolg studiekeuze
      </p>
      <div className={classes.Downwards} aria-hidden>
        ﹀
      </div>
    </div>
  </section>
);

export default Banner;
