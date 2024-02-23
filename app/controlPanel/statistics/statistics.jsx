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
  let total = 0;
  const totalHash = reduxData.forEach(
    (item) => (total += Number(item.attributes.ths))
  );
  const amountDevices = reduxData.length;
  const activeDevices = reduxData.filter((item) => item.paidHosting === true);
  const lowHash = reduxData.length;
  const notPaid = reduxData.filter((item) => item.paidHosting === false);
  const unPlugged = reduxData.filter((item) => item.status === "отключить");
  const unPluggedLength = unPlugged.length;

  //values-------------------------------------------------------
  const values = [
    total + "Th/s",
    "96.6%",
    amountDevices,
    activeDevices.length,
    lowHash,
    notPaid.length,
    unPluggedLength,
  ];

  //setClassNameValue----------------------------------------
  function setClassNameValue(index) {
    switch (index) {
    case 0: 
    return s.valueA;
    case 1: 
    return s.valueB;
    case 2: 
    return s.valueC;
    case 3: 
    return s.valueD;
    case 4: 
    return s.valueE;
    case 5: 
    return s.valueF;
    case 6:
    return s.valueG;
    default:
      return
    }
  }
  //-----------------------------------------------------------------------
  function setClassNameTitle(index) {
    switch (index) {
    case 0:
    case 1:
    case 2:
    case 3:     
    return s.titleA;
    case 4:
    case 5:   
    return s.titleB;
    case 6: 
    return s.titleC;
    default:
    return
    }
  }

  return (
    <div className={s.wrapper}>
      {titles &&
        titles.map((item, index) => (
          <div className={s.statisticsItem} key={index}>
            <h3 className={setClassNameTitle(index)}>{titles[index]}</h3>
            <p className={setClassNameValue(index)}>{values[index]}</p>
          </div>
        ))}
    </div>
  );
};
export default Statistics;
