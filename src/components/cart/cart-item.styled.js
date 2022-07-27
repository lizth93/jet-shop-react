import styled from "styled-components";
import CartItem from "./cart-item";

export default styled(CartItem)`
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0 3.2rem;
  font-size: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* margin: 2rem 2rem; */

  list-style: none;

  .product__img {
    max-width: 200px;
  }
  .btns-cart {
    display: flex;
    gap: 0.5rem;
  }
  .description-product {
    display: flex;
  }
`;
