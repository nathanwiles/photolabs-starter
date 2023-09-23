import { React, useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";


const TopNavigation = ({state: { favs, topics }}) => {
  
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  useEffect(() => {
    setIsFavPhotoExist(favs.length > 0 ? true : false);
  }, [favs]);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <TopicList topicDataList={topics} />
        <span>
          <FavBadge
            selected={true}
            isFavPhotoExist={isFavPhotoExist}
          />
        </span>
      </div>
    </div>
  );
};

export default TopNavigation;
