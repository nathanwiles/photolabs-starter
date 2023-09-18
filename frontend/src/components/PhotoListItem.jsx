import { React, useState, useEffect, useContext} from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoFavButton.scss";
import "../styles/PhotoListItem.scss";

import { favContext } from "GlobalFavState";


const PhotoListItem = (props) => {
  const [isFav, setIsFav] = useState(props.favDefault);

  const [favs] = useContext(favContext);
  
  useEffect(() => {
    const fav = favs.includes(props.id) ? true : false;
    setIsFav(fav);
  },[favs]);


  const handleClick = (e) => {
    console.log(e.target.closest(".photo-list__item"));
  };

  return (
    <li id={props.id} className="photo-list__item">
      <PhotoFavButton favDefault={props.favDefault} isFav={isFav} />
      <img onClick={handleClick} src={props.urls.regular} className="photo-list__image"></img>
      <div className="photo-list__user-details">
        <img src={props.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          {props.username}
          <div className="photo-list__user-location">
            {props.location.city}, {props.location.country},
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
