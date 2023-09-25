import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";
import { closeModal } from "click-handlers";

const PhotoDetailsModal = ({ state, dispatch }) => {
  const photoData = state.modalPhoto;


  return (
    <div className="photo-details-modal__overlay">
      <div className="photo-details-modal">
        <button
          onClick={()=>closeModal(dispatch)}
          className="photo-details-modal__close-button"
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <div className="photo-details-modal__content-container">
          <PhotoListItem
            state={state}
            dispatch={dispatch}
            key={photoData.id}
            photoData= {photoData}
            photoClassName="photo-details-modal__image"
            userDetailsClassName={"photo-details-modal__photographer-details"}
            border="none"
          />
          <header className="photo-details-modal__header">
            Related Photos
            <hr />
          </header>
          <PhotoList
            photoDataList={photoData.similar_photos}
            state={state}
            dispatch={dispatch}
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
