import Main from "./main";
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
    justify-content: center;
  }
`;
