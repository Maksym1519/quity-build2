"use client";
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import { setCurrency } from '@/lib/features/currencySlice';



export default function StoreProvider({value, children }) {
  const storeRef = useRef(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(setCurrency(value))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
