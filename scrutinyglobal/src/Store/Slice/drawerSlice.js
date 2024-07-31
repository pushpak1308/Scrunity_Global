import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openClient: false,
  openVendor: false,
  openSalesModule: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawerClient: (state) => {
      state.openClient = !state.openClient;
    },
    toggleDrawerVendor: (state) => {
      state.openVendor = !state.openVendor;
    },
    toggleDrawerSales: (state) => {
      state.openSalesModule = !state.openSalesModule;
    },
    setDrawerOpenClient: (state, action) => {
      state.openClient = action.payload;
    },
    setDrawerOpenVendor: (state, action) => {
      state.openVendor = action.payload;
    },
    setDrawerOpenSalesModule: (state, action) => {
      state.openSalesModule = action.payload;
    },
  },
});

export const {
  toggleDrawerClient,
  toggleDrawerVendor,
  toggleDrawerSales,
  setDrawerOpenClient,
  setDrawerOpenVendor,
  setDrawerOpenSalesModule,
} = drawerSlice.actions;
export const selectDrawerOpenClient = (state) => state.drawer.openClient;
export const selectDrawerOpenVendor = (state) => state.drawer.openVendor;
export const selectDrawerOpenSalesModule = (state) =>
  state.drawer.openSalesModule;
export default drawerSlice.reducer;
