import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.open = !state.open;
    },
    setDrawerOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { toggleDrawer, setDrawerOpen } = drawerSlice.actions;
export const selectDrawerOpen = (state) => state.drawer.open;
export default drawerSlice.reducer;
