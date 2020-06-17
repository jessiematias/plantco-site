import { default as styled } from "styled-components";
import { colors } from "../../global";


export const CheckoutContainer = styled.div`
  width: 95%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
  font-size: 1.4rem;

  @media (min-width: 700px) {
    width: 55%;
  }

  .checkout-header {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${colors.peach};
    text-align: center;
    .header-block {
      text-transform: capitalize;
      width: 23%;
    }
  }

  .total {
    margin: 3rem auto 0 auto;
    font-size: 1.4rem;
  }
`