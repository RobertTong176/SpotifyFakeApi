// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import classNames from "classnames/bind";
import SidebarButton from "./sidebarButton";
import { FaHeart, FaFire, FaPlay } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import apiClient from "../../utils/spotify";
const cx = classNames.bind(styles);

function Sidebar() {
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url)
    });
  }, []);
  return (
    <div className={cx("sidebar-container")}>
      <img src={image} alt="profile" className={cx("image-profile")} />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaFire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<FaHeart />} />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Logout" to="/sign-out" icon={<VscSignOut />} />
    </div>
  );
}

export default Sidebar;
