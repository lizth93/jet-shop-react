import styled from "styled-components";
import Cart from "./cart";
export default styled(Cart)`
  .title-cart {
    max-width: 60rem;
    margin: 0 auto;
    font-size: 3rem;
    text-align: center;
    margin-top: 2rem;
  }
  .cart {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 3rem;

    align-items: flex-start;

    padding: 2rem 3.2rem;
  }

  .subtotal-container {
    padding: 2rem 3.2rem;
    min-width: 40rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
