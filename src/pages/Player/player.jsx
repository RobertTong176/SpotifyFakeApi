import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import styles from "./player.module.scss";
import APIKit from "../../utils/spotify";
import { useLocation } from "react-router-dom";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";
import AudioPlayer from "../../components/audioPlayer";
import Widgets from "../../components/widgets";
const cx = classNames.bind(styles);
const Player = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  
  useEffect(() => {
    if (location.state) {
      APIKit.get("playlists/" + location.state?.id + "/tracks").then((res) => {
        setTracks(res?.data?.items);
        setCurrentTrack(res?.data?.items[0]?.track);
      });
    }
  }, [location.state]);

  useEffect(() => {
    if (tracks.length > 0 && currentIndex < tracks.length) {
      setCurrentTrack(tracks[currentIndex]?.track);
    }
  }, [currentIndex, tracks]);

  return (
    <div className={cx("screen-container flex")}>
      <div className={cx("left-player-body")}>
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Widgets artistID = {currentTrack?.album?.artists[0]?.id}/>
      </div>
      <div className={cx("right-player-body")}>
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
