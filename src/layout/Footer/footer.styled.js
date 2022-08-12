import styled from "styled-components";
import Footer from "./footer";

export default styled(Footer)`
  color: #fff;
  padding: 1.2rem 4.8rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #212529;

  @media (max-width: 46.875em) {
    //1100px
    padding: 1.2rem 1.5rem;
  }

  .heading--2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;

    @media (max-width: 34.375em) {
      //scren 550px
      margin-bottom: 1rem;
    }
  }
  .grid--4-cols {
    display: grid;

    gap: 2.4rem;

    @media (max-width: 68.75em) {
      //1100px
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 46.875em) {
      //screen 750px
      text-align: center;
    }

    @media (max-width: 34.375em) {
      //scren 550px
      grid-template-columns: 1fr;
      gap: 1.8rem;
    }
  }

  .footer-link-list {
    list-style: none;
    display: flex;
    gap: 1.2rem;
    @media (max-width: 46.875em) {
      //screen 750px
      justify-content: center;
    }
  }
  .footer-link:link,
  .footer-link:visited {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;
    transition: all 0.3s;
  }
  .footer-link:hover,
  .footer-link:active {
    color: #6741d9;
  }

  .copyrigth {
    font-size: 1.4rem;
    color: #fff;
    line-height: 1.6;
    grid-column: span 4;
    text-align: center;

    @media (max-width: 46.875em) {
      //screen 750px

      grid-column: 1 /-1;
    }
  }

  .logo {
    height: 10.8rem;
    width: 10.8rem;

    @media (max-width: 46.875em) {
      //screen 750px
      height: 8.8rem;
      width: 8.8rem;
    }
  }

  @media (max-width: 46.875em) {
    .logo-ppal {
      grid-column: 1 /-1;
      justify-self: center;
    }
  }
  @media (max-width: 34.375em) {
    //scren 550px
    .logo-ppal {
      grid-column: 1 /-1;
    }
  }

  grid-column: span 3;

  .text {
    font-size: 1.2rem;
  }
`;
