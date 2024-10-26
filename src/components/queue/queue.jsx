import classNames from "classnames/bind";
import React from "react";
import styles from "./queue.module.scss";
const cx = classNames.bind(styles);
export default function Queue({ tracks, setIndexTrack }) {
  console.log("tracks: ", tracks);
  console.log("indexTracks: ", setIndexTrack);

  return (
    <div className={cx("queue-container")}>
      <div className={cx("queue")}>
        <p className={cx("upNext")}>Up Next</p>
        <div className={cx("queue-list")}>
          {tracks?.map((track, index) => (
            <div
              key={index}
              className={cx("queue-item")}
              onClick={() => setIndexTrack(index)}
            >
              <p className={cx("track-name")}>{track?.track?.name}</p>
              <p>0:30p</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
