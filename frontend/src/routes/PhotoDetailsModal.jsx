import React, { useContext } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoListItem from "components/PhotoListItem";

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
        <PhotoListItem
          key={photoData.id}
          {...photoData}
          favDefault={false}
          modal={props.modal}
          imageClass="photo-details-modal__image"
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
