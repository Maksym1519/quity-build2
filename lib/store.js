import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './features/currencySlice';
import rootReducer from './rootReducer';

 const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}
export default makeStore;