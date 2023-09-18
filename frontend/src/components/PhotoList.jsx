import { React } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


const PhotoList = (props) => {
  
  const { photoDataList } = props;
  const photos = photoDataList.map((photoData) => (
    <PhotoListItem key={photoData.id} {...photoData} favDefault={props.favDefault} />
  ));

  return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
