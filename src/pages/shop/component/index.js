import PokemonsCard from "../../../components/card";
import Pagination from "../../../components/pagination";
import useCart from "../../../hook/useCart";
import { addItemToCart } from "../../cart/thunks";
import styles from "./index.module.css";

const Shop = ({
  data,
  error,
  isLoading,
  page,
  handlePageChange,
  handleDetailPokemon,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shopContent}>
        {data?.map((product) => (
          <PokemonsCard
            className={styles.pokeCard}
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            handleDetailPokemon={handleDetailPokemon}
          />
        ))}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div className={styles.pagination}>
        <Pagination
          isDisabled={isLoading}
          currentPage={page}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Shop;
