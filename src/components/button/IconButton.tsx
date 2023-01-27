import { ReactComponent as VideoIcon } from "../../assets/svg/video-icon.svg";
import { IIconButton } from "./interface";

const IconButton = ({ openModal }: IIconButton) => {
  const handleClick = () => {
    openModal();
  };
  return (
    <button className="btn icon-btn" onClick={handleClick}>
      <VideoIcon />
      play trailer
    </button>
  );
};

export default IconButton;
