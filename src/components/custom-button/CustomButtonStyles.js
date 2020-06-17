import styled from "styled-components";
import { colors } from "../../global";

export const CustomButton = styled.button`
border: none;
cursor: pointer;
height: max-content;
font-size: 1.1rem;
text-transform: uppercase;
background-color: ${props => props.inverted ? '#fff': colors.peach};
color: ${props => props.inverted ? colors.peach : '#fff'};
padding: 7px 12px;
border-radius: 5px;
&:hover {
    background-color: ${props => props.inverted ? '#fff': colors.peach};
}
&:active {
    transform: translateY(0);
    box-shadow: none;
}
` 