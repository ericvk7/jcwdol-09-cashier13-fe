import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import productSlice from "../features/product/productSlice";
import cartSlice from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    cart: cartSlice,
  },
});
