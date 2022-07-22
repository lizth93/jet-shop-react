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
  max-width: 80rem;

  .form-elements {
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
  }

  .heading--1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  input {
    font-family: inherit;
    font-size: 100%;
    min-width: 25rem;
    height: 3rem;
    box-sizing: border-box;
  }
`;
