import React from "react";
import classes from "./Video.module.scss";

// Source: https://stackoverflow.com/a/8260383
const youtubeParser = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

const Video = (props: { url: string; headingText?: string }) => {
  const youtubeId = youtubeParser(props.url);

  return (
    <div className={classes.Video}>
      {props.headingText && <h2>{props.headingText}</h2>}
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
