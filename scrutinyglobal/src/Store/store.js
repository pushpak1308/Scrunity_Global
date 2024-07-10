import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import drawerReducer from "./Slice/drawerSlice";
import stepReducer from "./Slice/stepSlice";
import rowSelectionReducer from "./Slice/rowSelectionSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
    drawer: drawerReducer,
    step: stepReducer,
    rowSelection: rowSelectionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
