import styled from "styled-components";
import SearchForm from "./SearchForm";

export default styled(SearchForm)`
  display: grid;
  grid-template-columns: 10.5fr 1fr;

  input {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    border: none;
    background-color: #f3f0ff;
    border-radius: 7rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    color: #333;
  }

  .search-btn {
    border: 2px solid #999;
    padding: 0.8rem;
    border-radius: 50%;
    cursor: pointer;
    transform: translate(-100%, 0%);
  }

  .btn-icon {
    height: 2.6rem;
    width: 2.6rem;
    color: #6741d9;

    &:hover {
      color: #222;
    }
  }
`;
