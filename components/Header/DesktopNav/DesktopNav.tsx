import React from "react";
import Link from "next/link";
import { navItem } from "../../../models/NavItem";
import classes from "./DesktopNav.module.scss";

const DesktopNav = (props: { navData: navItem[] }) => (
  <nav id={classes.DesktopNav}>
    <ul>
      {props.navData.map((navItem) => (
        <li key={navItem.href}>
          <Link href={navItem.href}>
            <a>{navItem.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default DesktopNav;
