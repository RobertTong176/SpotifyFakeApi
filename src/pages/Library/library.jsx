import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./library.module.scss";
import APIKit from "../../utils/spotify";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
const Library = () => {
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    APIKit.get("me/playlists").then((response) => {
      setPlaylists(response.data.items);
    });
  }, []);

  const navigate = useNavigate();

  const playPlayLists = (id) => {
    navigate("/player", { state: { id: id } });
  };
  return (
    <div className={cx("screen-container")}>
      <div className={cx("library-body")}>
        {playlists?.map((playlist) => (
          <div
            key={playlist.id}
            className={cx("playlist-card")}
            onClick={() => playPlayLists(playlist.id)}
          >
            <img
              src={playlist.images?.[0].url}
              alt={playlist.images?.[0].url}
              className={cx("card-image")}
            />
            <p className={cx("playlist-title")}>{playlist.name}</p>
            <p className={cx("playlist-subtitle")}>
              {playlist.tracks.total} Songs
            </p>
            <div className={cx("playlist-fade")}>
              <IconContext.Provider
                value={{
                  size: "50px",
                  className: cx("playlist-icon"),
                }}
              >
                <AiFillPlayCircle />
              </IconContext.Provider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
