import React from 'react';
import { StyledCartItem } from './CartItemStyles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <StyledCartItem>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                   {quantity} x ${price}
                </span>
            </div>
        </StyledCartItem>
    )
}

export default CartItem