import React from "react";
import { ReactComponent as VideoIcon } from "../../assets/svg/video-icon.svg";

const IconButton = () => {
  return (
    <button className="btn icon-btn">
      <VideoIcon />
      play trailer
    </button>
  );
};

export default IconButton;
