import { api } from "../../api";
const url = "/cart";
const itemUrl = `${url}/item`;
class CartService {
  static instance = new CartService();

  getCartInfo() {
    return api.get(url);
  }
  addItemToCart(itemToAdd) {
    return api.post(itemUrl, itemToAdd);
  }
  deleteItemfromCart(id) {
    return api.delete(`${itemUrl}/${id}`);
  }
  updateItemInCart(payload) {
    return api.patch(itemUrl, payload);
  }
}

export default CartService.instance;
