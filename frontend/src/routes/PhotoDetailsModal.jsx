import React, { useContext } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = (props) => {
  const photoData = props.modal.modalPhoto;

  const handleClose = () => {
    props.modal.closeModal();
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
            key={photoData.id}
            {...photoData}
            favDefault={false}
            photoClassName="photo-details-modal__image"
            userDetailsClassName={"photo-details-modal__photographer-details"}
            favIconSize={"small"}
            border='none'
          />
          <hr />
          <header className="photo-details-modal__header">
            Related Photos
          </header>
          <PhotoList
            photoDataList={photoData.similarPhotos}
            modal={props.modal}
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
