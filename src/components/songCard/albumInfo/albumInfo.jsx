import React from "react";
import classNames from "classnames/bind";
import styles from "./albumInfo.module.scss";

const cx = classNames.bind(styles);
export default function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className={cx("albumInfo-card")}>
      <div className={cx("albumName-container")}>
        <div className={cx("marquee")}>
          <p>{album?.name + " - " + artists?.join(" , ")}</p>
        </div>
      </div>
      <div className={cx("album-info")}>
        <p>{`${album?.name} is a ${album?.album_type} by ${artists?.join(
          " , "
        )} with ${album?.total_tracks} track(s)`}</p>
      </div>
        <div className={cx("album-release")}>
          <p>{`Release date: ${album?.release_date}`}</p>
        </div>
    </div>
  );
}
