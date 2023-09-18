import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import Favorites from "components/Favorites";

const HomeRoute = (props) => {
  const {
    topicDataList,
    photoDataList,
   
  } = props;

 
  return (
    <div className="home-route">
      <TopNavigation topicDataList={topicDataList} />
      <PhotoList photoDataList={photoDataList} favDefault={false} modal={props.modal}/>

      <h1>Favs</h1>
      <Favorites />
    </div>
  );
};

export default HomeRoute;
