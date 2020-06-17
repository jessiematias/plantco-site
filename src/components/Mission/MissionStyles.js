import { default as styled } from "styled-components";
import { colors } from "../../global";
import missionImg from '../../img/firstpage1.jpg'
import mobileMissionImg from '../../img/plants_beginners.jpg'



export const MissionContainer = styled.div`
margin: 3rem 1rem 0 1rem;
display: grid;
grid-template-columns: 50% 50%;
justify-items: center;
align-items: center;

h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
    grid-column: 1 / 3;
    color: ${colors.peach};
}

p {
    margin-right: 1rem;
}

span {
    background-image: url( ${mobileMissionImg} );
    background-size: contain;
    height: 20rem;
    background-repeat: no-repeat;
    width: 17rem;
    @media (min-width: 700px) {
    height: 26rem;
    width: 38rem;
    background-image: url( ${missionImg} );
  }
}

@media (min-width: 700px) {
    grid-gap: 10rem;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 60%;
    margin: 3rem 15rem 0 10rem;
    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1.3rem;
    }
}
@media (min-width: 700px) and (max-width: 800px) {
    grid-gap: 13rem;
  }
`