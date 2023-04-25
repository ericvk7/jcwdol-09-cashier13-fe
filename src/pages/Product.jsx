import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/product/productSlice";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { Divider, Select, Stack } from "@chakra-ui/react";

function Product() {
  const dispatch = useDispatch();
  const productValue = useSelector((state) => state.product.productValue);
  const categoryValue = useSelector((state) => state.product.categoryValue);

  const [inputText, setInputText] = useState("");
  const [dropDown, UseDropDown] = useState("");

  let inputTextHendeler = (e) => {
    var dataInput = e.target.value;
    setInputText(dataInput);
  };

  let dropDownHendeler = (e) => {
    var dataInput = e.target.value;
    UseDropDown(dataInput);
  };

  let [page, setPage] = useState(1);
  const PER_PAGE = 8;
  const count = Math.ceil(productValue.length / PER_PAGE);
  const _DATA = usePagination(productValue, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const renderProductList = () => {
    const filterData = _DATA.currentData().filter((el) => {
      console.log(el);

      if (inputText == "" && dropDown == "") {
        console.log("1");
        return el;
      }
      if (!dropDown == "" && inputText == "") {
        console.log("2");
        return el.id_categories == dropDown;
      }
      if (!inputText == "" && dropDown == "") {
        console.log("3");
        return el.name.includes(inputText);
      }
      if (!inputText == "" && !dropDown == "") {
        console.log("4");
        return el.id_categories == dropDown && el.name.includes(inputText);
      }
    });

    return filterData.map((product) => {
      return <ProductCard product={product} />;
    });
  };

  const renderCategoryDropDown = () => {
    return categoryValue.map((newCategory) => {
      return (
        <option value={newCategory.id_categories}>{newCategory.name}</option>
      );
    });
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <>
      <Stack
        className="flex flex-row justify-center mb-4 "
        direction="row"
        spacing={4}
        align="center"
      >
        <div>
          <h2>Short By Category</h2>
          <Select
            placeholder="Select Category"
            className="m-auto w-3/4 mr-8"
            onChange={dropDownHendeler}
          >
            {renderCategoryDropDown()}
          </Select>
        </div>

        <div>
          <h2>Category</h2>
          <Select placeholder="Select Line" className="m-auto w-3/4 mr-8">
            <option value="Line1">Name</option>
            <option value="Line2">Price</option>
          </Select>
        </div>
        <div>
          <h1>Search</h1>
          <div className="search">
            <input
              onChange={inputTextHendeler}
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label="Search"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </Stack>

      <div className="grid grid-cols-4 gap-10 m-auto w-3/4 ">
        {renderProductList()}
      </div>
      <div className="flex flex-row justify-center mt-4">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Product;
