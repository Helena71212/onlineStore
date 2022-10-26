import { api } from "../../api";


const url = "/order";

class ServiceOrder {
   static instance = new ServiceOrder();

  getOrder() {
    return api.get(url);
  }

  addOrder(newOrder) {
    return api.post(url, newOrder);
  }
}

export default ServiceOrder.instance;