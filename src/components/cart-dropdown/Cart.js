import React from 'react';
import { CartDropdown } from './CartStyles';
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux'
import { CustomButton } from '../custom-button/CustomButtonStyles';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdown>
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} /> ) : <span className='empty-message'>Nothing to see here. Start adding items to your cart.</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }} style={{margin: 'auto'}}>GO TO CHECK OUT</CustomButton>
    </CartDropdown>
    )
}

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems
})
 
export default withRouter(connect(mapStateToProps)(Cart))