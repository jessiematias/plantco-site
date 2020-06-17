import { default as styled } from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1.4rem;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
    font-size: 1.1rem;

    @media (min-width: 700px) {
      font-size: 1.4rem;
    }
  }

  .quantity {
    display: flex;

    .arrow {
        cursor: pointer; 
    }

    .value {
        margin: 0 1.3rem;
    }
  }

  .remove-button {
    cursor: pointer;
  }
`