import { React, useContext } from "react";
import { Context } from "GlobalState";
import PhotoList from "./PhotoList";
import photos from "mocks/photos";

const Favorites = () => {
  const [favs] = useContext(Context);
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
