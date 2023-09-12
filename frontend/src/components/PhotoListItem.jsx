import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <li key={props.id} className="photo-list__item">
      <PhotoFavButton />
      <img src={props.urls.regular} className="photo-list__image"></img>
      <div className="photo-list__user-details">
        <img src={props.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          {props.username}
          <div className="photo-list__user-location">
            {props.location.city}, {props.location.country}
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
