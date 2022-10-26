import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonsDetail } from "../api/config";

const initialState = {
  isLoading: false,
  error: null,
  data: {},
}; 

export const loadProductDetails = createAsyncThunk(
   "productDetails/loadProductDetails",
   async (id) => {
       const response = await getPokemonsDetail(id);
       return response.data;
   });

const productDetailsSlice = createSlice({
  name: "productDetails",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadProductDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      loadProductDetails.fulfilled,
      (state, { payload: product }) => {
        state.isLoading = false;
        state.data = product;
      }
    );
    builder.addCase(
      loadProductDetails.rejected,
      (state, { payload:error}) => {
        state.isLoading = false;
        state.error = error;
      });
  },
});

export default productDetailsSlice.reducer;