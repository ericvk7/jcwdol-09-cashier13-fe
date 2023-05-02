import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  deleteProductById,
  fetchCarts,
} from "../features/cart/cartSlice";
import CartCard from "../components/CartCard";

function Cart() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const carts = useSelector((state) => state.cart.cartList);

  const renderedList = () => {
    return carts.map((cart) => {
      return <CartCard cart={cart} />;
    });
  };

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10 m-auto w-3/4 mt-10">
      {renderedList()}
    </div>
  );
}

export default Cart;
