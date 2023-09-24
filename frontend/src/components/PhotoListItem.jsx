import { React, useState, useEffect } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";
import { ACTIONS } from "hooks/useApplicationData";

// import { favContext } from "GlobalFavState";

const PhotoListItem = ({
  state: { favs, modalDisplay },
  dispatch,
  id,
  border,
  urls,
  photoClassName,
  userDetailsClassName,
  user,
  location,
  favIconSize,
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fav = favs.includes(`${id}`) ? true : false;
    setIsFav(fav);
  }, [favs]);

  const handleImageClick = (e) => {
    const photoId = e.target.closest(".photo-list__item").id;
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: photoId });
    if (!modalDisplay) {
      dispatch({ type: ACTIONS.OPEN_MODAL });
    }
  };

  const handleFavButtonClick = (e) => {
    const photo = e.target.closest(".photo-list__item");
    dispatch({ type: ACTIONS.TOGGLE_FAV_BY_ID, payload: photo.id });
  };

  return (
    <div id={id} className="photo-list__item" style={{ border: border }}>
      <PhotoFavButton
        handleClick={handleFavButtonClick}
        isFav={isFav}
        dispatch={dispatch}
        size={favIconSize}
      />

      <img
        onClick={handleImageClick}
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
