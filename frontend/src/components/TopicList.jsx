import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topicDataList } = props;
  const renderedTopics = topicDataList.map((topicData) =>
    <TopicListItem key={topicData.id}  {...topicData} />
  );

  return <div className="top-nav-bar__topic-list">{renderedTopics}</div>;
};

export default TopicList;
