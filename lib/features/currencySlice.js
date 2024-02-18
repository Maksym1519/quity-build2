import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getCurrency = createAsyncThunk(
  "currency/getCurrency",
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get("https://api.coinlore.net/api/tickers/");
      if (response.status !== 200) {
        throw new Error("Server error")
      }
      const responseData = await response.data.data;
      return responseData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  currency: [],
  currencyCalc: null,
  status: null,
  error: null,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.currency = action.payload;
    },
    setCurrencyForCalc: (state, action) => {
      state.currencyCalc = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrency.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCurrency.fulfilled, (state, action) => {
        state.status = "resolved";
        state.currency = action.payload;
      })
      .addCase(getCurrency.rejected, (state, action) => {
        state.status = "rejected"
        state.error = action.payload
      });
  },
});

export const infoCurrencyCalc = (state) => state.currency.currencyCalc;
export const { setCurrency, setCurrencyForCalc } = currencySlice.actions;
export default currencySlice.reducer;
