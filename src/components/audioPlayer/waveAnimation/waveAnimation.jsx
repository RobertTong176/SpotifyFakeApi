import React from "react";
import classNames from "classnames/bind";
import styles from "./waveAnimation.module.scss";

const cx = classNames.bind(styles);
export default function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? "active" : "";
  return (
    <div className={cx("box-container")}>
      <div className={cx("box", "box1", { active: isPlaying })}></div>
      <div className={cx("box", "box-2", { active: isPlaying })}></div>
      <div className={cx("box", "box-3", { active: isPlaying })}></div>
      <div className={cx("box", "box-4", { active: isPlaying })}></div>
      <div className={cx("box", "box-5", { active: isPlaying })}></div>
      <div className={cx("box", "box-6", { active: isPlaying })}></div>
      <div className={cx("box", "box-7", { active: isPlaying })}></div>
      <div className={cx("box", "box-2", { active: isPlaying })}></div>
      <div className={cx("box", "box-3", { active: isPlaying })}></div>
      <div className={cx("box", "box-4", { active: isPlaying })}></div>
      <div className={cx("box", "box-5", { active: isPlaying })}></div>
      <div className={cx("box", "box-6", { active: isPlaying })}></div>
      <div className={cx("box", "box-7", { active: isPlaying })}></div>
    </div>
  );
}
