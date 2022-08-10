import styled from "styled-components";
import NavigationItems from "./navigation-items";

export default styled(NavigationItems)`
  .main-nav {
    display: flex;
    justify-content: space-between;
    background-color: #343a40;
    min-width: 27rem;
    padding: 1rem;
  }

  @media (max-width: 56.25em) {
    .main-nav {
      text-align: -webkit-right;
      display: flex;
      position: absolute;
      top: 96px;
      right: 0;
      border-bottom-left-radius: 3rem;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      display: block;
      padding: 2rem 0;
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
    /* height: 100vh; */
    padding: 2rem;
    border-bottom-left-radius: 3rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    /* display: none; */
  }
`;
