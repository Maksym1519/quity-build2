"use client";
import a from "./applicationData.module.scss";
import { useState, useEffect } from "react";
import Icones from "@/public/Data";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  setAppData,
  setChooseNum,
  setBuyPopup,
} from "@/lib/features/hostingApplication/hostingApplicationSlice";

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
  const [allNumbers, setAllNumbers] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const clickAllSelected = () => {
    if (allSelected) {
      setSelectedItems([]);
      setAllNumbers([]);
    } else {
      const allIndexes = newReduxArray.map((_, index) => index);
      setSelectedItems(allIndexes);
      const allNums = newReduxArray.map((item) => item.appNum);
      setAllNumbers(allNums);
    }
    setAllSelected(!allSelected);
    dispatch(setChooseNum(allNumbers))
  };

  const clickItemSelected = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
      const valueToRemove = newReduxArray[index].appNum;
      setAllNumbers(allNumbers.filter((num) => num !== valueToRemove));
    } else {
      setSelectedItems([...selectedItems, index]);
      setAllNumbers([...allNumbers, newReduxArray[index].appNum]);
    }
    dispatch(setChooseNum(allNumbers))
  };

  

  //get-localstorage-data----------------------------------------------
  const currentUserId = localStorage.getItem("id");

  //get-data-from-redux-------------------------------------------------
  const [newReduxArray, setNewReduxArray] = useState()
  const reduxData = useSelector((state) => state.hostingApplication.appData);
   
  useEffect(() => {
  if (reduxData) {
  const filteredData =
  reduxData instanceof Array
    ? reduxData.filter((item) => item.userId === currentUserId)
    : [];
    setNewReduxArray(filteredData)
}
  },[reduxData])
  

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
  const dispatch = useDispatch();
  const getItemDelete = (item) => {
    const value = item.appNum;
    const newArray = newReduxArray.filter((item) => item.appNum !== value);
    dispatch(setAppData(newArray));
  };
  //set-buy-popup----------------------------------------------------
  const clickBuyPopup = () => {
    dispatch(setBuyPopup(true));
  };

  

const clickPaid = (index) => {
  const dataIndex = reduxData.findIndex(item => item.id === index);
  if (dataIndex !== -1) {
     const updatedData = reduxData.map((item, i) => {
      if (i === dataIndex) {
        return { ...item, paid: true };
      }
      return item;
    });
    dispatch(setAppData(updatedData));
    console.log(updatedData);
  }
};


  return (
    <div className={a.applicationData__wrapper}>
      <div className={a.applicationData__header}>
        <th className={a.tableSelect} onClick={clickAllSelected}>
          {allSelected ? birdImg : "..."}
        </th>
        {head.length > 0 &&
          head.map((item, index) => <th className={a.headTitle}>{item}</th>)}
      </div>
      {newReduxArray &&
        newReduxArray.map((item, index) => (
          <div className={a.applicationData__content} key={index}>
            <div className={a.contentRow}>
              <div
                className={a.selected}
                onClick={() => clickItemSelected(index)}
              >
                {selectedItems.includes(index) ? birdImg : ""}
              </div>
              <div>{item.appNum}</div>
              <div>{item.deployAmount}</div>
              <div>{item.dateApp}</div>
              <div>{item.dateDeployment}</div>
              <div>{item.dateRemove}</div>
              <div className={item.paid === true ? a.statusPaid : a.status}>Не оплачено</div>
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
                  <div className={a.buttonPay} onClick={() => {clickPaid(index);clickBuyPopup()}}>
                    {" "}
                    Оплатить
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ApplicationData;
