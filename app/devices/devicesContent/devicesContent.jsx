"use client";
import d from "./devicesContent.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import HeadContent from "./headContent";
import { useState } from "react";
import { useSelector } from "react-redux";


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
  const currentUserId = localStorage.getItem("id");
  const reduxData = useSelector((state) => state.order.orders);
  const filteredCurrentArray = reduxData.filter((item) => item !== null);

  const uniqueOrders = (orders) => {
    const uniqueIds = new Set();
    return orders.filter((order) => {
      if (order.id && !uniqueIds.has(order.id)) {
        uniqueIds.add(order.id);
        return true;
      }
      return false;
    });
  };

  const currentFilteredOrders = uniqueOrders(
    filteredCurrentArray.filter((order) => order.userId === currentUserId)
  );
  //clicked-items------------------------------------------------------------
  const [clickedItems, setClickedItems] = useState([]);
  const toggleClickItem = (index) => {
    if (clickedItems.includes(index)) {
      setClickedItems(clickedItems.filter((item) => item !== index))
    } else {
      setClickedItems([...clickedItems, index]);
      }
     
  }


  return (
    <div className={d.wrapper}>
      <div className={d.devicesContent__header}>
        <th className={d.tableSelect}></th>
        <HeadContent />
      </div>
      {currentFilteredOrders &&
        currentFilteredOrders.map((item, index) => (
          <div className={d.devicesData__content} key={index}>
            <div className={d.contentRow}>
              <div className={d.selected} onClick={() => toggleClickItem(index)}>{clickedItems.includes(index)  ? birdImg : ""}</div>
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
                <div className={d.status}>активен</div>
              </div>
              <div className={d.selected}></div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default DevicesContent;
