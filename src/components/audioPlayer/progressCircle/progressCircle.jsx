import classNames from "classnames/bind";
import React from "react";
import styles from "./progressCircle.module.scss";

const cx = classNames.bind(styles);

const Circle = ({ strokeWidth, size, color, percentage }) => {
  const radius = size / 2 - 10;
  const circle = 2 * Math.PI * radius - 20;
  const strokePct = ((100 - Math.round(percentage)) * circle) / 100;
  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePct !== circle ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circle}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};
export default function ProgressCircle({ percentage, isPlaying, size, color,image }) {
  return (
    <div className={cx("progress-circle")}>
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color={"#3B4F73"} size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={"#efa990"}
            percentage={percentage}
            size={size}
          />
        </g>
        <defs>
          <clipPath id={cx("myCircle")}>
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#fff" />
          </clipPath>
          <clipPath id={cx("innerCircle")}>
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#fff" />
          </clipPath>
        </defs>
        <image
          className={cx(isPlaying ? "active" : "")}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          height={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={cx(isPlaying ? "active" : "")}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#innerCircle)"
        />
      </svg>
    </div>
  );
}
