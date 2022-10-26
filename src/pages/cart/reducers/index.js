import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, deleteItemfromCart, getCartInfo, updateItemInCart } from "../thunks";

const initialState = {
   totalPrice: 0,
   quantity: 0,
   customerId: null,
   itemsList: {},
   isLoading: false,
   errors: null,
 };

 const сartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {},
   extraReducers:(builder) => {
      builder.addCase(getCartInfo.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      });
 
 builder.addCase(getCartInfo.fulfilled, (state, { payload }) => {
   const itemsList = payload.itemsList.reduce((result, cartItem) => {
     result[cartItem.id] = cartItem;
     return result;
   }, {});
   state.isLoading = false;
   state.totalPrice = payload.totalPrice;
   state.quantity = payload.quantity;
   state.itemsList = itemsList;
 });
 builder.addCase(getCartInfo.rejected, (state, { payload: errors }) => {
   state.isLoading = false;
   state.errors = errors;
 });
 ////////////////////////////////////////////////////////////////////////////
 builder.addCase(deleteItemfromCart.pending, (state) => {
   state.isLoading = true;
   state.errors = null;
 });
 
 builder.addCase(deleteItemfromCart.fulfilled,  (state, { payload }) => 
     {
      const { quantity, totalPrice } = payload.cartState;

      state.isLoading = false;
      state.totalPrice = totalPrice;
      state.quantity = quantity;

      const _ = require("lodash");

      state.itemsList = _.omit(state.itemsList, payload.removedItemId);
    });


 builder.addCase(deleteItemfromCart.rejected, (state, { payload: errors }) => {
   state.isLoading = false;
   state.errors = errors.message;
 });
///////////////////////////////////////////////////////////////////////////////////
builder.addCase(addItemToCart.pending, (state) => {
   state.isLoading = true;
   state.errors = null;
 });
 builder.addCase(addItemToCart.fulfilled, (state, { payload }) => {
   const itemsList = payload.itemsList.reduce((result, cartItem) => {
     result[cartItem.id] = cartItem;
     return result;
   }, {});

   state.isLoading = false;
   state.totalPrice = payload.totalPrice;
   state.quantity = payload.quantity;
   state.itemsList = itemsList;
 });
 builder.addCase(addItemToCart.rejected, (state, { payload: errors }) => {
   state.isLoading = false;
   state.errors = errors.message;
 });
 /////////////////////////////////////////////////////
 builder.addCase(updateItemInCart.pending, (state) => {
   state.isLoading = true;
   state.errors = null;
 });
 builder.addCase(updateItemInCart.fulfilled, (state, { payload }) => {
   state.isLoading = false;
   state.totalPrice = payload.cartState.totalPrice;
   const identif = payload.updatedItem.id;
   state.itemsList[identif].quantity = payload.updatedItem.quantity;
 });
 builder.addCase(updateItemInCart.rejected, (state, { payload: errors }) => {
   state.isLoading = false;
   state.errors = errors.message;
 });
},
});

 export default сartSlice.reducer;