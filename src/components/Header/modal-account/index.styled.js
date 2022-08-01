import styled from "styled-components";
import ModalAccount from "./modal-my-account";

export default styled(ModalAccount)`
  .main-nav-link {
    background-color: transparent;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.8rem;
    font-family: inherit;
    font-weight: 500;
    color: #dee2e6;
  }

  .account-modal {
    background-color: #f1f3f5;
    max-height: 85vh;
    padding: 2rem 2rem;
    position: absolute;
    color: #555;
    font-size: 1.6rem;
    line-height: 3rem;
    right: 18rem;
    z-index: 10;
    min-width: 18rem;

    border-radius: 3px;
    box-shadow: 0 0.8rem 5rem 2rem rgba(134, 156, 160, 0.342);
    top: 6.6rem;
    text-align: center;
    visibility: hidden;
    opacity: 0;

    transition: all 0.1s;
    overflow-y: auto;
    list-style: none;
  }

  .account-modal:hover,
  .btn--account:hover + .account-modal {
    visibility: visible;
    opacity: 1;
  }

  .account-list {
    text-decoration: none;
    color: #555;
    font-weight: 500;
  }

  .account-list:hover {
    font-size: 1.7rem;
    color: #222;
    font-weight: 500;
  }
`;
