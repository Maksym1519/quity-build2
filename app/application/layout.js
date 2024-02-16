"use client";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useAppSelector } from "@/lib/hooks";
import { useState } from "react";
import { popupInfo } from "@/lib/features/hostingApplication/hostingApplicationSlice";
import Popup from "./popup/popup";

export default function ApplicationLayout({ children }) {
  const popupData = useAppSelector(popupInfo)
   //showpopup--------------------------------------------------------
   const [showPopup, setShowPopup] = useState(false);
   const clickShowPopup = () => {
     setShowPopup(true)
   }
   const clickHidePopup = () => {
     setShowPopup(false)
   }
  return (
    <>
      <div className={popupData ? "applicationOpacity" : " "}>
        <Header />
        {children}
        <Footer />
      </div>
      {popupData && <Popup  close={clickHidePopup}/>}
    </>
  );
}
