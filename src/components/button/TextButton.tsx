import { ITextButton } from "./interface";

const TextButton = ({ title, closeModal }: ITextButton) => {
  const handleClick = () => {
    if (closeModal) closeModal();
  };

  return (
    <button className="btn txt-btn" onClick={handleClick}>
      {title}
    </button>
  );
};

export default TextButton;
