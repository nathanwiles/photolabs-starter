import React, { useEffect, useContext, useState } from "react";
import { Context } from "GlobalState";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const [favs, toggleFavs] = useContext(Context);


  const handleClick = (e) => {
    const photo = e.target.closest(".photo-list__item");
    toggleFavs(photo.id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={props.isFav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
