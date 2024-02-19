"use client";
import o from './reportPopup.module.scss';
import Image from "next/image";
import Icones from "@/public/Data";
import { useDispatch } from 'react-redux';
import { setBuyPopup } from '@/lib/features/hostingApplication/hostingApplicationSlice';
import { useSelector } from 'react-redux';

const BuyConfirm = (props) => {
    const dispatch = useDispatch()
    const hidePopup = () => {
        dispatch(setBuyPopup(false))
    }
//get-redux-data-------------------------------------------------------------
const reduxDataArray = useSelector((state) => state.hostingApplication.appdata)
    return (
    <div className={o.popup__wrapper}>
      <div className={o.popup__body}>
        <p className={o.text}>
         Ваш список заказов
        </p>
        <button className={o.popupButton} onClick={() => hidePopup()}>Сохранить</button>
        <Image src={Icones.close} width={24} height={24} className={o.close} onClick={() => hidePopup()}/>
      </div>
    </div>
  );
};
export default BuyConfirm;
