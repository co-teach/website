import React from "react";
import Divider from "../Divider/Divider";
import { FaGithub } from "react-icons/fa";
import classes from "./Footer.module.scss";

const Footer = (props: {}) => (
  <Divider marginTop>
    <div className={classes.Footer}>
      <div>
        <a href="https://github.com/co-teach/website">
          <FaGithub /> Deze site is open source - stel dus je eigen aanpassingen
          voor!
        </a>
      </div>
    </div>
  </Divider>
);

export default Footer;
