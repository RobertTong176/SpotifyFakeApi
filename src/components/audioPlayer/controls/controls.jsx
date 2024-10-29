import React from "react";
import classNames from "classnames/bind";
import styles from "./controls.module.scss";
import { IconContext } from "react-icons";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { IoPlay, IoPause } from "react-icons/io5";

const cx = classNames.bind(styles);
export default function Controls({
  isPlaying,
  setIsPlaying,
  handleNext,
  handlePrev,
}) {
  return (
    <IconContext.Provider value={{ size: "35px", color: "#c4d0e3" }}>
      <div className={cx("controls-wrapper")}>
        <div className={cx("action-btn")} onClick={handlePrev}>
          <MdSkipPrevious />
        </div>
        <div
          className={cx('play-pause-btn',{active:isPlaying})}
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? <IoPause /> : <IoPlay />}
        </div>
        <div className={cx("action-btn")} onClick={handleNext}>
          <MdSkipNext />
        </div>
      </div>
    </IconContext.Provider>
  );
}
