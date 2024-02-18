"use client";
import a from "./applicationData.module.scss";
import { useState, useEffect } from "react";
import Icones from "@/public/Data";
import Image from "next/image";
import { useSelector } from "react-redux";

const ApplicationData = (props) => {
  const birdImg = (
    <Image
      src={Icones.filterBird}
      width={24}
      height={24}
      className={a.birdFilter}
    />
  );
  const [allSellected, setAllSelected] = useState(false);
  const clickAllSelected = () => {
    setAllSelected(!allSellected);
  };

  //get-localstorage-data----------------------------------------------
  const currentUserId = localStorage.getItem("id");
  //get-data-from-redux-------------------------------------------------
  const reduxData = useSelector((state) => state.hostingApplication.appData);
  const filteredData = reduxData.filter(
    (item) => item.userId === currentUserId
  );
console.log(filteredData)
  //head-------------------------------------------------------------
  const head = [
    "№",
    <span>
      Кол-во устройств
      <br />
      (Размещено/всего)
    </span>,
    "Дата заявки",
    "Дата размещения",
    "Дата снятия",
    "Статус",
    "Тип оплаты",
    "Оплачено, $задолженность",
    " ",
  ];

  //content------------------------------------------------------------
  const status = <div className={a.status}>Не оплачено</div>;
  const sum = "5000" + " " + "$";
  const content = [
    <div className={a.selected}></div>,
    "1456",
    "10/10",
    "16.02.2024",
    "16.02.2024",
    "-",
    status,
    "Банковской картой",
    sum,
    <div className={a.buttonWrapper}>
      <Image src={Icones.bucket} width={24} height={24} className={a.bucket} />
      <div className={a.buttonPay}> Оплатить</div>
    </div>,
  ];

  return (
    <div className={a.applicationData__wrapper}>
      <div className={a.applicationData__header}>
        <th className={a.tableSelect} onClick={clickAllSelected}>
          {allSellected ? birdImg : "..."}
        </th>
        {head.length > 0 &&
          head.map((item, index) => <th className={a.headTitle}>{item}</th>)}
      </div>
      {filteredData &&
      filteredData.map((item, index) => (
        <div className={a.applicationData__content} key={index}>
          <div className={a.contentRow}>
            <div>{item.appNum}</div>
            <div>{item.deployAmount}</div>
            <div>{item.dateApp}</div>
            <div>{item.dateDeployment}</div>
            <div>{item.dateRemove}</div>
            <div>{/* Добавьте отображение статуса */}</div>
            <div>{item.paymentType}</div>
            <div>{/* Добавьте отображение оплаченной суммы и задолженности */}</div>
            <div>{/* Добавьте кнопку оплаты */}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ApplicationData;
