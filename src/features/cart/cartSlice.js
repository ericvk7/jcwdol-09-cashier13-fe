import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    // cart: {
    //   id: 0,
    //   productName: "",
    //   quantity: 0,
    //   price: 0,
    // },
  },
  reducers: {
    setCart: (state, action) => {
      state.cartList = action.payload;
    },
    addCart: (state, action) => {
      state.cartList.push(action.payload);
    },
  },
});

export const { setCart, addCart } = cartSlice.actions;
export default cartSlice.reducer;

export function fetchCarts() {
  return async (dispatch) => {
    let response = await Axios.get("http://localhost:8001/carts");

    console.log(response);
    dispatch(setCart(response.data));
  };
}
export function getProductById(productId) {
  return async (dispatch) => {
    let response = await Axios.get("http://localhost:8001/carts", {
      params: {
        id: productId,
      },
    });
    dispatch(setCart(response.data));
  };
}

export function addToCart(data) {
  return async (dispatch) => {
    // let response = await Axios.post("http://localhost:8001/carts", data);
    // dispatch(addCart(response.data));
  };
}

export function deleteCart(id) {
  return async (dispatch) => {
    let response = await Axios.delete(`http://localhost:8001/carts$` + { id }, {
      params: {
        id: id,
      },
    });
    dispatch(setCart(response.data));
  };
}
