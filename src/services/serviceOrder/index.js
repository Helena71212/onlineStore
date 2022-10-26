import { api } from "../../api";

const url = "/order";

class OrderService {
  static instance = new OrderService();

  getOrder() {
    return api.get(url);
  }

  addOrder(newOrder) {
    return api.post(url, newOrder);
  }
}

export default OrderService.instance;
