import { React } from "react";

import PhotoList from "./PhotoList";
import photos from "mocks/photos";

const Favorites = ({ state: { favs }, state, stateHooks }) => {
 
  const favoritePhotos = favs.map((id) => {
    const matchedPhoto = photos.find((photo) => {
      return photo.id === id;
    });
    if (matchedPhoto) return matchedPhoto;
  });

  return (
    <PhotoList
      favDefault={false}
      state={state}
      stateHooks={stateHooks}
      listClassName="photo-list"
      photoClassName="photo-list__image"
      userDetailsClassName="photo-list__user-details"
      photoDataList={favoritePhotos}
    />
  );
};

export default Favorites;
