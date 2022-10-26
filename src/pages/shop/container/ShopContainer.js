import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFetching from "../../../hook/useFetch";
import { usePagination } from "../../../hook/usePagination";
import { ROUTE_NAMES } from "../../../router/routeNames";
import { getPokemons } from "../api/config";
import Shop from "../component";
import { loadPokemons } from "../reducers";
import { pokemonsSelector } from "../selectors";

const ShopContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemons = useSelector(pokemonsSelector);

  const [page, handlePageChange] = usePagination(1);

  useEffect(() => {
    dispatch(loadPokemons(page));
  }, [page]);

  const handleDetailPokemon = useCallback((id) => {
    navigate(`${ROUTE_NAMES.SHOP}/${id}`);
  }, []);

  return (
    <Shop
      data={pokemons.data}
      isLoading={pokemons.isLoading}
      error={pokemons.error}
      page={page}
      handlePageChange={handlePageChange}
      handleDetailPokemon={handleDetailPokemon}
    />
  );
};

export default ShopContainer;
