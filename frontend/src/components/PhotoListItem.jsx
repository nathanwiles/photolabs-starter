import { React, useState, useEffect } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";
import { renderModalPhoto, togglePhotoFavStatus } from "click-handlers";
import { addFavoriteById, deleteFavoriteById } from "api-requests";

const PhotoListItem = ({
  state: { favs, modalDisplay },
  dispatch,
  photoData: { id, urls, user, location },
  photoData,
  border,
  photoClassName,
  userDetailsClassName,
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fav =
      favs.findIndex((element) => element.id === id) === -1 ? false : true;
    setIsFav(fav);
  }, [favs]);

  

  return (
    <div id={id} className="photo-list__item" style={{ border: border }}>
      <PhotoFavButton
        handleClick={() => togglePhotoFavStatus(photoData, isFav, dispatch)}
        isFav={isFav}
        dispatch={dispatch}
      />

      <img
        onClick={() => renderModalPhoto(id, modalDisplay, dispatch)}
        src={urls.regular}
        className={photoClassName}
      ></img>

      <div className={userDetailsClassName}>
        <img src={user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          {user.name}

          <div className="photo-list__user-location">
            {location.city}, {location.country}.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
