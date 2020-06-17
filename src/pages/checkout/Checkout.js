import React from 'react';
import { CheckoutContainer } from './CheckoutStyles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';


const Checkout = ({cartItems, total}) => {
  return (

      <CheckoutContainer>
          <div className='checkout-header'>
              <div className='header-block'>
                  <span>Product</span>
              </div>
              <div className='header-block'>
                  <span>Description</span>
              </div>
              <div className='header-block'>
                  <span>Quantity</span>
              </div>
              <div className='header-block'>
                  <span>Price</span>
              </div>
              <div className='header-block'>
                  <span>Remove</span>
              </div>
              
           
          </div>
          {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
              }
                 <div className="total">
            <span>Total ${total}</span>
              </div>
      </CheckoutContainer>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)