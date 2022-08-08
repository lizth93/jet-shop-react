import styled from "styled-components";
import Comments from "./comments";

export default styled(Comments)`
  .heading--2 {
    text-align: center;
  }
  .container {
    padding: 2rem;
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    gap: 2rem;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }
  .comment {
    text-decoration: none;
    list-style: none;
    &_user {
      font-size: 2rem;
      &_name {
        color: #6741d9;
      }
    }

    &_description {
      line-height: 3rem;
      display: grid;
      gap: 2rem;

      grid-template-columns: 0.1fr 2fr;
    }
  }
`;
