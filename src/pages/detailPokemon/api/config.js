import { api } from "../../../api";

export const getPokemonsDetail = (id) => api.get(`/products/${id}`);