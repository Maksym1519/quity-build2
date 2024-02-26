import { createSlice } from "@reduxjs/toolkit";



export const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
        const newItem = action.payload;
        if (!state.includes(newItem)) {
        state.push(newItem);
      }
    },
  },
});

export const { addToHistory } = searchHistorySlice.actions;

export default searchHistorySlice.reducer;
