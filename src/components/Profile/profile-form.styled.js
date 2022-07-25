import styled from "styled-components";
import ProfileForm from "./profile-form";

export default styled(ProfileForm)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }
  .error-text {
    color: #b40e0e;
    font-size: 1.1rem;
  }
`;
