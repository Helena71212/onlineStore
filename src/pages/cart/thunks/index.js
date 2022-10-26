import { createAsyncThunk } from "@reduxjs/toolkit";
import CartService from '../../../services/serviceCart'
import serviceOrder from "../../../services/serviceOrder";


export const getCartInfo = createAsyncThunk(
   "getCartInfo",
   async (_, { rejectWithValue }) => {
     try {
       const {data} = await CartService.getCartInfo();
       return data;
     } catch (error) {
       return error.message;
     }
   }
 );

 export const addItemToCart = createAsyncThunk(
   "addItemToCart",
   async (payload, { rejectWithValue }) => {
     try {
       const {data} = await CartService.addItemToCart(payload);
       return data;
     } catch (error) {
       return error.message;
     }
   }
 );

 export const updateItemInCart = createAsyncThunk(
   "updateItemInCart",
   async (payload, { rejectWithValue }) => {
     try {
       const {data} = await CartService.updateItemInCart(payload);
       return data;
     } catch (error) {
       return error.message;
     }
   }
 );

 export const getOrders = createAsyncThunk("order/getOrders", async () => {
  const response = await serviceOrder.getOrder();
  return response.data;
});

export const createNewOrder = createAsyncThunk(
  "order/createNewOrder",
  async (newOrder, { dispatch, rejectWithValue }) => {
    try {
      const response = await serviceOrder.addOrder(newOrder);
      dispatch(getCartInfo());

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }});
  

 export const deleteItemfromCart = createAsyncThunk(
   "deleteItemfromCart",
   async (id, { rejectWithValue }) => {
     try {
       const {data} = await CartService.deleteItemfromCart(id);
       return data;
     } catch (error) {
       return error.message;
     }
   }
 );