import React from "react";
import Link from "next/link";
import { navItem } from "../../../models/NavItem";
import classes from "./DesktopNav.module.scss";
import { useRouter } from "next/router";

const DesktopNav = (props: {
  navData: navItem[];
  headerIsTransparent: boolean | undefined;
  headerIsSupersized: boolean | undefined;
}) => {
  const router = useRouter();

  return (
    <nav
      id={classes.DesktopNav}
      className={[
        props.headerIsTransparent ? classes.transparentBackground : "",
        props.headerIsSupersized ? classes.superSized : "",
      ].join(" ")}
    >
      <ul>
        {props.navData.map((navItem) => (
          <li key={navItem.href}>
            <Link href={navItem.href}>
              <a className={router.pathname === navItem.href ? "active" : ""}>
                {navItem.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
