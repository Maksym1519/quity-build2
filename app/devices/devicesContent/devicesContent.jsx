"use client";
import d from "./devicesContent.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import HeadContent from "./headContent";
import { useState } from "react";

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
 
  //--------------------------------------------------------------
  const [newReduxArray, setNewReduxArray] = useState();
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
  };
  return (
    <div className={d.wrapper}>
      <div className={d.devicesContent__header}>
        <th className={d.tableSelect} onClick={clickAllSelected}>
          {allSelected ? birdImg : "..."}
        </th>
        <HeadContent />
      </div>
    </div>
  );
};
export default DevicesContent;
