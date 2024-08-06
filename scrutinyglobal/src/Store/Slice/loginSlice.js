import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  roles: [],
  token: "",
  userid: "",
};

const loginDataSlice = createSlice({
  name: "loginData",
  initialState,
  reducers: {
    setLoginField: (state, action) => {
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    },
    resetForm: () => initialState,
  },
});

export const { setLoginField, resetForm } = loginDataSlice.actions;

export const selectLoginData = (state) => state.loginData;
export default loginDataSlice.reducer;
