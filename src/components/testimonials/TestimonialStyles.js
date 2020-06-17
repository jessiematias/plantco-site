import styled from "styled-components";

export const QuotesContainer = styled.div`
  display: grid;
  grid-template-columns: 20vw 1fr 20vw;
  grid-template-rows: 1fr 1fr 1fr;
  height: 10rem;
  position: relative;
  align-items: center;
  justify-items: center;
`;
export const TestimonialsTitle = styled.h2`
  color: #ffab91;
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  @media (min-width: 700px) {
    font-size: 3rem;
  }
`;
export const Quote = styled.span`
  font-size: 1rem;
  /* font-size: 2rem; */
  font-family: "Passion One", cursive;
  margin: 0 1rem;
`;

export const QuoteParagraph = styled.p`
  grid-row: 2;
  grid-column: 2 / 3;
  text-align: center;
  @media (min-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const QuotePerson = styled.p`
  grid-row: 3;
  grid-column: 2 / 3;
  font-size: 1.2rem;
  color: #757575;
  text-align: center;
  @media (min-width: 700px) {
    font-size: 1.3rem;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  margin: auto;
`;

export const Circle = styled.small`
  height: 2rem;
  width: 2rem;
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
 
  /* &[data-quote=""]::before {
    background-color: ${({ active }) => (active ? '#45454d' : "#d4d4d4")};
  } */

  &::before {
    content: "";
    height: 6px;
    width: 6px;
    background-color: #d4d4d4;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  &:hover::before {
    background-color: #45454d;
  }
`;
export const Arrow = styled.div`
  grid-row: 2;
  font-size: 2rem;
  cursor: pointer;
`;

export const ArrowRight = styled(Arrow)`
margin-left: 70vw;
`