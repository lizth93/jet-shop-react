import styled from "styled-components";
import Auth from ".";

export default styled(Auth)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .form-elements {
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #fff;
    background-color: #212529;
    min-width: 30rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }

  .heading--1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  input {
    font-family: inherit;
    font-size: 100%;
    min-width: 25rem;
    height: 3rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
  }
  .btn-auth {
    background-color: transparent;
    color: #999;
    border: none;
    cursor: pointer;
    text-align: center;
    display: contents;
  }
  .btn-auth:hover {
    transform: translateY(-3px);
    color: #fff;
  }

  .btn-option {
    display: block;
  }
`;
