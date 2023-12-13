import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import profileStateReducer from "./features/profileStateSlice";
import addressesReducer from "./features/addressesSlice";
import getIdReducer from "./features/getIdSlice"

const rootReducer = combineReducers({
    currency: currencyReducer,
    profileData: profileStateReducer,
    addresses: addressesReducer,
    localStorage: getIdReducer
  });
  export default rootReducer;