import styled from "styled-components";
import CartItem from "./cart-item";

export default styled(CartItem)`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 3.2rem;
  font-size: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  list-style: none;
  margin-bottom: 2rem;

  @media (max-width: 56.25em) {
    //900px
    max-width: 95vh;
  }
  @media (max-width: 21.875em) {
    //350px
    padding: 2rem 2rem;
  }

  .product-properties {
    display: flex;

    @media (max-width: 34.375em) {
      //550px
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
    }
  }

  .product-title {
    margin-bottom: 2rem;
    text-align: center;
  }
  .product-img {
    max-width: 200px;
    max-height: 100px;
    margin-right: 2rem;
  }
  .btns-cart {
    display: flex;
    gap: 0.5rem;
    justify-content: end;
  }
  .product-description {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .product-detail {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .product-total {
    font-size: 2rem;
  }
`;
