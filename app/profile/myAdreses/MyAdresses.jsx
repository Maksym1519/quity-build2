"use client";
import { useState } from "react";
import m from "./myAdresses.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";

const MyAdresses = () => {
  return (
    <div className={m.wrapper}>
      <div className={m.blockHeader}>
        <h3 className={m.title}>Мои адреса</h3>
        <button className={m.addressButton}>Добавить адрес</button>
      </div>
      <div className={m.inputAddress}>
        <label htmlFor="address" className={m.inputLabel}>
          Адрес 1
        </label>
        <input type="text" className={m.input} name="address" />
        <div className={m.correct}>
          <Image src={Icones.edit} width={18} height={18}/>
          <Image src={Icones.bucket} width={18} height={18}/>
        </div>
      </div>
    </div>
  );
};

export default MyAdresses;
