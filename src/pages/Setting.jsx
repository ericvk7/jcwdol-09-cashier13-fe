import React from "react";
import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Select, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductData } from "../features/product/productSlice";

function Setting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [idProduct, setIdProduct] = useState();
  const [nameProduct, setNameProduct] = useState();
  const [priceProduct, setPriceProduct] = useState();
  const [imgPathProduct, setImagePathProduct] = useState(null);
  const [descriptionProduct, setDescriptionProduct] = useState();
  const [idUserProduct, setIdUseerProduct] = useState(0);
  const [idCategoryProduct, setIdCategoryProduct] = useState();

  const [file, setFile] = useState(null);

  const addData = async () => {
    if (file) {
      const obj = {
        idProduct: idProduct,
        nameProduct: nameProduct,
        priceProduct: priceProduct,
        descriptionProduct: descriptionProduct,
        idUserProduct: 0,
        idCategoryProduct: idCategoryProduct,
      };

      let formData = new FormData();
      formData.append("file", file);
      formData.append("data", JSON.stringify(obj));

      setIdUseerProduct(formData);
      console.log(formData);

      dispatch(addProductData(formData));

      // const response = await axios.post(
      //   "http://localhost:8001/upload",
      //   formData
      // );
      // console.log(response);
    } else {
      alert("Select image first");
    }
  };

  const nameProductHendeler = (e) => {
    setNameProduct(e.target.value);
  };
  const priceProductHendeler = (e) => {
    setPriceProduct(e.target.value);
  };
  const imagePathHendeler = (event) => {
    setFile(event.target.files[0]);

    let preview = document.getElementById("imagepreview");
    preview.src = URL.createObjectURL(event.target.files[0]);
  };

  const descriptionProductHendeler = (e) => {
    setDescriptionProduct(e.target.value);
  };

  const idCategoryProductHendeler = (e) => {
    setIdCategoryProduct(e.target.value);
  };

  //===================Category=======================

  const addCategory = () => {};

  return (
    <Tabs isLazy size="md" variant="enclosed" className="px-10 pt-5 ">
      <TabList>
        <Tab>Add New Product</Tab>
        <Tab>Add New Category</Tab>
        <Tab>Edit Product</Tab>
        <Tab>Edit Category</Tab>
      </TabList>
      <TabPanels className="ml-60 mr-60">
        <TabPanel className="ml-60 mr-60">
          <div className="ml-60 mr-60">
            <div className="space-y-20 ">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900 ">
                  INPUT NEW PRODUCT
                </h2>

                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="Pekerjaan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={nameProductHendeler}
                        id="productname"
                        name="productname"
                        type="productname"
                        autoComplete="productname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="Pekerjaan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Price
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={priceProductHendeler}
                        id="price"
                        name="price"
                        type="number"
                        autoComplete="price"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Detail Product
                    </label>
                    <div className="mt-2">
                      <textarea
                        onChange={descriptionProductHendeler}
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="Pekerjaan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Product Image
                    </label>
                    <div className="flex min-h-full items-center justify-center px-2 py-4 sm:px-6 lg:px-5">
                      <div className="w-full max-w-md space-y-8">
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div class="flex items-center justify-center w-full">
                            <label
                              for="dropzone-file"
                              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  aria-hidden="true"
                                  class="w-10 h-10 mb-3 text-gray-400"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  ></path>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                  <span class="font-semibold">
                                    Click to upload your Profil Picture
                                  </span>{" "}
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                                </p>
                              </div>
                              <input
                                id="file"
                                type="file"
                                //class="hidden"
                                onChange={(event) => imagePathHendeler(event)}
                              />
                              <img
                                id="imagepreview"
                                className="mx-auto h-16 w-16 rounded-full ring-2 ring-red"
                              />
                            </label>
                          </div>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Category
                    </label>
                    <div className="mt-2">
                      <Select
                        placeholder="Select Category"
                        onChange={idCategoryProductHendeler}
                      >
                        <option value="1">Coffe</option>
                        <option value="2">Tea</option>
                        <option value="3">Snack</option>
                        <option value="4">Soda</option>
                        <option value="5">Alcohol</option>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white shadow-sm"
                onClick={() => addData()}
              >
                Save
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel className="ml-60 mr-60">
          <div className="ml-60 mr-60">
            <div className="space-y-20 ">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900 ">
                  INPUT NEW CATEGORY
                </h2>

                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="Pekerjaan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Category Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="productname"
                        name="productname"
                        type="productname"
                        autoComplete="productname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>

              <button className="rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white shadow-sm">
                Save
              </button>
            </div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Setting;
