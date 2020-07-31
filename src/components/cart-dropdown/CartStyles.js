import { default as styled } from "styled-components";
import { colors } from "../../global";

export  const CartDropdown = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${colors.peach};
  background-color: white;
  top: 5rem;
  right: 7rem;
  z-index: 5;

  .cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin: 0;
  }
  .empty-message {
    font-size: 1.4rem;
    margin: auto;
    text-align: center;
  }
`
