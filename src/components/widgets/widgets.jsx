import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./widgets.module.scss";
import apiClient from "../../utils/spotify";
import WidgetCard from "./widgetCard";
const cx = classNames.bind(styles);
export default function Widgets({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);

  console.log(artistID);
  console.log(similar);
  
  useEffect(() => {
    if (artistID) {
      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setSimilar[a];
        })
        .catch((err) => console.error(err));
      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setFeatured[a];
        })
        .catch((err) => console.error(err));
      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setNewRelease[a];
        })
        .catch((err) => console.error(err));
    }
  }, [artistID]);
  return (
    <div className={cx("widgets-body")}>
      <WidgetCard title="Similar Artists" similar={similar} />
      <WidgetCard title="Made for You" similar={featured} />
      <WidgetCard title="New Release" similar={newRelease} />
    </div>
  );
}
