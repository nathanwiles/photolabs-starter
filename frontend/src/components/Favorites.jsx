import { React } from "react";

import PhotoList from "./PhotoList";

const Favorites = ({ state: { favs }, state, dispatch }) => {
  return (
    <>
      <div className="title" style={{display: 'flex', justifyContent: 'center'}}>
        {favs.length === 0 && <h3> No favorites to display </h3>}
        {favs.length > 0 && <h2> Favorites </h2>}
      </div>
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
