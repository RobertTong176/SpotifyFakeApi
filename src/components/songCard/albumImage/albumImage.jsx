import React from "react";
import classNames from "classnames/bind";
import styles from "./albumImage.module.scss";

const cx = classNames.bind(styles);
export default function AlbumImage({url}) {
  return (
    <div className={cx("albumImage")}>
      <img src={url} alt="album art"  />
      <div className= {cx("albumImage-shadow")}>
        <img src={url} alt="shadow" className={cx("albumImage-shadow")} />
      </div>
    </div>
  );
}
