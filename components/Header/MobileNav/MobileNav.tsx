import React from "react";
import Link from "next/link";
import { navItem } from "../../../models/NavItem";
import classes from "./MobileNav.module.scss";

const MobileNav = (props: {
  navData: navItem[];
  headerIsTransparent: boolean | undefined;
}) => (
  <nav id={classes.MobileNav}>
    <div
      id={classes.menuToggle}
      className={props.headerIsTransparent ? classes.transparentBackground : ""}
    >
      <input type="checkbox" />

      {/* Hamburger menu bars*/}
      <span />
      <span />
      <span />

      <ul id={classes.menu}>
        {props.navData.map((navItem) => (
          <li key={navItem.href}>
            <Link href={navItem.href}>
              <a>{navItem.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default MobileNav;
