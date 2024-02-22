"use client";
import n from "./navigation.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveState } from "@/lib/features/order/orderSlice";


const Navigation = () => {
  const itemValue = [
    "Все",
    "Активные",
    "Низкий хэшрейт",
    "Отключены",
    "Не оплачены",
  ];
  //activeIndex----------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(0);
  const clickActiveIndex = (index) => {
    setActiveIndex(index);
  };
  //get-redux-data------------------------------------------------------
  const reduxData = useSelector((state) => state.order.orders);
  const dispatch = useDispatch()
  if (activeIndex === 0) {
    dispatch(setActiveState("все"))
  } else if (activeIndex === 1) {
    dispatch(setActiveState("оплачены"))
  } else if (activeIndex === 2) {
    dispatch(setActiveState("низкий хэш"))
  } else if (activeIndex === 3) {
    dispatch(setActiveState("отключены"))
  } else if (activeIndex === 4) {
    dispatch(setActiveState("не оплачены"))
  }
  
  return (
    <div className={n.navigation__wrapper}>
      <div className={n.navigation__body}>
        {itemValue.length > 0 &&
          itemValue.map((item, index) => (
            <div
              className={
                activeIndex === index
                  ? n.navigation__itemActive
                  : n.navigation__item
              }
              key={index}
              onClick={() => {
                clickActiveIndex(index);
              }}
            >
              <span className={n.itemText}>{item}</span>
              <span className={n.itemValue}>
                {index === 0 && reduxData.length}
                {index === 1 && (
                  <span>
                    {
                      reduxData.filter((item) => item.status === "оплачено")
                        .length
                    }
                  </span>
                )}
                {index === 2 && reduxData.length}
                {index === 3 && (
                  <span>
                    {
                      reduxData.filter((item) => item.status === "отключить")
                        .length
                    }
                  </span>
                )}
                {index === 4 && (
                  <span>
                    {reduxData.length -
                      reduxData.filter(
                        (item) =>
                          item.status !== "отключить" ||
                          item.status === "оплачено"
                      ).length}
                  </span>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Navigation;
