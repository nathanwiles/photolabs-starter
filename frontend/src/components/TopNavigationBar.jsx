import { React, useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { ACTIONS } from "hooks/useApplicationData";
import { getAllPhotos } from "../api-requests/index";

const TopNavigation = ({ state: { favs }, state, dispatch }) => {
  const handleLogoClick = () => {
    getAllPhotos()
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTOS_DATA, payload: data })
      )

      .catch((err) => console.log("error loading images on logo click:", err));
  };

  const [isFavsExist, setIsFavsExist] = useState(false);

  useEffect(() => {
    setIsFavsExist(favs.length > 0 ? true : false);
  }, [favs]);

  return (
    <div className="top-nav-bar">
      <span onClick={handleLogoClick} className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <div className="top-nav-bar">
        <TopicList state={state} dispatch={dispatch} />
        <span>
          <FavBadge selected={true} isFavPhotoExist={isFavsExist} />
        </span>
      </div>
    </div>
  );
};

export default TopNavigation;
