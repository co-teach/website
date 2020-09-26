import React from "react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Divider from "../../components/Divider/Divider";
import path from "path";
import fs from "fs";
import { parseMarkdownFileContents } from "../../helpers/markdownHelpers";
import { ParsedMarkdown } from "../../models/ParsedMarkdown";
import Footer from "../../components/Footer/Footer";
import classes from "./privacyverklaring.module.scss";

const Index = (props: { parsedMarkdown: ParsedMarkdown }) => {
  return (
    <>
      <Head>
        <title>Co-Teach Informatica: Privacyverklaring</title>
      </Head>
      <Header />
      <Divider marginBottom />
      <main>
        <section>
          <h1>{props.parsedMarkdown.title}</h1>
          <div className={classes.lastChangedBy}>
            Laatst aangepast op {props.parsedMarkdown.date}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: props.parsedMarkdown.contentHtml,
            }}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const fullPath = path.resolve(
    "./pages/privacyverklaring/privacyverklaring.md"
  );
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const parsedMarkdown: ParsedMarkdown = await parseMarkdownFileContents(
    fileContents
  );

  return {
    props: {
      parsedMarkdown,
    },
  };
}
