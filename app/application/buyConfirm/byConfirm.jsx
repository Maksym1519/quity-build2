"use client";
import o from './buyConfirm.module.scss';
import Image from "next/image";
import Icones from "@/public/Data";
import { useDispatch } from 'react-redux';
import { setBuyPopup } from '@/lib/features/hostingApplication/hostingApplicationSlice';

const BuyConfirm = (props) => {
    const dispatch = useDispatch()
    const hidePopup = () => {
        dispatch(setBuyPopup(false))
    }

    return (
    <div className={o.popup__wrapper}>
      <div className={o.popup__body}>
        <p className={o.text}>
          Нажимая кнопку "Подтвердить" Вы соглашаетесь с тем, что с Вашего счета
          произойдет списание средств за выбранную услугу
        </p>
        <button className={o.popupButton} onClick={() => hidePopup()}>Подтвердить</button>
        <Image src={Icones.close} width={24} height={24} className={o.close} onClick={() => hidePopup()}/>
      </div>
    </div>
  );
};
export default BuyConfirm;
