import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleDetails: {},
};

export const singleDetails = createSlice({
  name: "singleDetailsFeature",
  initialState,
  reducers: {
    findSingleDetails: (state, { payload }) => {
      console.log(payload);
    },
  },
});

export const { findSingleDetails } = singleDetails.actions;

export default singleDetails.reducer;
