import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [fav, setFav] = useState(false);

  const handleClick = () => {
    console.log("click");
    
    setFav(fav === true ? false : true);

  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={false} selected={fav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
