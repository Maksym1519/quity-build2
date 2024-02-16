import p from "./popup.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useAppDispatch } from "@/lib/hooks";
import { setPopup } from "@/lib/features/hostingApplication/hostingApplicationSlice";



const Popup = (props) => {
  const mediaIcones = [
    <Image src={Icones.whatsUp} width={40} height={40} />,
    <Image src={Icones.viber} width={40} height={40} />,
    <Image src={Icones.telegram} width={40} height={40} />,
  ];
 //setPopupState---------------------------------------------------------
 const dispatch = useAppDispatch();
 const setPopupState = () => {
    dispatch(setPopup(false))
 }
 //--------------------------------------------------------------------
 
  return (
    <div className={p.popup__wrapper}>
      <div className={p.popup__body}>
        <h2 className={p.mainTitle}>
          Подайте заявку на размещение ASIC-майнера на Quity-хостинге
        </h2>
        <div className={p.model__wrapper}>
          <h3 className={p.modelTitle}>
            Введите модель Вашего устройства (необязательно)
          </h3>
          <input type="text" className={p.modelInput} />
        </div>
        <div className={p.amount__wrapper}>
          <h3 className={p.amountTitle}>
            Сколько майнеров Вам нужно отремонтировать?
          </h3>
          <div className={p.counter__wrapper}>
            <div className={p.counterItem}>-</div>
            <div className={p.counterItem + " " + p.counterItemValue}>0</div>
            <div className={p.counterItem}>+</div>
          </div>
          <div className={p.media__wrapper}>
            <h3 className={p.mediaTitle}>Как с Вами удобнее связаться?</h3>
            <div className={p.mediaIcones__wrapper}>
              {mediaIcones.length > 0 &&
                mediaIcones.map((item, index) => <div key={index} className={p.mediaIcon}>{item}</div>)}
            </div>
          </div>
          <div className={p.phones__wrapper}>
            <h4 className={p.title__contacts}>Введите номер телефона</h4>
            <div className={p.input__wrapper}>
              <div className={p.inputs__body}>
                <span className={p.phoneCode}>+3</span>
                <input placeholder="(     )" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>
            </div>
          </div>
          <button type="button" className={p.popupButton}>
            Заказать диагностику, оценить стоимость и сроки
          </button>
        </div>
        <Image src={Icones.close} width={24} height={24} className={p.close} onClick={() => {setPopupState(); props.close()}}/>
      </div>
    </div>
  );
};
export default Popup;
