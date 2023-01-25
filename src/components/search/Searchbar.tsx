import TextButton from "../button/TextButton";

const Searchbar = () => {
  return (
    <div className="form-wrapper">
      <form id="form">
        <input type="text" placeholder="search movies" />
        <TextButton title="search" />
      </form>
    </div>
  );
};

export default Searchbar;
