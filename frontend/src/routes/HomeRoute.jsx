import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const {topicDataList, photoDataList} = props;
  return (
    <div className="home-route">
      <TopNavigation topicDataList={topicDataList} />
      <PhotoList photoDataList={photoDataList} />
    </div>
  );
};

export default HomeRoute;
