import classNames from 'classnames/bind'
import React from 'react'
import styles from './widgetCard.module.scss'
import WidgetEntry from '../widgetEntry'

const cx = classNames.bind(styles)
export default function WidgetCard({title,similar,featured,newRelease}) {
  return (
    <div className={cx('widgetCard-body')}>
    <p className={cx('widget-title')}>
        {title}
    </p>
    {
        similar?similar.map(artist=>{
            <WidgetEntry
                title={artist?.name}
                subtitle={artist?.followers?.total}
                image={artist?.images[2]?.url}
            />
        }):featured?featured.map(playlist=>{
            <WidgetEntry
                 title={playlist?.name}
                subtitle={playlist?.tracks?.total}
                image={playlist?.images[2]?.url}
            />
        }):newRelease?newRelease.map(album=>{
            <WidgetEntry
                  title={album?.name}
                subtitle={album?.artist[0]?.name}
                image={album?.images[2]?.url}
            />
        }):null
    }
    </div>
  )
}
