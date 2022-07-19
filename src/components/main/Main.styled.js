import Main from "./Main";
import styled from "styled-components";

export default styled(Main)`
  .section-products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  .control-pagination {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
  }
`;
