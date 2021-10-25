import React from "react";
import classes from "../Video/Video.module.scss";

// Inspired by https://adactio.com/journal/16594
const VideoPlaceholder = (props: {
  headingText?: string;
  className?: string;
}) => {
  return (
    <div
      className={`${classes.Video} ${props.className ? props.className : ""}`}
    >
      {props.headingText && (
        <div className={classes.header}>
          <h2>{props.headingText}</h2>
        </div>
      )}
      <div>
        <img
          width="1280px"
          height="720px"
          loading="lazy"
          src="/images/voor-leerlingen/video niet beschikbaar.png"
          alt="Deze video komt binnenkort"
        />
      </div>
    </div>
  );
};

export default VideoPlaceholder;
