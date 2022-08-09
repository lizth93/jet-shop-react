import Error from ".";
import styled from "styled-components";

export default styled(Error)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .error-text {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 2rem;
  }

  .error-icon {
    stroke: red;
    fill: red;
    width: 6rem;
    height: 6rem;
  }
`;
