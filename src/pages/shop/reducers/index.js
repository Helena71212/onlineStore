import { getPokemons } from "../api/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  error: null,
};

export const loadPokemons = createAsyncThunk(
  "pokemons/fetchAll",
  async (page) => {
    const response = await getPokemons(page);
    return response.data;
  }
);

const pokemonSlice = createSlice({
  name: "pokemons",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loadPokemons.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadPokemons.fulfilled, (state, { payload: product }) => {
      state.isLoading = false;
      state.data = product;
    });
    builder.addCase(loadPokemons.rejected, (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    });
  },
});

export default pokemonSlice.reducer;
