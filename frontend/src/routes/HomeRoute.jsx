import React from "react";
import "../styles/HomeRoute.scss";

import Favorites from "components/Favorites";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({state, dispatch}) => {
 
  return (
    <div className="home-route">
      <TopNavigation state={state} dispatch={dispatch}/>
      {state.displayFavs && <Favorites dispatch={dispatch} state={state}/>}
      {!state.displayFavs && <PhotoList
        state= {state}
        dispatch= {dispatch}
        photoDataList={state.photos}
        listClassName="photo-list"
        photoClassName="photo-list__image"
        userDetailsClassName="photo-list__user-details"
      />}
    </div>
  );
};

export default HomeRoute;
