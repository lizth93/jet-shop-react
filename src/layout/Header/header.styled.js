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
    width: 80%;

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
      display: grid;
      grid-template-columns: 15% 85%;

      a {
        grid-row: 1/3;
      }
      nav {
        grid-column: 2/3;
        grid-row: 1/2;
      }
    }
  }
`;
