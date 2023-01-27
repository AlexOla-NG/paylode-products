import { FormEvent, useState } from "react";
import TextButton from "../button/TextButton";
import { ISearch } from "./ISearch";

const Searchbar = ({ getSearchTerm }: ISearch) => {
  const [input, setInput] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSearchTerm(input);
    setInput("");
  };
  return (
    <div className="form-wrapper">
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search movies"
          onChange={handleChange}
          value={input}
        />
        <TextButton title="search" />
      </form>
    </div>
  );
};

export default Searchbar;
