"use client";
import d from "./devicesContent.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import HeadContent from "./headContent";
import DevicePopup from "./devicePopup";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCloseAside } from "@/lib/features/devices/devicesSlice";

const DevicesContent = () => {
  const birdImg = (
    <Image
      src={Icones.filterBird}
      width={24}
      height={24}
      className={d.birdFilter}
    />
  );
  //--------------------------------------------------------------
  const currentUserId = useSelector((state) => state.localStorage.value)
  const [newReduxArray, setNewReduxArray] = useState();
  const reduxData = useSelector((state) => state.order.orders);

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
  const activeState = useSelector((state) => state.order.activeState);
  const [filteredReduxArray, setFilteredReduxArray] = useState([]);

  //filtration-array-change-active-status--------------------------
  useEffect(() => {
    let filteredArray = [];
    if (activeState === "все") {
      filteredArray = newReduxArray;
    } else if (activeState === "оплачены") {
      filteredArray = newReduxArray.filter(
        (item) => item.status === "оплачено"
      );
    } else if (activeState === "низкий хэш") {
      filteredArray = newReduxArray;
    } else if (activeState === "отключены") {
      filteredArray = newReduxArray.filter(
        (item) => item.status === "отключить"
      );
    } else if (activeState === "не оплачены") {
      filteredArray = newReduxArray.filter(
        (item) => item.status !== "отключить" && item.status !== "оплачено"
      );
    }
    setFilteredReduxArray(filteredArray);
  }, [activeState, newReduxArray]);
  //clicked-items------------------------------------------------------------
  const [clickedItems, setClickedItems] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const toggleClickItem = (index) => {
    if (clickedItems.includes(index)) {
      setClickedItems(clickedItems.filter((item) => item !== index));
    } else {
      setClickedItems([...clickedItems, index]);
    }
  };
  const clickedAllSelected = () => {
    if (allSelected) {
      setClickedItems([]);
    } else {
      const allIndexes = currentFilteredOrders.map((_, index) => index);
      setClickedItems(allIndexes);
    }
    setAllSelected(!allSelected);
  };
  //device-popup-------------------------------------------------
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const clickPopup = (index) => {
    setOpenPopupIndex(index === openPopupIndex ? null : index);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openPopupIndex !== null) {
        const popup = document.getElementById(`popup-${openPopupIndex}`);
        if (popup && !popup.contains(event.target)) {
          setOpenPopupIndex(null);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openPopupIndex]);

  //getStatus-----------------------------------------------------
  function getStatus(itemStatus) {
    switch (itemStatus) {
      case "оплачено":
        return d.status;
      case "отключить":
        return d.statusSwitchOff;
      default:
        return d.statusNotPaid;
    }
  }

  return (
    <div className={d.wrapper}>
      <div className={d.devicesContent__header}>
        <th className={d.tableSelect} onClick={clickedAllSelected}>
          {allSelected ? birdImg : ""}
        </th>
        <HeadContent />
      </div>
      {filteredReduxArray &&
        filteredReduxArray.map((item, index) => (
          <div className={d.devicesData__content} key={index}>
            <div className={d.contentRow}>
              <div
                className={d.selected}
                onClick={() => {
                  toggleClickItem(index);
                }}
              >
                {clickedItems.includes(index) ? birdImg : ""}
              </div>
              <div className={d.contentRowCell}>{item.attributes.title}</div>
              <div className={d.contentRowCell}>
                <span>T17-MSC2-00219</span>
                <span>16.02.2024</span>
              </div>
              <div className={d.contentRowCell}>
                <span>{item.attributes.ths}</span>
                <span>27,372</span>
              </div>
              <div className={d.contentRowCell}>
                <span>Tue Dec 24 22:12:07</span>
                <span>UTC 2019</span>
              </div>
              <div className={d.contentRowCell}>
                <div className={d.poolLine}>
                  <span className={d.dotDark}> </span>
                  <div className={d.poolInfo}>
                    <span>btc.trustpool.com:443</span>
                    <span>burdukovskij1974.5E027AD0EB82</span>
                  </div>
                </div>
                <div className={d.poolLine}>
                  <span className={d.dotMiddle}> </span>
                  <div className={d.poolInfo}>
                    <span>btc.trustpool.com:443</span>
                    <span>burdukovskij1974.5E027AD0EB82</span>
                  </div>
                </div>
                <div className={d.poolLine}>
                  <span className={d.dotLight}> </span>
                  <div className={d.poolInfo}>
                    <span>btc.trustpool.com:443</span>
                    <span>burdukovskij1974.5E027AD0EB82</span>
                  </div>
                </div>
              </div>
              <div className={d.contentRowCell}>14 дней</div>
              <div className={d.contentRowCell}>
                <div className={getStatus(item.status)}>
                  {item.status === "оплачено" && <span>оплачено</span>}
                  {item.status === "отключить" && <span>отключено</span>}
                  {item.status !== "оплачено" &&
                    item.status !== "отключить" && (
                      <span>требуется оплата</span>
                    )}
                </div>
              </div>
              <div
                className={d.selected}
                onClick={() => {
                  clickPopup(index);
                }}
              >
                ...
                {openPopupIndex === index && (
                  <div id={`popup-${index}`}>
                    <DevicePopup itemId={item.id} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default DevicesContent;
