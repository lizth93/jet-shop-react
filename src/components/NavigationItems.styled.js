import styled from "styled-components";
import NavigationItems from "./NavigationItems";

export default styled(NavigationItems)`
  .main-nav-list-2 {
    padding: 1.4rem 0 1.4rem 4.8rem;
    background-color: #343a40;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 4.8rem;
    color: #fff;
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
`;
