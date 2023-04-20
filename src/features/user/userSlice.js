import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      id: "",
      name: "",
      email: "",
      username: "",
      imagePath: "",
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
        name: "",
        email: "",
        username: "",
        imagePath: "",
        isAdmin: false,
      };
    },
  },
});

export default userSlice.reducer;
export const { setUser, resetUser } = userSlice.actions;
