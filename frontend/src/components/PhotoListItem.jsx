import { React, useState, useEffect } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";
import { ACTIONS } from "hooks/useApplicationData";

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
  
}) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const fav = favs.includes(id) ? true : false;
    setIsFav(fav);
  }, [favs]);

  const handleImageClick = () => {
    dispatch({ type: ACTIONS.SET_MODAL_PHOTO, payload: id });
    if (!modalDisplay) {
      dispatch({ type: ACTIONS.OPEN_MODAL });
    }
  };

  const handleFavButtonClick = () => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_BY_ID, payload: id });
  };

  return (
    <div id={id} className="photo-list__item" style={{ border: border }}>
      <PhotoFavButton
        handleClick={handleFavButtonClick}
        isFav={isFav}
        dispatch={dispatch}
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
