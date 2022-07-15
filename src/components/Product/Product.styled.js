import styled from "styled-components";
import Product from "./Product";

export default styled(Product)`
  .section_product-ppal {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4rem;
  }

  .container.section_product-ppal {
    gap: 9rem;
    margin-top: 4rem;
    max-width: 38rem;
  }

  .section_product-ppal .target-product {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .target-product {
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.089);
    transition: all 0.3s;
    margin-bottom: 4rem;
  }

  .target-product:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .preview-link {
    text-decoration: none;
    color: #333;
  }

  .product__fig {
    text-align: center;
  }

  .product__img {
    width: 100%;
  }
  .check-icon {
    width: 2rem;
    height: 2rem;
    color: #6741d9;
  }

  .product__title {
    font-weight: 700;
    font-size: 2.2rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
    margin: 2rem;
  }
  .descriptions-product {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    padding: 2.4rem;
  }

  .product__description-list {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    list-style: none;
    line-height: 2rem;
  }
  .product__description {
    align-content: center;
  }

  .discount {
    margin-top: 1.8rem;
    font-size: 1.6rem;
    line-height: 1.6;
    color: #6f6f6f;
    text-align: center;
  }
  .product-price {
    font-size: 3.4rem;
    font-weight: 600;
    color: #333;

    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .product-price span {
    font-size: 3rem;
    margin-right: 0.8rem;
  }
`;
