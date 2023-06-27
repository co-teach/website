import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Paths from "../components/Paths/Paths";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";
import { menuStructure } from "../contents/menuStructure";
import { partners } from "../contents/partners";
import type { Partner } from "../models/Partner";
import Video from "../components/Video/Video";

const Home = () => {
  const projectPartners: Partner[] = [
    partners.unl,
    partners.voRaad,
    partners.nldigital,
    partners.slo,
    partners.ieni,
    partners.uu,
    partners.ut,
    partners.vu,
    partners.deloitte,
  ];
  const supportingPartners: Partner[] = [partners.ocw, partners.ezk];
  
  const router = useRouter();
  
  useEffect(() => {
    router.push("https://co-teach.nl/");
  }, []);

  return null;
};

export default Home;
