import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({title, id, handleClick}) => {
 

  return (
    <div id={id} onClick={handleClick} className="topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;
