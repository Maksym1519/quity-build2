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
  setReportPopup
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
    dispatch(setChooseNum(allNumbers));
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
    dispatch(setChooseNum(allNumbers));
  };

  //get-localstorage-data----------------------------------------------
  const currentUserId = localStorage.getItem("id");

  //get-data-from-redux-------------------------------------------------
  const [newReduxArray, setNewReduxArray] = useState();
  const reduxData = useSelector((state) => state.hostingApplication.appData);

  useEffect(() => {
    if (reduxData) {
      const filteredData =
        reduxData instanceof Array
          ? reduxData.filter((item) => item.userId === currentUserId)
          : [];
      setNewReduxArray(filteredData);
    }
  }, [reduxData]);
//get-active-state-------------------------------------
const activeState = useSelector((state) => state.hostingApplication.activeState)
const [filteredReduxArray, setFilteredReduxArray] = useState([]);
console.log(activeState)
//filtration-array-change-active-status--------------------------
useEffect(() => {
  let filteredArray = [];
  if (activeState === "все") {
    filteredArray = newReduxArray;
  } else if (activeState === "на рассмотрении") {
    filteredArray = [];
  } else if (activeState === "не оплачены") {
    filteredArray = newReduxArray.filter((item) => !item.paid);
  } else if (activeState === "оплачены") {
    filteredArray = newReduxArray.filter((item) => item.paid);
  } else if (activeState === "просрочены") {
    filteredArray = [];
  } else if (activeState === "на снятии") {
    filteredArray = [];
  } else if (activeState === "сняты") {
    filteredArray = [];
  }
  setFilteredReduxArray(filteredArray);
}, [activeState, newReduxArray]);

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
//set-report-popup---------------------------------------------------
const clickReportPopup = () => {
  dispatch(setReportPopup(true));
  dispatch(setChooseNum(allNumbers))
};

  const clickPaid = (index) => {
    const dataIndex = reduxData.findIndex((item) => item.id === index);
    if (dataIndex !== -1) {
      const updatedData = reduxData.map((item, i) => {
        if (i === dataIndex) {
          return { ...item, paid: true, paidAmount: "100%" };
        }
        return item;
      });
      dispatch(setAppData(updatedData));
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
      {filteredReduxArray &&
        filteredReduxArray.map((item, index) => (
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
              <div className={item.paid === true ? a.statusPaid : a.status}>
                Не оплачено
              </div>
              <div>{item.paymentType}</div>
              <div>{item.paid === true ? "100%" : item.paidAmount + " " + "$"}</div>
              <div>
                {" "}
                <div className={a.buttonWrapper}>
                  <div className={a.icones__wrapper}>
                    <Image
                      src={Icones.report}
                      width={24}
                      height={24}
                      className={a.buttonIcon}
                      onClick={() => clickReportPopup()}
                      />
                     <Image
                      src={Icones.lightBucket}
                      width={24}
                      height={24}
                      className={a.buttonIcon}
                      onClick={() => getItemDelete(item)}
                    />
                  </div>
                  <div
                    className={a.buttonPay}
                    onClick={() => {
                      clickPaid(index);
                      clickBuyPopup();
                    }}
                  >
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
