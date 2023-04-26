import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      username: "",
      email: "",
      password: "",
      phone: "",
      storeName: "",
      isAdmin: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {
        id: "",
        username: "",
        email: "",
        password: "",
        phone: "",
        storeName: "",
        isAdmin: false,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser, resetUser } = userSlice.actions;

export function loginUser(data) {
  return async (dispatch) => {
    console.log(data);
    //   const response = await axios.post("http://localhost:8001/auth/login", data);

    //   if (response.data.success) {
    //     dispatch(setUser(response.data.data));
    //     localStorage.setItem("user_token", response.data.token);
    //     alert("im success");
    //   } else {
    //     alert(response.data.message);
    //   }
  };
}

export function checkLogin(token) {
  return async (dispatch) => {
    let response = await axios.post(
      "http://localhost:8001/auth/check-login",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setUser(response.data.data));
  };
}

export function logoutUser() {
  return async (dispatch) => {
    dispatch(resetUser());
    localStorage.removeItem("user_token");
  };
}
