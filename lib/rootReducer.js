import { combineReducers } from "@reduxjs/toolkit";
import currencyReducer from "./features/currencySlice";
import profileStateReducer from "./features/profileStateSlice";
import addressesReducer from "./features/addressesSlice";
import getIdReducer from "./features/getIdSlice";
import registrationReducer from "./features/registrationSlice";
import getClientsInfoReducer from "./features/getClientsInfoSlice";
import windowWidthReducer from "./features/windowWidthSlice";
import shopCatalogReducer from "./features/shopCatalogSlice";
import testReducer from "./features/testSlice";
import searchGoodsReducer from "./features/searchGoodsSlice";
import blogStateReducer from "./features/blog/blogStateSlice";
import pageNavigationReducer from "./features/blog/header/pageNavigationSlice";
import aboutReducer from "./features/about/aboutSlice";
import backSlice from "./features/return/returnSlice";

const rootReducer = combineReducers({
    currency: currencyReducer,
    profileData: profileStateReducer,
    addresses: addressesReducer,
    localStorage: getIdReducer,
    registration: registrationReducer,
    clientsInfo: getClientsInfoReducer,
    shopCatalog: shopCatalogReducer,
    test: testReducer,
    displayedGoods: searchGoodsReducer,
    blogState: blogStateReducer,
    pageNavigation: pageNavigationReducer,
    about: aboutReducer,
    back: backSlice,
    screenWidth: windowWidthReducer,
   });
  export default rootReducer;