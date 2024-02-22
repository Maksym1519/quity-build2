import d from "./devicesContent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPaidHosting, setOffHosting } from "@/lib/features/order/orderSlice";
import { useState, useEffect } from "react";
import { setPopup } from "@/lib/features/hostingApplication/hostingApplicationSlice";



const DevicePopup = (props) => {
  const links = [
    "Обновить прошивку",
    "Оплатить",
    "Перезагрузить",
    "Снять устройство",
  ];
  //set-redux-state---------------------------------------------
  const dispatch = useDispatch()
  const [selectedItemId, setSelectedItemId] = useState(null);
  useEffect(() => {
    if (props.itemId !== undefined) {
      setSelectedItemId(props.itemId);
    }
  }, [props.itemId]);
  const clickPaid = () => {
    if (selectedItemId !== null) {
      dispatch(setPaidHosting({ id: selectedItemId, status: "оплачено" }));
    }
  };
  const clickOff = () => {
    if (selectedItemId !== null) {
      dispatch(setOffHosting({ id: selectedItemId, status: "отключить" }));
    }
  };
  //set-popup------------------------------------------------
  const showPopup = () => {
    dispatch(setPopup(true))
  }
  return (
    <div className={d.popup__wrapper}>
      <div className={d.popup__body}>
        {links.map((item, index) => (
          <div
            className={d.popup__item}
            key={index}
            onClick={() => {
              index === 0 && showPopup();
              index === 1 && clickPaid();
              index === 2 && showPopup();
              index === 3 && clickOff();
            }}
          >
            {item}
          </div>
        ))}
      </div>
      </div>
  );
};

export default DevicePopup;
