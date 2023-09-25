import { React } from "react";

import PhotoList from "./PhotoList";

const Favorites = ({ state: { favs }, state, dispatch }) => {
  return (
    <>
      {favs.length === 0 && <div> No favorites to display </div>}
      <PhotoList
        state={state}
        dispatch={dispatch}
        listClassName="photo-list"
        photoClassName="photo-list__image"
        userDetailsClassName="photo-list__user-details"
        photoDataList={favs}
      />
    </>
  );
};

export default Favorites;
