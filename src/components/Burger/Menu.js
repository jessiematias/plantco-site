import React from 'react';
import { StyledMenu } from './MenuStyles';
import { Link } from 'react-router-dom';

const Menu = ({open, setOpen}) => {
  return (
    <StyledMenu open={open}>
      <Link onClick={() => setOpen(!open)} to="/">      
        HOME
      </Link>
      <Link onClick={() => setOpen(!open)} to="/plants-accessories">
        PLANTS AND ACCESSORIES
        </Link>
      <Link onClick={() => setOpen(!open)} to="/checkout">
        Cart
        </Link>
    </StyledMenu>
  )
}

export default Menu;