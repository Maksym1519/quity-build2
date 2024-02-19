"use client";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { popupInfo } from "@/lib/features/hostingApplication/hostingApplicationSlice";
import Popup from "./popup/popup";
import BuyConfirm from "./buyConfirm/byConfirm";
import ReportPopup from "./reportPopup/reportPopup";

export default function ApplicationLayout({ children }) {
  const popupData = useSelector(popupInfo)
  const buyPopup = useSelector((state) => state.hostingApplication.buyPopup)
  const reportPopup = useSelector((state) => state.hostingApplication.reportPopup)
   //showpopup--------------------------------------------------------
   const [showPopup, setShowPopup] = useState(false);
   const clickShowPopup = () => {
     setShowPopup(true)
   }
   const clickHidePopup = () => {
     setShowPopup(false)
   }
   //close-buypopup
  
  return (
    <>
      <div className={popupData || buyPopup || reportPopup ? "applicationOpacity" : " "}>
        <Header />
        {children}
        <Footer />
      </div>
      {popupData && <Popup  close={clickHidePopup}/>}
      {buyPopup && <BuyConfirm />}
      {reportPopup && <ReportPopup />}
    </>
  );
}
