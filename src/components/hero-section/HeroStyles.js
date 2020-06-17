import styled from "styled-components";
import HeroImg from '../../img/firstpage2.jpg'
import Arrow from '../../arrow.svg'
import {Link} from 'react-scroll'

export const MainDiv = styled.div`
position: relative;
background-image: linear-gradient(
        to right bottom,
        rgba(255,171,145, 0.8),
        rgba(255,229,222, 0.8)
      ), url(${HeroImg});
height: 85vh;
background-size: cover;
background-repeat: no-repeat;
background-position: left;
margin: 1rem 1rem 10vh 1rem;
border-radius: 1.3rem;
`

export const SecondaryDiv = styled.div`
margin: auto;
position: absolute;
left: 0%;
top: 35%;
border-radius: 0.5rem;
width: 100%;
text-align: center;
color: #fff;
`

export const Title = styled.h1`
font-size: 2.8rem;
text-transform: uppercase;
letter-spacing: 2px;
animation: moveInLeft 2s ease-out;

@keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  
    80% {
      transform: translateX(1rem);
    }
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

@media (min-width: 700px) {
    font-size: 5rem;
  }
`

export const ArrowIcon = styled(Link)`
background-image: url(${Arrow});
height: 2.5rem;
width: 3rem;
background-repeat: no-repeat;
background-position: center;
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
bottom: 5%;
text-align: center;
cursor: pointer;
animation: bounce 2s infinite;

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-15px);
  }
}
`

export const Subtitle = styled.h2`
font-size: 1.4rem;
letter-spacing: 9px;
text-transform: uppercase;
margin: 1rem 0 2rem 0;
animation: moveInRight 2s ease-out;
@media (min-width: 700px) {
    font-size: 2.5rem;
  }

@keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }
  
    80% {
      transform: translateX(-1rem);
    }
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`