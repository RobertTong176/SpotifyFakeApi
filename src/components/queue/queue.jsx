import classNames from "classnames/bind";
import React from "react";
import styles from "./queue.module.scss";
import formatDuration from '../../utils/helper'
const cx = classNames.bind(styles);


export default function Queue({ tracks, setCurrentIndex }) {
  return (
    <div className={cx("queue-container")}>
      <div className={cx("queue")}>
        <p className={cx("upNext")}>Up Next</p>
        <div className={cx("queue-list")}>
          {tracks?.map((track, index) => (
            <div
              key={index}
              className={cx("queue-item")}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <p className={cx("track-name")}>
                {track?.track?.name || "Unknown Track"}
              </p>
              <p>{formatDuration(track?.track?.duration_ms)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
