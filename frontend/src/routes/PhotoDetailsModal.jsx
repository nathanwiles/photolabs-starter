import React, { useContext } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";
import { ACTIONS } from "hooks/useApplicationData";

const PhotoDetailsModal = ({ state, dispatch }) => {
  const photoData = state.modalPhoto;

  const handleClose = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  };

  return (
    <div className="photo-details-modal__overlay">
      <div className="photo-details-modal">
        <button
          onClick={handleClose}
          className="photo-details-modal__close-button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__content-container">
          <PhotoListItem
            state={state}
            dispatch={dispatch}
            key={photoData.id}
            {...photoData}
            favDefault={false}
            photoClassName="photo-details-modal__image"
            userDetailsClassName={"photo-details-modal__photographer-details"}
            favIconSize={"small"}
            border="none"
          />
          <header className="photo-details-modal__header">
            Related Photos
            <hr />
          </header>
          <PhotoList
            photoDataList={photoData.similarPhotos}
            state={state}
            dispatch={dispatch}
            favIconSize="small"
            listClassName="photo-details-modal__images"
            photoClassName="photo-list__image"
            userDetailsClassName="photo-list__user-details"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
