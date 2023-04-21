import React from "react";

const Star = (props) => {
  const starIcon = props.isFilled
    ? "https://i.ibb.co/7KsDp1y/icons8-star-filled-24.png"
    : "https://i.ibb.co/x610YJz/icons8-star-24.png";

  return (
    <img
      src={starIcon}
      className="card--favorite"
      onClick={props.handleClick}
      alt=" "
    />
  );
};

export default Star;
