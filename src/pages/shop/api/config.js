import { api } from "../../../api";

export const getPokemons = (page) => api.get(`/products?page=${page}&limit=20`);
