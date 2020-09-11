import React from "react";
import classes from "./Banner.module.scss";

const Banner = (props: {}) => (
  <section className={classes.Banner}>
    <div className={classes.Background} />
    <div className={classes.Content}>
      <h1 className={classes.SignatureHeader}>
        <span>Informatica op school</span>
        <span> ook als er nog geen leraar is.</span>
      </h1>
      <p>
        Dat ICT-vaardigheden er toe doen, staat buiten kijf. Middelbare scholen
        en leerlingen staan dan ook te popelen om aan de slag te gaan met
        informatica, maar de vraag naar docenten is al jaren groter dan het
        aanbod. Wij willen in 2023 ruim 3000 leerlingen Informatica onderwijs
        aan kunnen bieden - <strong>help jij mee?</strong>
      </p>
    </div>
  </section>
);

export default Banner;
