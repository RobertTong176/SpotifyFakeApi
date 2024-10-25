import React from "react";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { loginEndpoint } from "../../../utils/spotify";

const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("login-page")}>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="logo-spotify"
        className={cx("logo")}
      />
      <a href={loginEndpoint}>
        <div className={cx("login-btn")}>Log In</div>
      </a>
    </div>
  );
}

export default Login;
