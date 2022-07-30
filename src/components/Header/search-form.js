import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//own
import { getBySearchTerm } from "../../store/products/search";
import { productActions } from "../../store/products/product-slice";
import { paginationActions } from "../../store/pagination/pagination-slice";
import { SEARCH } from "config";
import Search from "./Icons/search";

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
        autoComplete="on"
      />
      <button className="btn search-btn" type="submit">
        <Search />
      </button>
    </form>
  );
};
export default SearchForm;
