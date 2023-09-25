import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ handleClick, isFavPhotoExist, selected }) => {
  return (
    <div onClick={handleClick} className="fav-badge">
      <FavIcon selected={selected} displayAlert={!!isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;
