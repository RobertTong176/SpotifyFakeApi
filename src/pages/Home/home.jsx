import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Library from "../Library";
import Player from "../Player";
import Trending from "../Trending";
import Feed from "../Feed";
import Favorites from "../Favorites";
import NotFound from "../NotFound";
import Sidebar from "../../components/sidebar/Sidebar";
import Login from "../auth/Login/login";
import { setClientToken } from "../../utils/spotify";

const cx = classNames.bind(styles);

const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className={cx("main-body")}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="player" element={<Player />} />
          <Route path="trending" element={<Trending />} />
          <Route path="feed" element={<Feed />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
