import React from "react";
import Link from "next/link";
import classes from "./FileDownload.module.scss";
import { FaFilePdf, FaFile, FaCloudDownloadAlt } from "react-icons/fa";

const FileDownload = (props: {
  url: string;
  label: string;
  fileType: string;
}) => {
  let icon;
  if (props.fileType === "pdf") {
    icon = <FaFilePdf />;
  } else {
    icon = <FaFile />;
  }

  return (
    <Link href={props.url}>
      <a className={classes.FileDownload}>
        <div className={classes.icon}>{icon}</div>
        <div>{props.label}</div>
        <div className={classes.icon}>
          <FaCloudDownloadAlt />
        </div>
      </a>
    </Link>
  );
};

export default FileDownload;
