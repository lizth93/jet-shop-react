import styled from "styled-components";
import Footer from "./Footer";

export default styled(Footer)`
  color: #fff;
  padding: 1.2rem 4.8rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #212529;

  .heading--2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  .grid--5-cols {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2.4rem;
  }

  .copyrigth {
    font-size: 1.4rem;
    color: #fff;
    line-height: 1.6;
    grid-column: span 5;
    text-align: center;
  }

  .footer-logo {
    height: 10.8rem;
    width: 10.8rem;
  }
`;
