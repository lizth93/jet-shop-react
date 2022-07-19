import styled from "styled-components";
import ButtonPagination from "./button";

export default styled(ButtonPagination)`
  .btn-pagination {
    height: 4rem;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #5f3dc4;
    display: flex;
    border-radius: 20px;
    align-items: center;
    padding: 1rem;
  }
  .btn-icon-pagination {
    height: 2.4rem;
    width: 2.4rem;
    text-align: center;
    stroke: #5f3dc4;
  }

  .btn-pagination:hover,
  .btn-pagination:active {
    background-color: #5f3dc4;
    color: #fff;
  }

  .btn-pagination:hover .btn-icon-pagination {
    stroke: #fff;
    color: #fff;
  }

  .btn-pagination:hover .number {
    color: #fff;
  }

  .numeration-page {
    display: flex;
    color: #5f3dc4;
    font-weight: 700;
  }
`;
