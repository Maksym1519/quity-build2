"use client";
import o from "./orderStorage.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";

const OrderPopup = (props) => {
  const handleOrderConfirmation = () => {
    props.hidePopup(); // Сначала закрываем попап
    props.hideOverlay(); // Затем закрываем оверлей
    props.clickPaid();;
    };

  return (
    <div className={o.popup__wrapper}>
      <div className={o.popup__body}>
        <p className={o.text}>
          Нажимая кнопку "Подтвердить" Вы соглашаетесь с тем, что с Вашего счета
          произойдет списание средств за выбранный товар
        </p>
        <button className={o.popupButton} onClick={() => {handleOrderConfirmation()}}>Подтвердить</button>
        <Image src={Icones.close} width={24} height={24} className={o.close} onClick={() => {props.hidePopup();props.hideOverlay()}}/>
      </div>
    </div>
  );
};
export default OrderPopup;
