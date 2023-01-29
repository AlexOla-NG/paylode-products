import Skeleton from "react-loading-skeleton";
import noImageFound from "../../assets/images/no-image-found.webp";
import { ICard } from "./ICard";

const Card = ({ id, title, name, backdrop_path, handleNavigate }: ICard) => {
  let imageUrl = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  const handleClick = () => {
    handleNavigate(id);
  };
  return (
    <article className="fade-in">
      <div className="card">
        <span>
          <img
            src={backdrop_path === null ? noImageFound : imageUrl}
            alt={backdrop_path === null ? "not found" : title}
            loading="lazy"
          />
        </span>

        <h5 onClick={handleClick}>{title || name || <Skeleton />}</h5>
      </div>
    </article>
  );
};

export default Card;
