import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import profileStateReducer from "./features/profileStateSlice";
import addressesReducer from "./features/addressesSlice";
import getIdReducer from "./features/getIdSlice";
import registrationReducer from "./features/registrationSlice";
import getClientsInfoReducer from "./features/getClientsInfoSlice";
import windowWidthReducer from "./features/windowWidthSlice";
import shopCatalogReducer from "./features/shopCatalogSlice";

const rootReducer = combineReducers({
    currency: currencyReducer,
    profileData: profileStateReducer,
    addresses: addressesReducer,
    localStorage: getIdReducer,
    registration: registrationReducer,
    clientsInfo: getClientsInfoReducer,
    shopCatalog: shopCatalogReducer,
    screenWidth: windowWidthReducer,
   });
  export default rootReducer;