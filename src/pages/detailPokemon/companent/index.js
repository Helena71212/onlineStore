import lowerCase from "lodash/lowerCase";
import startCase from "lodash/startCase";
import useCart from "../../../hook/useCart";

import styles from "./index.module.css";

const DetailPokemon = ({ product, error }) => {
  const { cart, addItem} = useCart();
  return (
    <>
      {
        <div className={styles.wrapper}>
          <div className={styles.namePoke}>{startCase(product.name)}</div>
          <div className={styles.mainContent}>
            <div className={styles.leftContent}>
              <div className={styles.imagePoke}>
                <img
                  className={styles.img}
                  src={product.image}
                  alt={product.name}
                />
              </div>
            </div>

            <div className={styles.rightContent}>
              <h3>Stats:</h3>
              {product.stats?.map((stat) => (
                <div className={styles.statContent} key={stat.title}>
                  <p>{stat.title}</p>
                  <p> - {stat.value}</p>
                </div>
              ))}
              <div className={styles.price}>
                <h3>Price: $ {product.price}</h3>
              </div>
              <button
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                  })
                }
                className={styles.btnAddToCart}
              >
                Add to cart
              </button>
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
          <div className={styles.abilities}>
            <h2>Abilities:</h2>
            {product.abilities?.map((ability) => (
              <div key={ability.title}>
                <h4>{startCase(ability.title)}</h4>
                {ability.description}.
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
};
export default DetailPokemon;
