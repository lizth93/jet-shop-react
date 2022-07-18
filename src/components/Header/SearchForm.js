import { useState } from "react";
import { useDispatch } from "react-redux";

//own
import { getBySearchTerm } from "../../store/search";
import { productActions } from "../../store/product-slice";

const SearchForm = (props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleOnChangeText = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearchProduct = (ev) => {
    ev.preventDefault();
    dispatch(getBySearchTerm(search));
    dispatch(productActions.renderSpinner());
    setSearch("");
  };

  return (
    <form className={props.className} onSubmit={handleSearchProduct}>
      <input
        type="text"
        className="search-field"
        placeholder="what do you want to search for today?"
        onChange={handleOnChangeText}
        value={search}
      />
      <button className="btn search-btn" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="btn-icon h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </form>
  );
};
export default SearchForm;
