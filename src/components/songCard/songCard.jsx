import React from "react";
import classNames from "classnames/bind";
import styles from "./songCard.module.scss";
import AlbumImage from "./albumImage";
import AlbumInfo from "./albumInfo";

const cx = classNames.bind(styles);
export default function SongCard({ album }) {
  return (
    <div className={cx("songCard-body")}>
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}
