import React from "react";
import Divider from "../Divider/Divider";
import { FaGithub } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import classes from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => (
  <footer>
    <Divider marginTop>
      <div className={classes.Footer}>
        <div>
          <a href="https://github.com/co-teach/website">
            <FaGithub /> Deze site is open source - stel dus je eigen
            aanpassingen voor!
          </a>
          <Link href="/privacyverklaring">
            <a>
              <AiFillSafetyCertificate /> Lees privacyverklaring
            </a>
          </Link>
        </div>
      </div>
    </Divider>
  </footer>
);

export default Footer;
