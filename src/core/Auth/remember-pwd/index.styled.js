import styled from "styled-components";
import RememberPwd from "./remember-pwd";

export default styled(RememberPwd)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -62%);

  .form-control {
    display: flex;
    flex-direction: column;
    min-width: 30rem;
    border-radius: 2rem;
    background-color: #212529;
    padding: 3rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
    justify-content: center;
    gap: 2rem;
    color: #fff;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
  }

  .form-elements input:focus {
    outline: none;
    border-color: #5f3dc4;
    background-color: #e5dbff;
  }

  input {
    font-family: inherit;
    font-size: 100%;
    min-width: 26rem;
    height: 3rem;
    box-sizing: border-box;
    border-radius: 0.5rem;
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }
  .successful {
    color: #6741d9;
    font-size: 2rem;
    margin-top: -3rem;
    margin-bottom: 1rem;
  }
  .btn-send {
    display: flex;
  }
  .spinner svg {
    width: 2rem;
    height: 2rem;
    color: #fff;
  }
`;
