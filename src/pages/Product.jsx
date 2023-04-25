import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/product/productSlice";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

import { Divider, Select, Stack } from "@chakra-ui/react";

function Product() {
  const dispatch = useDispatch();
  const productValue = useSelector((state) => state.product.productValue);

  const renderProductList = () => {
    return productValue.map((product) => {
      return <ProductCard product={product} />;
    });
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Stack
        className="flex flex-row justify-center mb-20 "
        direction="row"
        spacing={4}
        align="center"
      >
        <div>
          <h2>Short By</h2>
          <Select placeholder="Select Line" className="m-auto w-3/4 mr-8">
            <option value="Line1">Category 1</option>
            <option value="Line2">Category 2</option>
            <option value="Line3">Category 3</option>
          </Select>
        </div>

        <div>
          <h2>Category</h2>
          <Select placeholder="Select Line" className="m-auto w-3/4 mr-8">
            <option value="Line1">Category 1</option>
            <option value="Line2">Category 2</option>
            <option value="Line3">Category 3</option>
          </Select>
        </div>
        <div>
          <h1>Search</h1>
          <div className="search">
            <input
              //onChange={inputHandler}
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </Stack>

      <div className="grid grid-cols-5 gap-10 m-auto w-3/4 ">
        {renderProductList()}
      </div>
    </>
  );
}

export default Product;
