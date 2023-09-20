import { React, useState, useEffect, useContext } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";

import { favContext } from "GlobalFavState";

const PhotoListItem = ({
  favDefault,
  id,
  modal,
  border,
  urls,
  photoClassName,
  userDetailsClassName,
  user,
  location,
  favIconSize,
}) => {
  const [isFav, setIsFav] = useState(favDefault || false);

  const [favs] = useContext(favContext);

  useEffect(() => {
    const fav = favs.includes(id) ? true : false;
    setIsFav(fav);
  }, [favs]);

  const handleClick = (e) => {
    const photoId = e.target.closest(".photo-list__item").id;

    modal.openModal(photoId);
  };

  return (
    <div id={id} className="photo-list__item" style={{ border: border }}>
      <PhotoFavButton
        favDefault={favDefault}
        isFav={isFav}
        size={favIconSize}
      />
      <img
        onClick={handleClick}
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
