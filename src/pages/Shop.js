import React from 'react';
import ShopItem from '../components/shop-item/ShopItem';
import { selectShopItems } from '../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const LivePlants = ({ collection }) => {
 return (
    <div>
    {collection.map(({ id, ...otherCollectionProps }) => (
      <ShopItem key={id} {...otherCollectionProps} />
    ))}
  </div>
 )
}

const mapStateToProps = createStructuredSelector({
  collection: selectShopItems,
})

export default connect(mapStateToProps)(LivePlants)