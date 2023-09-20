import { React } from "react";

import PhotoList from "./PhotoList";
import photos from "mocks/photos";

const Favorites = ({state: {favs}}) => {

  const favoritePhotos = favs.map((id) => {
    const matchedPhoto = photos.find((photo) => {
      return photo.id === id;
    });

    if (matchedPhoto) return matchedPhoto;
  });

  return (
    <PhotoList favDefault={true} photoDataList={favoritePhotos}/>
  );
};

export default Favorites;
