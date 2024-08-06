import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import loginDataReducer from "./Slice/loginSlice";
import drawerReducer from "./Slice/drawerSlice";
import stepReducer from "./Slice/stepSlice";
import rowSelectionReducer from "./Slice/rowSelectionSlice";
import logger from "redux-logger";
import { loadState, saveState } from "../Utilities/localStorageUtilities.js";
const persistedState = loadState();

export const store = configureStore({
  reducer: {
    user: userReducer,
    loginDetails: loginDataReducer,
    drawer: drawerReducer,
    step: stepReducer,
    rowSelection: rowSelectionReducer,
  },

  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
store.subscribe(() => {
  saveState(store.getState());
});
