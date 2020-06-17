import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import shopReducer from './shop/shop.reducer'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer
}) 

export default persistReducer(persistConfig, rootReducer)