import styled from "styled-components";
import Leaf from '../../leaf.svg'
import { NavLink } from "react-router-dom";
import { colors } from "../../global";

const activeClassName = 'nav-item-active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  &.${activeClassName} {
    outline: 0;
    text-decoration: none;
  }
`

export const NavBarItem = styled.div`
color: black;
font-size: 1.6rem;
border: none;
padding: 6px;
cursor: pointer;
position: relative;

&:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: ${colors.peach};
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}

&:hover:after { 
  width: 100%; 
  left: 0; 
}
`

export const NavBar = styled.div`
height: 7vh;
display: grid;
grid-template-columns: 60% 40%;
text-align: center;
`
export const NavBarItemsContainer = styled.div`
display: none;

@media only screen and (min-width: 768px) {
display: flex;
justify-content: space-around;
align-items: center;
}
`

export const Logo = styled.span`
background-image: url(${Leaf});
height: 3rem;
width: 3rem;
background-size: contain;
background-repeat: no-repeat;
`

export const LogoContainer = styled.div`
align-content: center;
p {
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  color: red;
}
`