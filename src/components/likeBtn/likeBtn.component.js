import React from 'react';

export const LikeBtn = ({ children, onClickHandler, icon }) => {
  return (
    <button onClick={onClickHandler} className="favorite-button">
      {/* {icon} */}
      <img className="heart-icon" alt="" src={icon} />
      {children}
    </button>
  );
};
