import React from "react";
import classes from "./SignatureHeader.module.scss";

const SignatureHeader = (props: { title: string; subtitle: string }) => (
  <h1 className={classes.SignatureHeader}>
    <span>{props.title}</span>
    <span> {props.subtitle}</span>
  </h1>
);

export default SignatureHeader;
