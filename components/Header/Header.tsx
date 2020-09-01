import React from "react";
import Link from "next/link";
import classes from "./Header.module.scss";

const Header = (props: { transparent?: boolean; superSized?: boolean }) => {
  return (
    <header
      className={`${classes.Header} ${
        props.transparent && classes.TransparentHeader
      } ${props.superSized && classes.SupersizedHeader}`}
    >
      <Link href="/">
        <a className={classes.Logo}>
          <img
            src={
              props.transparent
                ? "/images/co-teach-informatica_logo_wit.png"
                : "/images/co-teach-informatica_logo.png"
            }
            srcSet={
              props.transparent
                ? "/images/co-teach-informatica_logo_wit.svg"
                : "/images/co-teach-informatica_logo.svg"
            }
            alt="Co-Teach Informatica"
          />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/over">
              <a>Over Co-Teach</a>
            </Link>
          </li>
          <li>
            <Link href="/scholen">
              <a>Scholen</a>
            </Link>
          </li>
          <li>
            <Link href="/professionals">
              <a>Professionals</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
