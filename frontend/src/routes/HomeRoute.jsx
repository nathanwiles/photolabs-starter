import React from "react";

import "../styles/HomeRoute.scss";

import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import Favorites from "components/Favorites";

const HomeRoute = (props) => {
  const { topicDataList, photoDataList, modal } = props;

  return (
    <div className="home-route">
      <TopNavigation topicDataList={topicDataList} />
      <PhotoList
        photoDataList={photoDataList}
        favDefault={false}
        modal={modal}
        favIconSize="large"
        listClassName="photo-list__vertical"
        photoClassName="photo-list__image"
        userDetailsClassName="photo-list__user-details"
      />

      <h1>Favs</h1>
      <Favorites />
    </div>
  );
};

export default HomeRoute;
