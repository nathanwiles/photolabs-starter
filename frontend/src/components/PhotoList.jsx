import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const data = props.photoDataObjs;
  const photos = data.map((photoData) => PhotoListItem(photoData));
  return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
