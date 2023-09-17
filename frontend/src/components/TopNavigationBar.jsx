import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";


const TopNavigation = (props) => {
  const {topicDataList} = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topicDataList={topicDataList} />
      <FavIcon selected={true} />
    </div>
  );
};

export default TopNavigation;
