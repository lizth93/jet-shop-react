import styled from "styled-components";
import NavigationIcons from "./navigation-icons";

export default styled(NavigationIcons)`
  justify-content: space-between;
  .main-nav-list {
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

  .btn-icon-1 {
    height: 2.6rem;
    width: 2.6rem;
    color: #fff;
  }
`;
