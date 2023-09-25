import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const { state, dispatch } = props;

  return (
    <div className="home-route">
      <TopNavigation state={state} dispatch={dispatch}/>
      <PhotoList
        {...props}
        photoDataList={state.photos}
        listClassName="photo-list"
        photoClassName="photo-list__image"
        userDetailsClassName="photo-list__user-details"
      />
    </div>
  );
};

export default HomeRoute;
