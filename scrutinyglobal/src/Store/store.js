import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import drawerReducer from "./Slice/drawerSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
    drawer: drawerReducer,
  },

  // middleware,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
