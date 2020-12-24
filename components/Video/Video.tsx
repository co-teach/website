import React, { useEffect, useState } from "react";
import classes from "./Video.module.scss";

// Source: https://stackoverflow.com/a/8260383
const youtubeParser = (url: string): string | null => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

// Inspired by https://adactio.com/journal/16594
const Video = (props: { url: string; headingText?: string }) => {
  const youtubeId = youtubeParser(props.url);

  const [isActivated, setIsActivated] = useState(false);

  return (
    <div className={classes.Video}>
      {props.headingText && <h2>{props.headingText}</h2>}
      {isActivated ? (
        <iframe
          title="Video"
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div>
          <a
            href={`https://www.youtube.com/watch?v=${youtubeId}`}
            onClick={(event) => {
              event.preventDefault();
              setIsActivated(true);
            }}
          >
            <div className={classes.playButton}>
              <div>▶</div>
            </div>
            <img
              width="1280px"
              height="720px"
              loading="lazy"
              src={`https://i.ytimg.com/vi/${youtubeId}/default.jpg`}
              alt="Video"
              srcSet={`
                https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg 320w,
                https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg 480w,
                https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg 1280w
              `}
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Video;
