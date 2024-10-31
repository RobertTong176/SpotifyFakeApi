import classNames from "classnames/bind";
import React from "react";
import styles from "./widgetEntry.module.scss";
import WidgetCard from "../widgetCard";

const cx = classNames.bind(styles);
export default function WidgetEntry({ title, subtitle, image }) {

  return (
    <div className={cx("entry-body")}>
      <img src={image} alt={image} className={cx("entry-image")} />
      <div className={cx("entry-right-body")}>
        <div className={cx("entry-title")}>{title}</div>
        <div className={cx("entry-subtitle")}>{subtitle}</div>
      </div>
    </div>
  );
}
