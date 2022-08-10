import styled from "styled-components";
import Header from "./header";

export default styled(Header)`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212529;
    height: 9.6rem;
    padding: 0 4.8rem;
  }
  .logo {
    width: 70%;

    @media (max-width: 56.25em) {
      align-content: space-evenly;

      .logo {
        width: 100%;
        flex-grow: 1;
      }
    }
  }

  @media (max-width: 56.25em) {
    .header {
      flex-flow: column wrap;
      justify-content: center;
      align-items: flex-end;
      gap: 0.5rem;
    }
  }
`;
