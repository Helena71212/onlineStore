import { configureStore, createReducer } from "@reduxjs/toolkit";
import authReducer from '../pages/signIn/reducers'
import pokemonReducer from '../pages/shop/reducers'
import productDetailsReducer from '../pages/detailPokemon/reducer'
import cartReducer from '../pages/cart/reducers'
import orderReducer from "../pages/cart/reducers/orderReducer";

export const store = configureStore({
   reducer: {
      auth: authReducer,
      pokemons:pokemonReducer,
      productDetails:productDetailsReducer,
      cart:cartReducer,
      order:orderReducer,
   }
 })