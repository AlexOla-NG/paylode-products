import React from "react";
import noImageFound from "../../assets/images/no-image-found.webp";

const ImageText = () => {
  return (
    <div className="image-text">
      <img
        src={noImageFound}
        alt="not found"
        loading="lazy"
        width={100}
        height={100}
      />
      {/* real name */}
      <p>mister nobody</p>

      {/* fictional name */}
      <p>john doe</p>
    </div>
  );
};

export default ImageText;
