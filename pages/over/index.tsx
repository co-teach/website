import Head from "next/head";
import React from "react";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica</title>
      </Head>
      <Header />
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          aspernatur delectus, dolor dolores dolorum ducimus eius error ex,
          facere facilis fugiat incidunt minima, molestias quaerat quam
          recusandae repellendus sint voluptatibus!
        </p>
      </main>
    </>
  );
};

export default Home;
