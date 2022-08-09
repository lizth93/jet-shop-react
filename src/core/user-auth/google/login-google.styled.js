import styled from "styled-components";
import LoginGoogle from "./login-google";

export default styled(LoginGoogle)`
  .btn-google {
    background-color: #212529;
    color: #fff;
    border-radius: 2rem;
    min-width: 30rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: pointer;
    transition: all 0.5s;
  }

  .btn-google:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    color: #fff;
  }
`;
