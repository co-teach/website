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
						subtitle="Week 2"
          />
		  
					<LeerlingMenu weeknr={2}/>
					
          <h3>Deze week is nog niet beschikbaar.</h3>
					
        </section>
      </article>
    </main>
    <Footer />
  </>
);

export default Index;
