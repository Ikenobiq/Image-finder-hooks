import { useState } from "react";
import { fields } from "../../fields";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handlechange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          {...fields}
          onChange={handlechange}
          value={query}
          className="SearchForm-input"
        />
      </form>
    </header>
  );
};
export default SearchBar;
