import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productValue: [],
    categoryValue: [],
    productId: {
      id_products: 0,
      name: "",
      price: 0,
      imgPath: null,
      description: "",
      id_users: 0,
      id_categories: 0,
    },
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
    productListId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const {
  setProductist,
  addProductList,
  setCategoryList,
  addCategoryList,
  productListId,
} = productSlice.actions;
export default productSlice.reducer;

export function addProductData(data) {
  return async (dispatch) => {
    let response = await Axios.post("http://localhost:8001/upload", data);
    dispatch(fetchProduct());
  };
}

export function editProductData(data) {
  return async (dispatch) => {
    let response = await Axios.post("http://localhost:8001/edit", data);
    console.log(response);
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

export function getProductById(dataId) {
  return async (dispatch) => {
    let response = await Axios.get(
      "http://localhost:8001/cashier/get-product",
      {
        params: {
          id: dataId,
        },
      }
    );
    const found = response.data.find(
      (element) => element.id_products == dataId
    );

    dispatch(productListId(found));
  };
}
