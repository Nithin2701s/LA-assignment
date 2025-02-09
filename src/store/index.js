import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice";

const appStore = configureStore({
  reducer: {
    job: jobReducer,
  },
});

export default appStore