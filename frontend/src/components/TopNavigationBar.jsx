import { React, useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { ACTIONS } from "hooks/useApplicationData";


const TopNavigation = ({state: { favs }, state, dispatch}) => {
  
  const handleLogoClick = () => {
    fetch(`/api/photos`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data })
      )
      .catch((err) => console.log("error loading images on logo click:", err));
  };


  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);

  useEffect(() => {
    setIsFavPhotoExist(favs.length > 0 ? true : false);
  }, [favs]);

  return (
    <div className="top-nav-bar">
      <span onClick={handleLogoClick} className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar">
        <TopicList state={state} dispatch={dispatch} />
        <span>
          <FavBadge
            selected={true}
            isFavPhotoExist={isFavPhotoExist}
          />
        </span>
      </div>
    </div>
  );
};

export default TopNavigation;
