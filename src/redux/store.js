import { configureStore } from "@reduxjs/toolkit";
import singleDetails from "./features/singleDetails";

export const store = configureStore({
  reducer: {
    singleDetailsSlice: singleDetails,
  },
});
