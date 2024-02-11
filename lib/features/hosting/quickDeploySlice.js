import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  dataArray: null,
  status: null,
  error: null
};

export const quickDeploy = createAsyncThunk(
  "dataArray/quickDeploy",
  async function (_, rejectWithValue) {
    try {
      const response = await axios.get(
        "https://api.coinlore.net/api/tickers/"
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

export const quickDeploySlice = createSlice({
  name: "quickDeploy",
  initialState,
  reducers: {
    setInfo: (state, action) => {
      state.dataArray = action.payload;
    },
    extraReducers: (builder) => {
        builder
          .addCase(quickDeploy.pending, (state, action) => {
            state.status = "loading";
            state.error = null;
          })
          .addCase(quickDeploy.fulfilled, (state, action) => {
            state.status = "resolved";
            state.dataArray = action.payload;
          })
          .addCase(quickDeploy.rejected, (state, action) => {
            state.status = "rejected"
            state.error = action.payload
          });
      },
  },
});
export const { setInfo } = quickDeploySlice.actions;
export const quickDeployInfo = (state) => state.quickDeploy.dataArray;
export default quickDeploySlice.reducer;
