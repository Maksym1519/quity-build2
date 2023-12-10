import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice"

const rootReducer = combineReducers({
    currency: currencyReducer,
  });
  export default rootReducer;