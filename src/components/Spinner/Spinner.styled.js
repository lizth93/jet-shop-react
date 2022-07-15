import styled from "styled-components";
import Spinner from ".";

export default styled(Spinner)`
  .spinner {
    margin: 5rem auto;
    text-align: center;
  }

  .spinner svg {
    height: 6rem;
    width: 6rem;
    color: #6741d9;
    animation: rotate 1s infinite linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
