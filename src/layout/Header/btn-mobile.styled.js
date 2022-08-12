import styled from "styled-components";
import BtnMobileNavigation from "./btn-mobile";

export default styled(BtnMobileNavigation)`
  background-color: #343a40;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;

  .btn-mobile-nav {
    background: none;
    border: none;
    cursor: pointer;
    align-self: center;
    display: none;
    padding: 0.5rem;
    transition: all 0.2s;

    @media (max-width: 56.25em) {
      display: block;
      z-index: 10;
    }
  }

  .btn-mobile-nav:hover {
    background-color: #868e96;
    border-radius: 50%;
  }

  .icon-mobile-nav {
    height: 3rem;
    width: 3rem;
    align-self: center;
    stroke: #fff;
    fill: #fff;
  }
`;
