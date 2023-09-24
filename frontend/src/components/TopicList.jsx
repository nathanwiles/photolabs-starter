import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import { ACTIONS } from "hooks/useApplicationData";

const TopicList = ({ state: { topics }, dispatch }) => {
  
  const handleTopicClick = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data })
      )
      .catch((err) => console.log("error loading images by topic:", err));
  };

  const renderedTopics = topics.map((topicData) => (
    <TopicListItem
      key={topicData.id}
      handleClick={() => handleTopicClick(topicData.id)}
      {...topicData}
    />
  ));

  return <div className="top-nav-bar__topic-list">{renderedTopics}</div>;
};

export default TopicList;
