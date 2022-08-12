import styled from "styled-components";
import SearchForm from "./search-form";

export default styled(SearchForm)`
  display: grid;
  grid-template-columns: 10.5fr 1fr;

  @media (max-width: 56.25em) {
    grid-template-columns: 16.5fr 0fr;
    grid-column: 1/3;
  }

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

    @media (max-width: 56.25em) {
      padding: 1rem;
      margin-bottom: 1rem;
      width: 106%;
    }

    @media (max-width: 43.75em) {
      width: 107%;
    }
    @media (max-width: 40em) {
      width: 109%;
      font-size: 1.5rem;
    }
    @media (max-width: 31.25em) {
      width: 112%;
      font-size: 1.5rem;
    }
  }

  .search-btn {
    border: 2px solid #999;
    padding: 0.8rem;
    border-radius: 50%;
    cursor: pointer;
    transform: translate(-100%, 0%);

    @media (max-width: 56.25em) {
      padding: 0.4rem;
      margin-bottom: 1rem;
      transform: translate(0%, 0%);
    }
  }

  .btn-icon {
    height: 2.6rem;
    width: 2.6rem;
    color: #6741d9;

    &:hover {
      color: #222;
    }

    @media (max-width: 56.25em) {
      width: 3.6rem;
    }
  }
`;
