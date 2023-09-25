import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import { ACTIONS } from "../hooks/useApplicationData";
import { getPhotosByTopics } from "api-requests/index";

const TopicList = ({ state: { topics }, dispatch }) => {
  const handleTopicClick = (id) => {
    getPhotosByTopics(id).then((data) => {
      dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data });
    });
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
