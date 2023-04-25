import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { getCategorybyId } from "../features/product/productSlice";
import { editCategoryData } from "../features/product/productSlice";
function EditCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CategoryId = useSelector((state) => state.product.categoryId);

  const [nameCategory, setName] = useState("");

  useEffect(() => {
    dispatch(getCategorybyId(id));
  }, []);
  useEffect(() => {
    setName(CategoryId.name);
  }, [CategoryId]);

  const editDataCategory = () => {
    let tempData = {
      name: nameCategory,
    };
    dispatch(editCategoryData(tempData, id));
  };

  const nameCategoriesHendeler = (e) => {
    setName(e.target.value);
  };

  return (
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
                  onChange={nameCategoriesHendeler}
                  value={nameCategory}
                  id="nameCategory"
                  name="nameCategory"
                  type="text"
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
          onClick={() => navigate("/setting")}
        >
          Cancel
        </button>

        <button
          className="rounded-md bg-blue-600 py-2 px-3 text-sm font-semibold text-white shadow-sm"
          onClick={() => editDataCategory()}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditCategory;
