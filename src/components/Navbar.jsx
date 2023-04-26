import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* <div classNameName="bg-black flex flex-row justify-between items-center px-10 h-20">
        <div classNameName="text-white">
          <p className="font-semibold text-lg">Ecommerce Wannabe</p>
        </div>
        <div className="text-white flex flex-row items-center gap-10">
          <p>Home</p>
          <p>Product</p>
          <p>About</p>
          <p
            className="hover:cursor-pointer"
            onClick={() => navigate("/user/register")}
          >
            Register
          </p>
          <p
            className="hover:cursor-pointer"
            onClick={() => navigate("/user/login")}
          >
            Login
          </p>
        </div>
      </div> */}
      <div className="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start bg-slate-700">
        <div className="container flex items-center justify-between py-0 flex-wrap-inherit">
          <a
            className="py-2.375 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-white lg:ml-0"
            onClick={() => navigate("/")}
          >
            Lychee POS
          </a>
          <button
            className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer text-lg ease-soft-in-out lg:hidden"
            type="button"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="inline-block mt-2 align-middle bg-center bg-no-repeat bg-cover w-6 h-6 bg-none">
              <span className="w-5.5 rounded-xs duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
              <span className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
              <span className="w-5.5 rounded-xs mt-1.75 duration-350 relative my-0 mx-auto block h-px bg-white transition-all"></span>
            </span>
          </button>
          <div className="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto">
            <ul className="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
              <li>
                <a
                  className="flex items-center px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                  aria-current="page"
                  href="../pages/dashboard.html"
                >
                  <i className="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                  onClick={() => navigate("/user/register")}
                >
                  <i className="mr-1 text-white lg-max:text-slate-700 fas fa-user-circle opacity-60"></i>
                  Register
                </a>
              </li>
              <li>
                <a
                  className="block px-4 py-2 mr-2 font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out text-sm lg:px-2 lg:hover:text-white/75"
                  onClick={() => navigate("/user/login")}
                >
                  <i className="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60"></i>
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
