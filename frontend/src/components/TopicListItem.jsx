import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { id, title } = props;

  return (
    <div className="topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;
