import { configureStore } from "@reduxjs/toolkit";
import gallerySliceReducer from "./gallery-slice";

const store = configureStore({
  reducer: {
    gallery: gallerySliceReducer,
  },
});

export default store;
