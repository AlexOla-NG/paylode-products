import React from "react";
import { ReactComponent as VideoIcon } from "../../assets/svg/video-icon.svg";

const Button = () => {
  return (
    <button className="btn">
      <VideoIcon />
      play trailer
    </button>
  );
};

export default Button;
