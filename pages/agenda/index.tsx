import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import SignatureHeader from "../../components/SignatureHeader/SignatureHeader";
import classes from "./agenda.module.scss";
import { menuStructure } from "../../contents/menuStructure";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("https://co-teach.nl/agenda/");
  }, []);

  return null;
};

export default Home;
