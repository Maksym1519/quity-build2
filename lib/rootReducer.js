import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import currencyReducer from "./features/currencySlice";
import profileStateReducer from "./features/profileStateSlice";
import addressesReducer from "./features/addressesSlice";
import getIdReducer from "./features/getIdSlice";
import registrationReducer from "./features/registrationSlice";
import getClientsInfoReducer from "./features/getClientsInfoSlice";
import shopCatalogReducer from "./features/shopCatalogSlice";
import testReducer from "./features/testSlice";
import searchGoodsReducer from "./features/searchGoodsSlice";
import blogStateReducer from "./features/blog/blogStateSlice";
import pageNavigationReducer from "./features/blog/header/pageNavigationSlice";
import aboutReducer from "./features/about/aboutSlice";
import returnReducer from "./features/return/returnSlice";
import filtrationReducer from "./features/catalog/filtrationSlice";
import cardReducer from "./features/card/cardSlice";
import orderReducer from "./features/order/orderSlice";
import quickDeployReducer from "./features/hosting/quickDeploySlice";
import hostingTermsReducer from "./features/hosting/hostingTermsSlice";
import hostingApplicationReducer from "./features/hostingApplication/hostingApplicationSlice";

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
    return: returnReducer,
    filtration: filtrationReducer,
    card: cardReducer,
    order: orderReducer,
    quickDeploy: quickDeployReducer,
    hostingTerms: hostingTermsReducer,
    hostingApplication: hostingApplicationReducer
    });
   const persistConfig = {
    key: 'root',
    storage,
    };
  export default rootReducer;