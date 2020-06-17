import React from 'react';
import { CollectionItemStyled } from './CollectionItemStyles';
import { CustomButton } from '../custom-button/CustomButtonStyles';
import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
  <CollectionItemStyled>

    <div className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
     
    </div>
    <CustomButton onClick={() => addItem(item)} className='custom-button' inverted>Add to cart</CustomButton>

  </CollectionItemStyled>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)