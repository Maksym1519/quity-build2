import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 0,
};

const chartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {
    setActiveState: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});
export const {setActiveState} = chartSlice.actions;
export default chartSlice.reducer
