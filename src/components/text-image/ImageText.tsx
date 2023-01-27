import noImageFound from "../../assets/images/no-image-found.webp";
import { ICastInfo } from "../../interfaces/interfaces";

const ImageText = ({ name, character, profile_path }: ICastInfo) => {
  let imageUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;

  return (
    <div className="image-text">
      <img
        src={profile_path === null ? noImageFound : imageUrl}
        alt={profile_path === null ? "not found" : name}
        loading="lazy"
        width={100}
        height={100}
      />
      {/* real name */}
      <p>{name}</p>

      {/* fictional name */}
      <p>{character}</p>
    </div>
  );
};

export default ImageText;
