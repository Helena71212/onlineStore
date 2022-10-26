import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_KEYS } from "../../../constans";
import { signIn as signInRequest } from "../api";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: null,
  isAuth: false,
};

export const signIn = createAsyncThunk("auth/signIn", async (data)=>{
  const response = await signInRequest(data);
  return response.data;
});
  

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signIn.pending]: (state) => {
      state.isLoading = true;
    },

    [signIn.fulfilled]: (state, { payload }) => {
      const  { accessToken, ...userInfo } = payload;
      state.isLoading = false;
      state.userInfo = userInfo;
      state.accessToken = accessToken;
      state.isAuth = true;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken)
      console.log(localStorage);
    },
    
    // [signIn.fulfilled]: (state, {payload: {data}})=>{
    // const {accessToken, ...userInfo} = data

    [signIn.rejected]: (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    },
  },
});

export default authSlice.reducer;