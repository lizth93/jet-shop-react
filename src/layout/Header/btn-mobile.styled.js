import styled from "styled-components";
import BtnMobileNavigation from "./btn-mobile";

export default styled(BtnMobileNavigation)`
  background-color: #343a40;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;

  .btn-mobile-nav {
    background: none;
    border: none;
    cursor: pointer;
    align-self: center;
    display: none;

    button {
      border: none;
      background: none;
    }

    @media (max-width: 56.25em) {
      display: block;
      z-index: 10;
    }
  }

  .icon-mobile-nav {
    height: 3rem;
    width: 3rem;
    align-self: center;
    stroke: #fff;
    fill: #fff;
  }
`;
