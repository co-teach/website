import React from "react";
import classes from "./Divider.module.scss";

const Divider = (props: { marginTop?: boolean; marginBottom?: boolean }) => {
  let classNames = [classes.ImageDivider];

  if (props.marginTop) {
    classNames.push(classes.marginTop);
  }
  if (props.marginBottom) {
    classNames.push(classes.marginBottom);
  }

  return <div className={classNames.join(" ")} />;
};

export default Divider;
