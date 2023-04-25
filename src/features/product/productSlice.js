import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { distance } from "framer-motion";

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
    categoryId: {
      id_categories: 0,
      name: "",
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
    categoryListId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const {
  setProductist,
  addProductList,
  setCategoryList,
  addCategoryList,
  productListId,
  categoryListId,
} = productSlice.actions;
export default productSlice.reducer;

export function addProductData(data) {
  return async (dispatch) => {
    let response = await Axios.post("http://localhost:8001/upload", data);
    dispatch(fetchProduct());
    if (response) {
      alert("Data Product Added");
    }
  };
}

export function editProductData(data) {
  return async (dispatch) => {
    let response = await Axios.post("http://localhost:8001/edit", data);
    dispatch(fetchProduct());
    if (response) {
      alert("Data Product Edited");
    }
  };
}

export function deletProductData(data) {
  return async (dispatch) => {
    let response = await Axios.delete(
      `http://localhost:8001/cashier/delet-product/${data}`
    );
    dispatch(fetchProduct());
    if (response) {
      alert(response.data.message);
    }
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
    if (response) {
      alert("Data Category Added");
    }
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

export function editCategoryData(data, id) {
  return async (dispatch) => {
    let response = await Axios.patch(
      `http://localhost:8001/cashier/edit-category/${id}`,
      data
    );
    console.log(response);
    dispatch(fetchCategory());
    if (response) {
      alert("Data Product Edited");
    }
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

export function getCategorybyId(dataId) {
  return async (dispatch) => {
    let response = await Axios.get(
      "http://localhost:8001/cashier/get-categories",
      {
        params: {
          id: dataId,
        },
      }
    );
    const found = response.data.find(
      (element) => element.id_categories == dataId
    );
    dispatch(categoryListId(found));
  };
}

export function deleteCategoryData(data) {
  return async (dispatch) => {
    let response = await Axios.delete(
      `http://localhost:8001/cashier/delet-category/${data}`
    );
    dispatch(fetchCategory());
    if (response) {
      alert(response.data.message);
    }
  };
}
