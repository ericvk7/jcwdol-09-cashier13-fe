import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productValue: [],
    categoryValue: [],
  },
  reducers: {
    setProductist: (state, action) => {
      state.productValue = action.payload;
    },
    addProductList: (state, action) => {
      state.productValue.push(action.payload);
    },

    setCategoryList: (state, action) => {
      state.categoryValue = action.payload;
    },
    addCategoryList: (state, action) => {
      state.categoryValue.push(action.payload);
    },
  },
});

export const {
  setProductist,
  addProductList,
  setCategoryList,
  addCategoryList,
} = productSlice.actions;
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

export function addCategory(data) {
  return async (dispatch) => {
    let response = await Axios.post(
      "http://localhost:8001/cashier/add-categories",
      data
    );
    dispatch(fetchCategory());
  };
}

export function fetchCategory() {
  return async (dispatch) => {
    let response = await Axios.get(
      "http://localhost:8001/cashier/get-categories"
    );
    dispatch(setCategoryList(response.data));
  };
}
