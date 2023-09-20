import { React, useContext, useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { favContext } from "GlobalFavState";

const TopNavigation = (props) => {
  const [favs] = useContext(favContext);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  useEffect(() => {
    setIsFavPhotoExist(favs.length > 0 ? true : false);
  }, [favs]);

  const { topicDataList } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <TopicList topicDataList={topicDataList} />
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
