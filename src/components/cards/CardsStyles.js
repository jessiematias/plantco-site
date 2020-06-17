import styled from "styled-components";

export const Card = styled.div`
height: 11rem;
display: grid;
grid-template-rows: 30% 70%;
width: 25rem;
text-align: center;
box-shadow: 1px 1px 8px -4px rgba(0,0,0,0.55);
@media (min-width: 700px) {
   align-items: center;
}
`

export const CardsContainer = styled.div`
margin: 0 auto 4rem auto;
display: flex;
justify-content: space-between;
align-content: center;
width: 95vw;

@media (min-width: 700px) {
    width: 85vw;
    margin: 0 auto 8rem auto;
}
`
export const IconContainer = styled.div`
font-size: 2rem;
margin: auto;
color: #ffab91;

@media (min-width: 700px) {
margin-top: 1rem;
font-size: 3rem;
}
`

export const CardsText = styled.div`
margin: 0 auto;
p {
    font-size: 1rem;
    color: black;
    margin-bottom: 5px;
    text-align: center;
}
span {
    font-size: .8rem;
    color: #757575;
}

@media (min-width: 800px) {
    p {
        font-size: 1.3rem;
    }
    span {
        font-size: 1rem;
    }
}
`

export const HomepageButton = styled.div`
width: max-content;
margin: 4rem auto;

`