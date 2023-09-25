import { React, useState, useEffect } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import { renderAllPhotos, displayFavorites } from "click-handlers";

const TopNavigation = ({ state: { favs }, state, dispatch }) => {
  const [favsExist, setFavsExist] = useState(false);

  useEffect(() => {
    setFavsExist(favs.length > 0 ? true : false);
  }, [favs]);

  return (
    <div className="top-nav-bar">
      <span
        onClick={() => renderAllPhotos(dispatch)}
        className="top-nav-bar__logo"
      >
        PhotoLabs
      </span>
      <div className="top-nav-bar">
        <TopicList state={state} dispatch={dispatch} />
        <span>
          <FavBadge
            handleClick={() => displayFavorites(dispatch)}
            selected={true}
            isFavPhotoExist={favsExist}
          />
        </span>
      </div>
    </div>
  );
};

export default TopNavigation;
