import React from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ isFav, size, handleClick}) => {
  

  const buttonSize = 32 * (size === "large" ? 2 : 1);

  return (
    <div
      className={`photo-list__fav-icon__${size}`}
      onClick={handleClick}
      style={{ height: `${buttonSize}`, width: `${buttonSize}` }}
    >
      <div
        className={`photo-list__fav-icon-svg__${size}`}
        style={{ height: `${buttonSize}`, width: `${buttonSize}` }}
      >
        <FavIcon displayAlert={false} selected={isFav} size={size} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
