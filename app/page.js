"use client";
import Link from "next/link";
import p from "../app/profile/profile.module.scss";
//components-------------------------------------------------------
import ProfilePageNavigation from "./profile/ProfilePageNavigation";
import PersonalData from "./profile/personalData/PersonalData";
import MyAdresses from "./profile/myAdreses/MyAdresses";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  personalData,
  myAdresses,
  securitySettings,
} from "@/lib/features/profileStateSlice";



export default function Home() {
   const dispatch = useAppDispatch()
  const currentComponent = useAppSelector(
    (state) => state.profileData.currentComponent
  );
  const handleProfileClick = () => {
    dispatch(personalData());
  };
  const handleAdressClick = () => {
    dispatch(myAdresses());
  };
  const handleSecurityClick = () => {
    dispatch(securitySettings());
  };
  return (
    <div className={p.wrapper}>
      <div className="container">
        <main className={p.main__wrapper}>
          <h2 className={p.title}>Мои профиль</h2>
          <ProfilePageNavigation showAdresses={handleAdressClick} showProfile={handleProfileClick} showSecurity={handleSecurityClick}/>
          {currentComponent === "personalData" && <PersonalData />}
          {currentComponent === "myAdresses" && <MyAdresses />}
        </main>
      </div>
    </div>
  );
}
