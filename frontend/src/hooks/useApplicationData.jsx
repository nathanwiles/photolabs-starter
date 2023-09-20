import { React, useState } from "react";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

const useApplicationData = () => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});
  const [favs, setFavs] = useState([]);

  const openModal = (photoId) => {
    const photoIndex = photos.findIndex((data) => data.id === photoId);
    const photo = photos[photoIndex];
    setModalPhoto(photo);
    setModalDisplay(true);
  };

  const closeModal = () => {
    setModalDisplay(false);
    setModalPhoto({});
  };

  const toggleFavs = (id) => {
    if (favs.findIndex((element) => element === id) === -1) {
      setFavs([...favs, id]);
      console.log(`added ${id} to Favs`, [...favs, id]);
    } else {
      const index = favs.findIndex((element) => element === id);
      const newFavs = favs;
      newFavs.splice(index, 1);

      console.log(`removed ${id} from favs`, newFavs);
      setFavs([...newFavs]);
    }
  };

  const state = {
    modalPhoto,
    modalDisplay,
    favs,
    photos,
    topics,
  };

  const data = { photos, topics };

  return { openModal, closeModal, toggleFavs, state, data };
};

export default useApplicationData;
