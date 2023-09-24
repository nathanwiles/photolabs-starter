import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({title, handleClick}) => {
 

  return (
    <div onClick={handleClick} className="topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;
