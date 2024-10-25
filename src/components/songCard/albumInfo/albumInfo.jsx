import React from "react";
import classNames from "classnames/bind";
import styles from "./albumInfo.module.scss";

const cx = classNames.bind(styles);
export default function AlbumInfo({ album }) {
  console.log("album: ", album);
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className={cx("albumInfo-card")}>
      <div className={cx("albumName-container")}>
        <div className={cx("marquee")}>
          <p>{album?.name + " - " + artists?.join(' , ')}</p>
        </div>
      </div>
      <div className={cx("album-info")}>
        <p></p>
        <div className={cx("album-release")}>
          <p>{album?.release_date}</p>
        </div>
      </div>
    </div>
  );
}
