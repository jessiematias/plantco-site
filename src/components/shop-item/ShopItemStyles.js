import { default as styled } from "styled-components";
import { colors } from "../../global";

export const ShopCollection = styled.div`
  margin: 3rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  h1 {
    font-size: 2.8rem;
    margin-bottom: 25px;
    color: ${colors.peach};
    border-bottom: 2px solid;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    grid-gap: 3rem;
    justify-content: space-between;
  }
`