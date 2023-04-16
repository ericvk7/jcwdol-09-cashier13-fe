import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productValue: [],
  },
  reducers: {
    setProductist: (state, action) => {
      state.productValue = action.payload;
    },
    addProductList: (state, action) => {
      state.productValue.push(action.payload);
    },
  },
});

export const { setProductist, addProductList } = productSlice.actions;
export default productSlice.reducer;

export function addProductData(data) {
  return async (dispatch) => {
    let response = await Axios.post("http://localhost:8001/upload", data);
    dispatch(fetchProduct());
  };
}

export function fetchProduct() {
  return async (dispatch) => {
    let response = await Axios.get("http://localhost:8001/cashier/get-product");
    dispatch(setProductist(response.data));
  };
}
