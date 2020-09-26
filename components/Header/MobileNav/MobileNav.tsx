import React from "react";
import Link from "next/link";
import { navItem } from "../../../models/NavItem";
import classes from "./MobileNav.module.scss";
import { useRouter } from "next/router";

const MobileNav = (props: {
  navData: navItem[];
  headerIsTransparent: boolean | undefined;
}) => {
  const router = useRouter();

  return (
    <nav id={classes.MobileNav}>
      <div
        id={classes.menuToggle}
        className={
          props.headerIsTransparent ? classes.transparentBackground : ""
        }
      >
        <input type="checkbox" aria-hidden tabIndex={-1} />

        {/* Hamburger menu bars*/}
        <span aria-hidden />
        <span aria-hidden />
        <span aria-hidden />

        <ul id={classes.menu}>
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
      </div>
    </nav>
  );
};

export default MobileNav;
