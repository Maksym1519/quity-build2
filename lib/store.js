// makeStore.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import createCompressor from 'redux-persist-transform-compress';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["card","order"],
  transforms: [createCompressor()],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export default makeStore;
