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
        Vo-scholen en -leerlingen staan te popelen om aan de slag te gaan met
        informatica, maar de vraag naar docenten is al jaren groter dan het
        aanbod. Gelukkig zit Nederland bomvol enthousiaste IT professionals.
        Binnen Co-Teach Informatica ontwikkelen zij projectonderwijs dat
        aansluit op hun expertise, samen met bevoegde leraren en vakdidactici.
        Co-Teaching noemen we dat. Zo willen wij in 2023 minstens 3000 extra
        leerlingen het vak informatica aan kunnen bieden –{" "}
        <strong>doe jij mee?</strong>
      </p>
      <div className={classes.Downwards} aria-hidden>
        ﹀
      </div>
    </div>
  </section>
);

export default Banner;
