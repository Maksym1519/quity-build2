"use client";
import { useState } from "react";
import m from "./myAdresses.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";
import addressesSlice from "@/lib/features/addressesSlice";

const MyAdresses = () => {
  const [addresses, setAddresses] = useState([]);
  const handleAddAddress = () => {
    setAddresses([...addresses, ""]);
  };
  const handleDeleteAddress = (index) => {
    const updatedAddresses = [...addresses];
    updatedAddresses.splice(index, 1);
    setAddresses(updatedAddresses);
  };
  return (
    <div className={m.wrapper}>
      <div className={m.blockHeader}>
        <h3 className={m.title}>Мои адреса</h3>
        <button className={m.addressButton} onClick={handleAddAddress}>
          Добавить адрес
        </button>
      </div>
      {addresses.map((address, index) => (
        <div className={m.addressItem__wrapper} key={index}>
          <div className={m.inputAddress}>
            <label htmlFor="address" className={m.inputLabel}>
              Адрес 1
            </label>
            <input type="text" className={m.input} name="address" />
            <div className={m.correct}>
              <Image src={Icones.edit} width={18} height={18} />
              <Image
                src={Icones.bucket}
                width={18}
                height={18}
                onClick={handleDeleteAddress}
              />
            </div>
          </div>
          <button className={m.addressItem__button}>Сохранить</button>
        </div>
      ))}
    </div>
  );
};

export default MyAdresses;
