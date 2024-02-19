"use client";
import o from "./reportPopup.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useDispatch } from "react-redux";
import { setReportPopup } from "@/lib/features/hostingApplication/hostingApplicationSlice";
import { useSelector } from "react-redux";

const ReportPopup = (props) => {
  const dispatch = useDispatch();
  const hidePopup = () => {
    dispatch(setReportPopup(false));
  };
  //get-redux-data-------------------------------------------------------------
  const reduxDataArray = useSelector(
    (state) => state.hostingApplication.appData
  );
  const chooseNumbers = useSelector(
    (state) => state.hostingApplication.chooseNum
  );
  const filteredData =
    reduxDataArray instanceof Array
      ? reduxDataArray.filter((item) => chooseNumbers.includes(item.appNum))
      : [];

 
  return (
    <div className={o.popup__wrapper}>
      <div className={o.popup__body}>
        <p className={o.text}>Ваш список заказов</p>
        <div className={o.report__wrapper}>
          {filteredData.map((item, index) => (
            <div className={o.reportItem} key={index}>
              <div className={o.reportItemCell}>
                <span className={o.title}>Номер заказа</span>
                {item.appNum}
              </div>
              <div className={o.reportItemCell}>
              <span className={o.title}>Тип оплаты</span>
                {item.paymentType}
                </div>
              <div className={o.reportItemCell}>
              <span className={o.title}>Оплачено</span>
                {item.paidAmount} %
                </div>
            </div>
          ))}
        </div>
        <button className={o.popupButton} onClick={() => hidePopup()}>
          Сохранить
        </button>
        <Image
          src={Icones.close}
          width={24}
          height={24}
          className={o.close}
          onClick={() => hidePopup()}
        />
      </div>
    </div>
  );
};
export default ReportPopup;
