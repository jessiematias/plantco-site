import styled from "styled-components";
import { colors } from "../../global";
import { Link } from "react-router-dom";


export const StyledButtonHome = styled(Link)`
text-decoration: none;
border: none;
cursor: pointer;
font-size: 1.6rem;
text-transform: uppercase;
background-color: ${props => props.inverted ? "white" : colors.peach};
color: #fff;
padding: 7px 12px;
border-radius: 5px;
&:hover {
    box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.5);
}
&:active {
    transform: translateY(0);
    box-shadow: none;
}
` 