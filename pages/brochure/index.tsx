import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import classes from "./brochure.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import { menuStructure } from "../../contents/menuStructure";

const Index = () => (
  <>
    <Header navData={menuStructure} />

    <main className={classes.main}>
      <article className="restrictedWidth">
        <section className="columns">
 
          <img
            src={"/images/brochures/brochure_1.jpg"}
            width="1552"
            height="1030"
            aria-hidden
            alt={""}
          />
          
          <img
            src={"/images/brochures/brochure_2.jpg"}
            width="1552"
            height="1030"
            aria-hidden
            alt={""}
          />

          </div>
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
