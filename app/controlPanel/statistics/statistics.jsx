"use client";
import { useState } from "react";
import s from "./statistics.module.scss";
import { useSelector } from "react-redux";

const Statistics = () => {
  const titles = [
    "Общий хешрейт",
    "Эффективность",
    "Устройств",
    "Активны",
    "Низкий хешрейт",
    "Не оплачены",
    "Отключены",
  ];
  //get-redux-data----------------------------------------------
  const reduxData = useSelector((state) => state.order.orders);
  console.log(reduxData);

  return (
    <div className={s.wrapper}>
      {titles &&
        titles.map((item, index) => (
          <div className={s.statisticsItem} key={index}>
            <h3 className={s.itemTitle}>{titles[index]}</h3>
            <p className={s.itemValue}></p>
          </div>
        ))}
    </div>
  );
};
export default Statistics;
