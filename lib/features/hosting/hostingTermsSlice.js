import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  dataArray: [],
  status: null,
  error: null
};

export const hostingTerms = createAsyncThunk(
  "dataArray/hostingTerms",
  async function (_, rejectWithValue) {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/hosting-terms?populate=*"
      );
      if (response.status !== 200) {
        throw new Error("Server error");
      }
      const responseData = await response.data.data;
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const hostingTermsSlice = createSlice({
  name: "hostingTerms",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.dataArray = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hostingTerms.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(hostingTerms.fulfilled, (state, action) => {
        state.status = "resolved";
        state.dataArray = action.payload;
      })
      .addCase(hostingTerms.rejected, (state, action) => {
        state.status = "rejected"
        state.error = action.payload
      });
  },
});
export const { setInfo } = hostingTermsSlice.actions;
export const hostingTermsInfo = (state) => state.hostingTerms.dataArray;
export default hostingTermsSlice.reducer;
