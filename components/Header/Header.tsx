import React from "react";
import Link from "next/link";
import classes from "./Header.module.scss";
import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

const navData = [
  {
    href: "/over",
    label: "Over Co-Teach",
  },
  {
    href: "/voor-scholen",
    label: "Scholen",
  },
  {
    href: "/voor-professionals",
    label: "Professionals",
  },
];

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
      <DesktopNav
        navData={navData}
        headerIsTransparent={props.transparent}
        headerIsSupersized={props.superSized}
      />
      <MobileNav navData={navData} headerIsTransparent={props.transparent} />
    </header>
  );
};

export default Header;
