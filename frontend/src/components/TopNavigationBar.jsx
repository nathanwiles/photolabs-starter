import { React, useContext, useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { Context } from "GlobalState";

const TopNavigation = (props) => {
  const [favs] = useContext(Context);
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  useEffect(() => {
    setIsFavPhotoExist(favs.length > 0 ? true : false);
  }, [favs]);

  const { topicDataList } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicDataList={topicDataList} />
      <FavBadge selected={isFavPhotoExist} isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;
