import styled from "styled-components";
import SearchForm from "./search-form";

export default styled(SearchForm)`
  display: grid;
  grid-template-columns: 10.5fr 1fr;

  @media (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-column: 1/-1;
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
    position: re;

    @media (max-width: 56.25em) {
      margin-bottom: 1rem;
      position: relative;
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
      position: absolute;
      right: -20px;
      top: 64px;
      height: 4.5rem;
      width: 4.5rem;
    }

    @media (max-width: 44em) {
      top: 57px;
    }

    @media (max-width: 28.125em) {
      //screen 450px
      right: -36px;
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
