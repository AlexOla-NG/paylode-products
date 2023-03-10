import { IBadge } from "./IBadge";

const Badge = ({ id, name, handleBadgeClick }: IBadge) => {
  // STUB: add selected class onclick,
  // send badge id to parent component
  const handleClick = () => {
    const badgeList = document.querySelectorAll(".badge");

    badgeList.forEach((badge) => {
      badge.addEventListener("click", () => {
        document
          .querySelector(".selected-badge")
          ?.classList.remove("selected-badge");
        badge.classList.add("selected-badge");
      });
    });
    handleBadgeClick(id);
  };

  return (
    <a className="badge" onClick={handleClick}>
      {name}
    </a>
  );
};

export default Badge;
