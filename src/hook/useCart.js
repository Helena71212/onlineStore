import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {cartSelector} from "../pages/cart/selectors"
import {
  addItemToCart,
  deleteItemfromCart,
  getCartInfo,
  updateItemInCart,
} from "../pages/cart/thunks";

 const useCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const getInfo = useCallback(() => {
    dispatch(getCartInfo());
  }, []);

  const addItem = useCallback((itemToAdd) => {
    dispatch(addItemToCart(itemToAdd));
  }, [dispatch]);

  const deleteItem = useCallback((id) => {
    dispatch(deleteItemfromCart(id));
  }, []);

  const incrementItem = useCallback((payload) => {
    const requestBody = {
      id: payload.id,
      quantity: payload.quantity + 1,
    };
    dispatch(updateItemInCart(requestBody));
  }, []);

  const decrementItem = useCallback(({ id, quantity }) => {
    if (quantity > 1) {
      const payload = {
        id,
        quantity: quantity - 1,
      };
      dispatch(updateItemInCart(payload));
    }
  }, []);

  return {
    cart,
    getInfo,
    addItem,
    deleteItem,
    incrementItem,
    decrementItem,
  };
};

export default useCart;


