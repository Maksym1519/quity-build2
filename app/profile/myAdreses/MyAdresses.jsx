"use client";
import { useState } from "react";
import m from "./myAdresses.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";
import addressesSlice from "@/lib/features/addressesSlice";
import axios from "axios";
import { getId } from "@/lib/features/getIdSlice";
import { useAppSelector } from "@/lib/hooks";
import { useSelector } from "react-redux";
import { selectData } from "@/lib/features/getIdSlice";
import { selectRegistartionInfo } from "@/lib/features/registrationSlice";

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
  //localsrorage----------------------------------------------
  const dataStorage = useSelector((state) => state.localStorage.value)
  
  //get-id-from-redux---------------------------------------------------------
  const profileId = useAppSelector(selectRegistartionInfo)
  console.log(profileId)
  //add-addresses-------------------------------------------------------------
  const [formData, setFormData] = useState({
    address: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  async function postAddress(e) {
    e.preventDefault()
    const requestData = {
      data: {
        address: formData.address
      }
    }
    try {
      const response = await axios.put(
        `https://quitystrapi.onrender.com/api/profiles/${profileId}`,requestData
      );
    } catch (error) {
      console.error("post address is failed");
    }
  }
  
  
  return (
    <div className={m.wrapper}>
      <div className={m.blockHeader}>
        <h3 className={m.title}>Мои адреса</h3>
        <button className={m.addressButton} onClick={handleAddAddress}>
          Добавить адрес
        </button>
      </div>
      <form onSubmit={postAddress}>
      {addresses.map((address, index) => (
        <div className={m.addressItem__wrapper} key={index}>
          <div className={m.inputAddress}>
            <label htmlFor="address" className={m.inputLabel}>
              Адрес {index + 1}
            </label>
            <input
              type="text"
              className={m.input}
              name="address"
              onChange={(e) => handleChange(e)}
            />
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
          <button className={m.addressItem__button} type="submit">Сохранить</button>
        </div>
      ))}
</form>
    </div>
  );
};

export default MyAdresses;
