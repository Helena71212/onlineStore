import { createSelector } from "@reduxjs/toolkit";

export const orderSelector = (state) => state.order.data;

export const orderDetailsSelector = createSelector(
  orderSelector,
  (state, id) => id,
  (order, id) => {
    if (order && id) {
      const orderItem = order.find((order) => order._id === id);

      return orderItem?.itemsList;
    }
    return null;
  }
);