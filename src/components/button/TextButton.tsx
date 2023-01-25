import { ITextButton } from "./ITextButton";

const TextButton = ({ title }: ITextButton) => {
  return <button className="btn txt-btn">{title}</button>;
};

export default TextButton;
