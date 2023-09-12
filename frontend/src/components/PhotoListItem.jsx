import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const { photoData } = props;
  return (
    <div key={photoData.id} className="photo-list__item">
      <img src={photoData.imageSource} className="photo-list__image"></img>
      <div className="photo-list__user-details">
        <img src={photoData.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          {photoData.username}
          <div className="photo-list__user-location">
            {photoData.location.city}, {photoData.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
