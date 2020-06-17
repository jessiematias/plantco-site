import React from "react";
import {
  NavBarItem,
  NavBar,
  NavBarItemsContainer,
  Logo,
  StyledLink,
  LogoContainer
} from "./HeaderStyles";
import CartIcon from "../cart-icon/CartIcon";
import Cart from "../cart-dropdown/Cart";
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({hidden}) => (
  <NavBar >
    <div style={{display: 'flex', alignItems: 'center', fontSize: '2rem'}}>
      <LogoContainer><p><Logo />PLANTCO</p></LogoContainer>   
    </div>
    <NavBarItemsContainer>
    <StyledLink exact to={process.env.PUBLIC_URL + '/'}> 
        <NavBarItem>HOME</NavBarItem>
      </StyledLink>

      <StyledLink to='/plants-accessories'>
        <NavBarItem>PLANTS AND ACCESSORIES</NavBarItem>
      </StyledLink>

      
        <CartIcon/>
     
    </NavBarItemsContainer>
    { hidden ? null : <Cart /> }
  </NavBar>
)

const mapStateToProps = (state) => ({
  hidden: selectCartHidden(state)
  })

export default connect(mapStateToProps)(Header);
