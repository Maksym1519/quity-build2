// StoreProvider.js
"use client";
import { useRef } from 'react';
import { Provider } from 'react-redux';
import makeStore from '@/lib/store';

export default function StoreProvider({ value, children }) {
  const storeRef = useRef(null);

  if (!storeRef.current) {
    const { store, persistor } = makeStore();
    storeRef.current = store;
    }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
