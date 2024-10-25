import React from "react";
import styles from "./trending.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Trending = () => {
  return <div className={cx("screen-container")}>Trending</div>;
};

export default Trending;
