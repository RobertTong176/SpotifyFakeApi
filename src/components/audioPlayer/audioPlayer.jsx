import React from 'react'
import classNames from 'classnames/bind'
import styles from './audioPlayer.module.scss'
import ProgressCircle from './progressCircle';

const cx = classNames.bind(styles)
export default function AudioPlayer({currentTrack}) {

    console.log(currentTrack);
    
  return (
    <div className={cx('player-body')}>
        <div className={cx('player-left-body')}>
            <ProgressCircle
                percentage={75}
                isPlaying={true}
                // image={currentTrack?.album?.images[0].url}
                size={300}
                color="#c98850"
            />
        </div>
        <div className={cx('player-right-body')}></div>
    </div>
  )
}
