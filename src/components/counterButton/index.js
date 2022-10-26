import styles from "./index.module.css"

const CounterButton = ({
   id,
  onDecrementItem,
  quantity,
  onIncrementItem,
}) => {
  return (
    <div className={styles.countButton}>
      <button 
      className={styles.buttonCounter}
      onClick={() =>
          onDecrementItem({
            id,
            quantity,
          })
        }
      >
        -
      </button>

      <div>{quantity}</div>

      <button
      className={styles.buttonCounter}
        onClick={() =>
          onIncrementItem({
            id,
            quantity,
          })
        }
      >
        +
      </button>
    </div>
  );
};

export default CounterButton;