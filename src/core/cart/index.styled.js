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

    @media (max-width: 56.25em) {
      //900px
      display: grid;
      grid-template-columns: 1fr;
    }

    @media (max-width: 21.875em) {
      //350px
      margin-top: 1rem;
      padding: 1.5rem 1.2rem;
    }
  }
  .cart-items {
    @media (max-width: 21.875em) {
      //350px
      margin: 2rem;
    }
  }
  .shopping-cart {
    font-size: 2rem;
  }
  .successfully-items {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .total-container {
    padding: 2rem 3.2rem;

    min-width: 40rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-size: 1.8rem;

    @media (max-width: 56.25em) {
      //900px
      margin: 0 auto;
    }
    @media (max-width: 21.875em) {
      //350px
      margin: 1.5rem;
      min-width: auto;
    }
  }
  .my-cart {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .action-pay {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;

    @media (max-width: 21.875em) {
      //350px
      flex-wrap: wrap;
    }
  }

  .bank-icon {
    width: 3rem;
    height: 3rem;
  }
`;
