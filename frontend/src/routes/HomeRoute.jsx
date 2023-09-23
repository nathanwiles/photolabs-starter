import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";


const HomeRoute = (props) => {
  const {state} = props;
 

  return (
    <div className="home-route">
      <TopNavigation state={state}/>
      <PhotoList
        {...props}
        photoDataList={state.photos}
        favDefault={false}
        favIconSize="large"
        listClassName="photo-list__vertical"
        photoClassName="photo-list__image"
        userDetailsClassName="photo-list__user-details"
      />
      
    </div>
  );
};

export default HomeRoute;
