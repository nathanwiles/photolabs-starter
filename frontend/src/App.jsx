import "./App.scss";
import "styles/HomeRoute.scss";
import { React, useState, useContext } from "react";

import GlobalFavState from "GlobalFavState";
import photos from "./mocks/photos";
import topics from "mocks/topics";

// Components
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  //modal logic
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalPhoto, setModalPhoto] = useState({});

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
  return (
    <GlobalFavState>
      <div className="App">
        <HomeRoute
          topicDataList={topics}
          photoDataList={photos}
          modal={{ openModal, closeModal }}
        />
        {modalDisplay && <PhotoDetailsModal modal={{ modalPhoto, openModal, closeModal }} />}
      </div>
    </GlobalFavState>
  );
};

export default App;
