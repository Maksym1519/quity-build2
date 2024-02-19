"use client";
import n from "./navigation.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActiveState } from "@/lib/features/hostingApplication/hostingApplicationSlice";

const Navigation = () => {
  const itemValue = [
    "Все",
    "На рассмотрении",
    "Не оплачены",
    "Оплачены",
    "Просрочены",
    "На снятии",
    "Сняты",
  ];
  //activeIndex----------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(0);
  const clickActiveIndex = (index) => {
    setActiveIndex(index);
  };
  //get-redux-data---------------------------------------------------------
  const reduxData = useSelector((state) => state.hostingApplication.appData)
  const notPaid = reduxData.filter((item) => item.paid === false)
  const paid = reduxData.filter((item) => item.paid === true)
  const reduxValue = [
    reduxData.length,
    0,
    notPaid.length,
    paid.length,
    0,
    0,
    0
  ]
  //set-active-state-redux---------------------------------------------
  const dispatch = useDispatch()
  if (activeIndex === 0) {
    dispatch(setActiveState("все"))
  } else if (activeIndex === 1) {
    dispatch(setActiveState("на рассмотрении"))
  } else if (activeIndex === 2) {
    dispatch(setActiveState("не оплачены"))
  } else if (activeIndex === 3) {
    dispatch(setActiveState("оплачены"))
  } else if (activeIndex === 4) {
    dispatch(setActiveState("просрочены"))
  } else if (activeIndex === 5) {
    dispatch(setActiveState("на снятии"))
  } else if (activeIndex === 6) {
    dispatch(setActiveState("сняты"))
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
              onClick={() => {clickActiveIndex(index)}}
            >
              <span className={n.itemText}>{item}</span>
              <span className={n.itemValue}>{reduxValue.length > 0 ? reduxValue[index] : ''}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Navigation;
