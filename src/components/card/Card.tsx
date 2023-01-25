import React from "react";
import noImageFound from "../../assets/images/no-image-found.webp";
import { convertTitleCase } from "../shared/helpers";

const Card = () => {
  return (
    <article className="card ">
      <span>
        <img src={noImageFound} alt="not found" loading="lazy" />
      </span>

      <h5>{convertTitleCase("not found")}</h5>
    </article>
  );
};

export default Card;
