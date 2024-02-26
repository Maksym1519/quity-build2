import { createSlice } from "@reduxjs/toolkit";



export const searchTitleSlice = createSlice({
  name: "searchTitle",
  initialState: [],
  reducers: {
    addTitle: (state, action) => {
        const newItem = action.payload;
        if (!state.includes(newItem)) {
        state.push(newItem);
      }
    },
  },
});

export const { addTitle } = searchTitleSlice.actions;

export default searchTitleSlice.reducer;
