import p from "./popup.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useDispatch, useSelector } from "react-redux";
import { setAppData } from "@/lib/features/hostingApplication/hostingApplicationSlice";
import { setPopup } from "@/lib/features/hostingApplication/hostingApplicationSlice";
import { setDataMessages } from "@/lib/features/hostingApplication/sendMessagesSlice";
import { sendSms } from "@/lib/features/hostingApplication/sendMessagesSlice";
import { useEffect, useState } from "react";
import BuyPopUp from "@/app/card/cardInfo/buyPopUp";

const Popup = (props) => {
  const mediaIcones = [
    <Image src={Icones.whatsUp} width={40} height={40} />,
    <Image src={Icones.viber} width={40} height={40} />,
    <Image src={Icones.telegram} width={40} height={40} />,
  ];
  //setPopupState---------------------------------------------------------
  const dispatch = useDispatch();
  const setPopupState = () => {
    dispatch(setPopup(false));
  };
  //set-data-from-inputs-----------------------------------------------
  const [formData, setFormData] = useState({
    phone: {
      part0: "38",
      part1: "",
      part2: "",
      part3: "",
      part4: "",
    },
    to: null,
  });

  const handleChange = (e, part) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      phone: {
        ...prevData.phone,
        [part]: value,
      },
    }));
  };
  const fullPhoneNumber = Object.values(formData.phone).join("");

  //-set-redux-data--------------------------------------------------------
  dispatch(setDataMessages(fullPhoneNumber));
  const data = useSelector((state) => state.sendMessages.phone);

  //setDate------------------------------------------------------------------------
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let fullDate = day + "/" + month + "/" + year;

  //get-localstorage-id----------------------------------------------------------
  const currentUserId = localStorage.getItem("id");

  //random-number-----------------------------------------------------------------
  const [appNumber, setAppNumber] = useState();
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1000);
    setAppNumber(randomNumber);
  }, []);

  //set-applications--------------------------------------------------------------
  const currentData = useSelector((state) => state.hostingApplication.appData);
 
  const setApplicationsData = () => {
    const newData = {
      appNum: appNumber,
      deployAmount: "10/10",
      dateApp: fullDate,
      dateDeployment: fullDate,
      dateRemove: "-",
      paid: false,
      paymentType: "Банковской картой",
      paidAmount: null,
      userId: currentUserId,
      id: currentData.length 
    };
    const updatedData = Array.isArray(currentData)
      ? [...currentData, newData]
      : [newData];
    dispatch(setAppData(updatedData));

    };

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
                mediaIcones.map((item, index) => (
                  <div key={index} className={p.mediaIcon}>
                    {item}
                  </div>
                ))}
            </div>
          </div>
          <div className={p.phones__wrapper}>
            <h4 className={p.title__contacts}>Введите номер телефона</h4>
            <div className={p.input__wrapper}>
              <div className={p.inputs__body}>
                <span className={p.phoneCode}>3</span>
                <input
                  placeholder="(     )"
                  type="number"
                  value={formData.phone.part1 || ""}
                  onChange={(e) => handleChange(e, "part1")}
                />
                <input
                  type="number"
                  value={formData.phone.part2 || ""}
                  onChange={(e) => handleChange(e, "part2")}
                />
                <input
                  type="number"
                  value={formData.phone.part3 || ""}
                  onChange={(e) => handleChange(e, "part3")}
                />
                <input
                  type="number"
                  value={formData.phone.part4 || ""}
                  onChange={(e) => handleChange(e, "part4")}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className={p.popupButton}
            onClick={() => {
              setApplicationsData();
            }}
          >
            Заказать диагностику, оценить стоимость и сроки
          </button>
        </div>
        <Image
          src={Icones.close}
          width={24}
          height={24}
          className={p.close}
          onClick={() => {
            setPopupState();
            props.close();
          }}
        />
      </div>
      {/* {<BuyPopUp />} */}
    </div>
  );
};
export default Popup;
