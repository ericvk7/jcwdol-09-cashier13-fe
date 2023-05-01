import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../features/product/productSlice";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import {
  Divider,
  Select,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import CartModal from "../components/CartModal";

function Product() {
  const dispatch = useDispatch();
  const productValue = useSelector((state) => state.product.productValue);
  const categoryValue = useSelector((state) => state.product.categoryValue);

  const [inputText, setInputText] = useState("");
  const [dropDown, UseDropDown] = useState("");
  const [shortHendeler, UseShortHendeler] = useState();
  const [acddec, UseAcddec] = useState();

  console.log(shortHendeler, acddec);
  let inputTextHendeler = (e) => {
    var dataInput = e.target.value;
    setInputText(dataInput);
  };

  let dropDownHendeler = (e) => {
    var dataInput = e.target.value;
    UseDropDown(dataInput);
  };

  let shortByHendler = (e) => {
    var dataInput = e.target.value;
    UseShortHendeler(dataInput);
  };
  let acddecHendelr = (e) => {
    var dataInput = e.target.value;
    UseAcddec(dataInput);
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
      if (inputText == "" && dropDown == "") {
        return el;
      }
      if (!dropDown == "" && inputText == "") {
        return el.id_categories == dropDown;
      }
      if (!inputText == "" && dropDown == "") {
        return el.name.includes(inputText);
      }
      if (!inputText == "" && !dropDown == "") {
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
          <Select
            placeholder="Short by"
            className="m-auto w-3/4 mr-8"
            onChange={shortByHendler}
          >
            <option value={1}>Name</option>
            <option value={2}>Price</option>
          </Select>
        </div>
        <div>
          <h2>Category</h2>
          <Select
            placeholder="Short"
            className="m-auto w-3/4 mr-8"
            onChange={acddecHendelr}
          >
            <option value="acd">Ascending</option>
            <option value="dce">Descending</option>
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

        <div className="space-y-2">
          <div className="invoice">
            <button
              type="button"
              class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-toggle="modal"
              data-te-target="#exampleModalCenteredScrollable"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => CartModal()}
            >
              Invoice
            </button>
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
