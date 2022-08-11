import styled from "styled-components";
import Header from "./header";

export default styled(Header)`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212529;
    height: 9.6rem;
    padding: 0 4.8rem;
  }
  .logo {
    width: 80%;

    @media (max-width: 56.25em) {
      align-content: space-evenly;

      .logo {
        width: 100%;
        flex-grow: 1;
      }
    }
  }

  .main-nav {
    display: flex;
    justify-content: space-between;
    background-color: #343a40;
    min-width: 27rem;
    padding: 1rem;
    z-index: 9;
  }

  @media (max-width: 56.25em) {
    .main-nav {
      justify-content: center;
      display: flex;
      position: absolute;
      top: 96px;
      right: 0;
      border-bottom-left-radius: 3rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      padding: 2rem 0;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }

    .nav-open > .main-nav {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translate(0);
    }
  }

  .main-nav-list-2 {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4.8rem;
    color: #fff;

    @media (max-width: 56.25em) {
      flex-direction: column;
      padding-top: 6rem;
    }
  }

  .main-nav-link:link,
  .main-nav-link:visited {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 500;
    color: #dee2e6;
    transition: all 0.3s;
  }

  .main-nav-link:hover,
  .main-nav-link:active {
    color: #b197fc;
  }

  .btn-mobile {
    display: flex;
    justify-content: center;
    background-color: #343a40;
    position: absolute;
    top: 96px;
    right: 0;
    min-width: 27rem;
    padding: 2rem;
    border-bottom-left-radius: 3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    display: none;
  }

  @media (max-width: 56.25em) {
    .header {
      display: grid;
      grid-template-columns: 15% 85%;

      a {
        grid-row: 1/3;
      }
      nav {
        grid-column: 2/3;
        grid-row: 1/2;
      }
    }
  }
`;
