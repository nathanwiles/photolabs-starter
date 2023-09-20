import { React } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { favDefault, modal, favIconSize, photoClassName, userDetailsClassName } = props;
  const listItemProps = {
    favDefault,
    modal,
    photoClassName,
    userDetailsClassName,
    favIconSize
  };

  const { photoDataList } = props;
  const photos = photoDataList.map((photoData) => (
    <PhotoListItem key={photoData.id} {...photoData} {...listItemProps} />
  ));

  return <ul className={props.listClassName}>{photos}</ul>;
};

export default PhotoList;
