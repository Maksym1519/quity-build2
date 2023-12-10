import { configureStore } from '@reduxjs/toolkit';
import currencySlice from './features/currencySlice';
import rootReducer from './rootReducer';

// export const makeStore = () => {
//   return configureStore({
//     reducer: {
//       currency: currencySlice
//     }
//   })
// }
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}