import { React, useState, useEffect, useContext } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";

import { favContext } from "GlobalFavState";

const PhotoListItem = (props) => {
  const [isFav, setIsFav] = useState(props.favDefault || false);

  const [favs] = useContext(favContext);

  useEffect(() => {
    const fav = favs.includes(props.id) ? true : false;
    setIsFav(fav);
  }, [favs]);

  const handleClick = (e) => {
    const photoId = e.target.closest(".photo-list__item").id;

    props.modal.openModal(photoId);
   
  };

  return (
    <li id={props.id} className="photo-list__item">
      <PhotoFavButton favDefault={props.favDefault} isFav={isFav} />
      <img
        onClick={handleClick}
        src={props.urls.regular}
        className={props.imageClass ? props.imageClass : "photo-list__image"}
      ></img>
      <div className="photo-list__user-details">
        <img src={props.user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          {props.user.name}
          <div className="photo-list__user-location">
            {props.location.city}, {props.location.country},
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
