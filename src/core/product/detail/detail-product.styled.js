import styled from "styled-components";
import DetailProduct from "./detail-product";

export default styled(DetailProduct)`
  .section-products .detail-section {
    justify-content: center;
  }

  .container.detail-section {
    max-width: 150rem;
    padding: 0 3.2rem;
    margin: 9.6rem auto;

    @media (max-width: 21.875em) {
      //350px
      margin: 4.6rem 0rem;
      padding: 0 2.2rem;
    }
  }
  .container {
    @media (max-width: 37.5em) {
      //600px
      margin: 4.6rem 2rem;
    }
  }

  .preview-link {
    text-decoration: none;
    color: #333;
  }

  .grid--3-cols {
    display: grid;
    grid-template-columns: 10% 40% 40%;
    gap: 2.4rem;
    justify-content: space-between;
    align-items: flex-start;

    @media (max-width: 56.25em) {
      //900px
      grid-template-columns: 1fr;
    }
  }
  .small-images {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    text-align: center;
    align-items: center;

    @media (max-width: 56.25em) {
      max-width: max-content;
      flex-direction: inherit;
      box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.089);
      overflow-x: auto;
    }
  }
  .img-small {
    width: 50%;

    @media (max-width: 56.25em) {
      padding: 1rem;
      width: 20%;
    }
  }

  .img-small:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .product_fig_detail {
    text-align: center;

    @media (max-width: 56.25em) {
      max-width: 100%;
    }
  }
  .product-fig {
    @media (max-width: 56.25em) {
      justify-self: center;
    }
  }
  .product__img {
    width: 100%;
  }

  .check-icon {
    width: 2rem;
    height: 2rem;
    color: #6741d9;
  }

  .detail-product {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    padding: 2.4rem 0rem;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.089);
    transition: all 0.3s;
    padding: 6.4rem;

    @media (max-width: 56.25em) {
      grid-column: 1/-1;
      padding: 4rem 4rem;
    }
  }

  .heading--2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
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

  .product-price-detail {
    font-size: 3.4rem;
    font-weight: 600;
    color: #333;

    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .discount-detail {
    margin-top: 1.8rem;
    font-size: 1.6rem;
    line-height: 1.6;
    color: #6f6f6f;
  }

  .comments {
    grid-column: span 3;
  }

  p {
    font-size: 1.6rem;
  }
`;
