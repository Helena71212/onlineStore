import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCart from "../../../hook/useCart";
import Cart from "../component";
import { createNewOrder } from "../thunks";

export const CartContainer = () => {
  const dispatch = useDispatch();
  const { cart, deleteItem, incrementItem, decrementItem } = useCart();

  const order = useSelector((state) => state.order);

  const handleCreateOrder = () => {
    const { quntity,...otherCartFields } = cart;

    dispatch(
      createNewOrder(createNewOrder(otherCartFields))
    );
  };
  
  
  return (
    <Cart
      cart={cart}
      isLoading={cart.isLoading}
      onDeleteItem={deleteItem}
      onIncrementItem={incrementItem}
      onDecrementItem={decrementItem}
      handleCreateOrder={handleCreateOrder}
      order={order}
    />
  );
};

export default CartContainer;
