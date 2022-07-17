import styled from "styled-components";
import DetailProduct from "./DetailProduct";

export default styled(DetailProduct)`
  .section-products .detail-section {
    justify-content: center;
  }

  .container.detail-section {
    max-width: 150rem;
    padding: 0 3.2rem;
    margin: 9.6rem auto;
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
  }
  .small-images {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    text-align: center;
    align-items: center;
  }
  .img-small {
    width: 50%;
  }

  .img-small:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  .product_fig_detail {
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

  .detail-product {
    margin-top: 1.2rem;
    font-size: 1.6rem;
    padding: 2.4rem 0rem;
    box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.089);
    transition: all 0.3s;
    padding: 6.4rem;
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

  .btn-add-car,
  .btn-add-car:link,
  .btn-add-car:visited {
    margin-top: 2.4rem;
    display: inline-block;
    font-size: 2rem;
    text-decoration: none;
    padding: 1.6rem 3.2rem;
    border-radius: 9px;
    transition: all 0.5s;
    font-weight: 600;
    border: none;
    cursor: pointer;
    background-color: #7950f2;
    color: #fff;
  }

  .btn-add-car:hover,
  .btn-add-car:active {
    background-color: #5f3dc4;
  }
`;
