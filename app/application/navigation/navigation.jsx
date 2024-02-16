"use client";
import n from "./navigation.module.scss";
import { useState } from "react";

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
              onClick={() => clickActiveIndex(index)}
            >
              <span className={n.itemText}>{item}</span>
              <span className={n.itemValue}></span>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Navigation;
