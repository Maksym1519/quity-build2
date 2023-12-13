"use client";
import p from "./profile.module.scss";
//components-------------------------------------------------------
import {
  myAdresses,
  personalData,
  securitySettings,
} from "@/lib/features/profileStateSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import ProfilePageNavigation from "./ProfilePageNavigation";
import MyAdresses from "./myAdreses/MyAdresses";
import PersonalData from "./personalData/PersonalData";
import ProfileSecurity from "./profileSecurity/ProfileSecurity";


export default function Profile() {
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
          {currentComponent === "securitySettings" && <ProfileSecurity />}
          </main>
      </div>
    </div>
  );
}
