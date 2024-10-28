import React from "react";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import formatDuration from "../../utils/helper";
import classNames from "classnames/bind";
import styles from "./audioPlayer.module.scss";

const cx = classNames.bind(styles);
export default function AudioPlayer({ currentTrack }) {
  console.log("current: ", currentTrack);
  const artists = [];
  currentTrack?.album?.artists.forEach((element) => {
    artists.push(element?.name);
  });

  return (
    <div className={cx("player-body")}>
      <div className={cx("player-left-body")}>
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          image={currentTrack?.album?.images[0].url}
          size={300}
          color="#c98850"
        />
      </div>
      <div className={cx("player-right-body")}>
        <p className={cx("title-song")}>{currentTrack?.name}</p>
        <p className={cx("artists-name")}>{artists.join(" - ")}</p>
        <div className={cx("player-right-bottom")}>
          <div className={cx("song-duration")}>
            <p className={cx("duration")}>
              {formatDuration(currentTrack?.duration_ms)}
            </p>
            <WaveAnimation />
          </div>
        </div>
      </div>
    </div>
  );
}
