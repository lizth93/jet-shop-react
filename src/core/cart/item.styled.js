import styled from "styled-components";
import CartItem from "./item";

export default styled(CartItem)`
  max-width: 60rem;
  margin: 0 auto;
  padding: 2rem 3.2rem;
  font-size: 1.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  list-style: none;
  margin-bottom: 2rem;

  .product-properties {
    display: flex;
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
