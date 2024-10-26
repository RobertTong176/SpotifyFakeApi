import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./player.module.scss";
import APIKit from "../../utils/spotify";
import { useLocation } from "react-router-dom";
import SongCard from "../../components/songCard/songCard";
import Queue from "../../components/queue/queue";
const cx = classNames.bind(styles);
const Player = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTracks] = useState({});
  const [indexTrack, setIndexTrack] = useState([0]);
  const location = useLocation();


  useEffect(() => {
    if (location.state) {
      APIKit.get("playlists/" + location.state?.id + "/tracks").then((res) => {
        setTracks(res?.data?.items);
        setCurrentTracks(res?.data?.items[0]?.track);
      });
    }
  }, [location.state]);
  console.log('curent:',currentTrack);
  return (
    <div className={cx("screen-container flex")}>
      <div className={cx("left-player-body")}></div>
      <div className={cx("right-player-body")}>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setIndexTrack={setIndexTrack}/>
      </div>
    </div>
  );
};

export default Player;
