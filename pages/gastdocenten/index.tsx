import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import classes from "./gastdocenten.module.scss";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import { menuStructure } from "../../contents/menuStructure";
import Video from "../../components/Video/Video";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = "https://co-teach.nl/gastdocenten/";
  }, []);

  return (
    <>
      <Head>
        <title>
          Co-Teach Informatica voor Professionals, Bedrijven en Organisaties
        </title>
      </Head>
      <Header navData={menuStructure} />

      {/* Add your custom content here if needed */}
      
      <Footer />
    </>
  );
};

export default Index;
