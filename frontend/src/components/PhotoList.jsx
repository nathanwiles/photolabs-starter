import { React } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photoDataList, listClassName, ...listItemProps }) => {
  
  const loadedPhotoList = photoDataList.map((photoData) => (
    <PhotoListItem key={photoData.id} photoData= {photoData} {...listItemProps} />
  ));

  return <ul className={listClassName}>{loadedPhotoList}</ul>;
};

export default PhotoList;
