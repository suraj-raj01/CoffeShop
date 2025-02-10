import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const Slice = createSlice({
  name: "addToOrders",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrderData: (state, action) => {
      const myItems = state.orders.filter((key) => {
        if (key._id == action.payload._id) {
          return true;
        }
      });
      if (myItems.length >= 1) {
        message.error("this product already added");
      } else {
        state.orders.push(action.payload);
        message.success("Item added success");
      }
    },
    qntyInc: (state, action) => {
      for (var i = 0; i < state.orders.length; i++) {
        if (state.orders[i]._id == action.payload._id) {
          state.orders[i].qnty++;
        }
      }
    },
    qntyDec: (state, action) => {
      for (var i = 0; i < state.orders.length; i++) {
        if (state.orders[i]._id == action.payload._id) {
          if (state.orders[i].qnty <= 1) {
              state.orders = state.orders.filter(
                (item) => item._id != action.payload._id
              );
              message.success("Item Removed!!");
          } else {
            state.orders[i].qnty--;
          }
        }
      }
    },
    dataDel: (state, action) => {
      state.orders = state.orders.filter(
        (item) => item._id != action.payload._id
      );
      message.success("Item Removed!!");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrderData, qntyInc, qntyDec, dataDel } = Slice.actions;

export default Slice.reducer;
