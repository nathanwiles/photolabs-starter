import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ isFav, handleClick }) => {
  return (
    <div className={`photo-list__fav-icon`} onClick={handleClick}>
      <div className={`photo-list__fav-icon-svg`}>
        <FavIcon displayAlert={false} selected={isFav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
