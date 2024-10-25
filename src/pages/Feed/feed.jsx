import React from 'react'
import styles from './feed.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
const Feed = () => {
  return <div className={cx("screen-container")}>feed</div>;
}

export default Feed