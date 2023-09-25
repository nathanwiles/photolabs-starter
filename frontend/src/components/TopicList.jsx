import React from "react";
import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";
import { renderTopicPhotos } from "click-handlers";

const TopicList = ({ state: { topics }, dispatch }) => {
  
  const renderedTopics = topics.map((topicData) => (
    <TopicListItem
      key={topicData.id}
      handleClick={() => renderTopicPhotos(topicData.id, dispatch)}
      {...topicData}
    />
  ));

  return <div className="top-nav-bar__topic-list">{renderedTopics}</div>;
};

export default TopicList;
