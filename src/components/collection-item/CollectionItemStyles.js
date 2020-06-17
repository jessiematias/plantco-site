import { default as styled } from "styled-components";

export const CollectionItemStyled = styled.div`
  /* background-color: #f5f5f5; */
  padding: 1rem 1rem 2rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 42rem;
  align-items: center;
  justify-items: center;
  position: relative;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 5px;
    overflow: hidden;
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }

  .custom-button{
    width: 80%;
    opacity: .8;
    position: absolute;
    top: 65%;
    visibility: visible;
    @media (min-width: 700px) {
      width: 80%;
      opacity: .7;
      position: absolute;
      top: 45%;
      visibility: hidden;
    }
  }

  &:hover {
    .image {
      opacity: .8;
      @media (max-width: 700px) {
        opacity: 1;
      }
    }
    .custom-button {
      visibility: visible;
      opacity: .95;
    }
  }
`
