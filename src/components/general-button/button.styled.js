import styled from "styled-components";
import Button from "./button";

export default styled(Button)`
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    background-color: #7950f2;
    transition: all 0.2s;
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 9px;
    position: relative;
    font-size: 2rem;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    color: #fff;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    color: #fff;
  }

  .btn:active {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
