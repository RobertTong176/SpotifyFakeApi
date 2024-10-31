import classNames from "classnames/bind";
import React from "react";
import styles from "./widgetCard.module.scss";
import WidgetEntry from "../widgetEntry";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";

const cx = classNames.bind(styles);
export default function WidgetCard({ title, similar, featured, newRelease }) {
  
  return (
    <div className={cx("widgetCard-body")}>
      <p className={cx("widget-title")}>{title}</p>
      {similar
        ? similar.map((artist) => (
            <WidgetEntry
              key={artist?.id}
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <WidgetEntry
              key={playlist?.id}
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <WidgetEntry
            key={album?.id}
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
      <div className={cx("widget-fade")}>
        <div className={cx("widget-button")}>
          <IconContext.Provider value={{ size: "24px", color: "#c4d0e3" }}>
            <FiChevronRight />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
