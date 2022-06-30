import styled from "styled-components";
import Header from "./Header";

export default styled(Header)`
  .logo {
    width: 70%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #212529;
    height: 9.6rem;
    padding: 0 4.8rem;
  }
`;
