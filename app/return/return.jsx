"use client";
import r from './return.module.scss';
import { useAppSelector } from '@/lib/hooks';
import { backInfo } from '@/lib/features/return/returnSlice';
import { useState, useEffect } from 'react';

const Return = () => {
    const [dataFromServer, setDataFromServer] = useState();
    const dataFromRedux = useAppSelector(backInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      
    }
  }, dataFromServer);
    return (
        <div className={r.return__body}>
           <h3 className={r.mainTitle}></h3>
           <p className={r.text}></p>
        </div>
    )
}
export default Return;