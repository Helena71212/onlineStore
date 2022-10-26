import CounterButton from "../../../components/counterButton";
import ClearIcon from "@mui/icons-material/Clear";
import styles from "./index.module.css";

const Cart = ({ cart, onIncrementItem, onDecrementItem, onDeleteItem,handleCreateOrder,isLoading,id,quantity }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>
        Shopping cart
        <div className={styles.lineGorizontal}></div>
      </h1>
      <div className={styles.cartArea}>
        <div className={styles.cartContens}>
          {Object.entries(cart?.itemsList).map(([id, item]) => (
            <div key={item.id}>
              <div className={styles.cartItem}>
                <img height={100} src={item.image} alt="pokemon" />
                <div className={styles.cartInfo}>
                  <div>{item.name}</div>
                  <div>
                    <CounterButton
                      id={item.id}
                      quantity={item.quantity}
                      onDecrementItem={onDecrementItem}
                      onIncrementItem={onIncrementItem}
                    />
                  </div>
                  <div> $ {item.price}</div>
                  <div className={styles.deleteIcon}>
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => onDeleteItem(id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.sidebar}>
          <div className={styles.sidebarArea}>
            <div className={styles.cartTotalBlock}>
              <h2>Order summary</h2>
              <div className={styles.totalBlock}>
                <div>SubTotal</div>
                <div className={styles.totalBlockTitle}>
                  $ {cart?.totalPrice}
                </div>
              </div>
              <div className={styles.totalBlock}>
                <div>Total</div>
                <div className={styles.totalBlockTitle}>
                  $ {cart?.totalPrice}
                </div>
              </div>
              <button
              className={styles.btnOrder}
              disabled={!cart.quantity}
              onClick={handleCreateOrder}
              >Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
