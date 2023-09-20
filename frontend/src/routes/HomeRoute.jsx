import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import Favorites from "components/Favorites";

const HomeRoute = ({state, stateHooks, topics, photos }) => {


  return (
    <div className="home-route">
      <TopNavigation topicDataList={topics} state={state}/>
      <PhotoList
        photoDataList={photos}
        favDefault={false}
        state={state}
        stateHooks={stateHooks}
        favIconSize="large"
        listClassName="photo-list__vertical"
        photoClassName="photo-list__image"
        userDetailsClassName="photo-list__user-details"
      />

      <h1>Favs</h1>
      <Favorites state={state}/>
    </div>
  );
};

export default HomeRoute;
