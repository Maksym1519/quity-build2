"use client";
import a from "./applicationData.module.scss";
import { useState, useEffect } from "react";
import Icones from "@/public/Data";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { setAppData } from "@/lib/features/hostingApplication/hostingApplicationSlice";


const ApplicationData = (props) => {
  const birdImg = (
    <Image
      src={Icones.filterBird}
      width={24}
      height={24}
      className={a.birdFilter}
    />
  );

  //---------------------------------------------------------
  const [allSelected, setAllSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const clickAllSelected = () => {
    if (allSelected) {
      setSelectedItems([]); 
    } else {
      setSelectedItems(filteredData.map((_, index) => index)); 
    }
    setAllSelected(!allSelected);
  };

  const clickItemSelected = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  //get-localstorage-data----------------------------------------------
  const currentUserId = localStorage.getItem("id");

  //get-data-from-redux-------------------------------------------------
  const reduxData = useSelector((state) => state.hostingApplication.appData);
  const filteredData = reduxData instanceof Array ? reduxData.filter(
    (item) => item.userId === currentUserId
  ) :[];
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

  //delete------------------------------------------------------------
 const dispatch = useDispatch()
  const getItemDelete = (item) => {
    const value = item.appNum;
    const newArray = filteredData.filter((item) => item.appNum !== value)
    dispatch(setAppData(newArray))
  };
  //get-choose-numbers--------------------------------------------------
  let allNumbers = []
  console.log(allNumbers)
  if (allSelected) {
    allNumbers = filteredData instanceof Array ? filteredData.filter((item) => item.appNum) : []
  } else {
    allNumbers = filteredData instanceof Array ? filteredData.filter((item, index) => selectedItems.includes(index)): [];
  }
  //set-numbers-to=popup-------------------------------------------------
  if (allNumbers.length > 0) {
    dispatch(setAppData({chooseNum: allNumbers}))
  }
  return (
    <div className={a.applicationData__wrapper}>
      <div className={a.applicationData__header}>
        <th className={a.tableSelect} onClick={clickAllSelected}>
          {allSelected ? birdImg : "..."}
        </th>
        {head.length > 0 &&
          head.map((item, index) => <th className={a.headTitle}>{item}</th>)}
      </div>
      {filteredData &&
        filteredData.map((item, index) => (
          <div className={a.applicationData__content} key={index}>
            <div className={a.contentRow}>
              <div className={a.selected} onClick={() => clickItemSelected(index)}>{selectedItems.includes(index) ? birdImg : ""}</div>
              <div>{item.appNum}</div>
              <div>{item.deployAmount}</div>
              <div>{item.dateApp}</div>
              <div>{item.dateDeployment}</div>
              <div>{item.dateRemove}</div>
              <div className={a.status}>Не оплачено</div>
              <div>{item.paymentType}</div>
              <div>{0 + " " + "$"}</div>
              <div>
                {" "}
                <div className={a.buttonWrapper}>
                  <Image
                    src={Icones.bucket}
                    width={24}
                    height={24}
                    className={a.bucket}
                    onClick={() => getItemDelete(item)}
                  />
                  <div className={a.buttonPay}> Оплатить</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ApplicationData;
