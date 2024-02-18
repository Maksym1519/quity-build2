"use client";
import a from "./applicationData.module.scss";
import { useState, useEffect } from "react";
import Icones from "@/public/Data";
import Image from "next/image";


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
        <Image src={Icones.bucket} width={24} height={24} className={a.bucket}/>
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
      <div className={a.applicationData__content}>
        {content.length > 0 &&
          content.map((item, index) => (
            <div className={a.contentRow} key={index}>
              {item}
            </div>
          ))}
      </div>
      </div>
  );
};
export default ApplicationData;
