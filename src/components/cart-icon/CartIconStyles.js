import { default as styled } from "styled-components";
import { colors } from "../../global";

export const CartIconStyled = styled.div`
width: 4.5rem;
  height: 4.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
    color: ${colors.peach};
  }
`