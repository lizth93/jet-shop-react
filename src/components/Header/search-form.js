import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import { getBySearchTerm } from "../../store/products/search";
import { productActions } from "../../store/products/product-slice";
import { paginationActions } from "../../store/pagination/pagination-slice";
import { SEARCH } from "config";

const SearchForm = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchTerm, setSearch] = useState("");

  const handleOnChangeText = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSearchProduct = (ev) => {
    ev.preventDefault();
    dispatch(paginationActions.setSkipPages(0));
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(paginationActions.calculatePages());
    history.push(`${SEARCH}${searchTerm}`);

    dispatch(getBySearchTerm(searchTerm));
    dispatch(productActions.setSearch(searchTerm));

    setSearch("");
  };

  return (
    <form className={props.className} onSubmit={handleSearchProduct}>
      <input
        type="text"
        className="search-field"
        placeholder="what do you want to search for today?"
        onChange={handleOnChangeText}
        value={searchTerm}
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
