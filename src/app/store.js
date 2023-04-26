import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import productSlice from "../features/product/productSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
  },
});
