"use client";
import { useState, useEffect } from "react";
import pp from "./profilePageNavigation.module.scss";
import Link from "next/link";
import profileStateSlice from "@/lib/features/profileStateSlice";

const ProfilePageNavigation = (props) => {
  const [activeIndex, setActiveIndex] = useState(true);
  useEffect(() => {
    setActiveIndex(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveIndex(index);
  };
 
  return (
    <div className={pp.wrapper}>
        <div
          className={activeIndex === 0 ? pp.active : pp.nonActive}
          onClick={() => {handleSwitcher(0),props.showProfile()}}
        >
         Личные данные
        </div>
       
        <div className={activeIndex === 1 ? pp.active : pp.nonActive} onClick={() => {handleSwitcher(1);props.showAdresses()}}>
        Мои адреса
        </div>
      
       <div className={activeIndex === 2 ? pp.active : pp.nonActive} onClick={() => {handleSwitcher(2),props.showSecurity()}}>
        Настройки безопасности
        </div>
      
    </div>
  );
};

export default ProfilePageNavigation;
