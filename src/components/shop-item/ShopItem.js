import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import { ShopCollection } from './ShopItemStyles';

const ShopItem = ({ title, items }) => (
  <ShopCollection>
    <h1>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 6)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </ShopCollection>
)

export default ShopItem;