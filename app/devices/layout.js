"use client";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { popupInfo } from "@/lib/features/hostingApplication/hostingApplicationSlice";
import Popup from "../application/popup/popup";;
import BuyConfirm from "../application/buyConfirm/byConfirm";;
import ReportPopup from "../application/reportPopup/reportPopup";
import { setCloseAside } from "@/lib/features/devices/devicesSlice";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


export default function BlogLayout({ children }) {
  const popupData = useSelector(popupInfo);
  const buyPopup = useSelector((state) => state.hostingApplication.buyPopup);
  const reportPopup = useSelector(
    (state) => state.hostingApplication.reportPopup
  );
  //showpopup--------------------------------------------------------
  const [showPopup, setShowPopup] = useState(false);
  
  const clickHidePopup = () => {
    setShowPopup(false);
  };
  //close-popupAside--------------------------------
  const dispatch = useDispatch();
  const closePopupAside = () => {
    dispatch(setCloseAside(false))
  }


  return (
    <>
      <div
        className={
          popupData || buyPopup || reportPopup ? "applicationOpacity" : " "
        }
       >
        <Header />
        {children }
        <Footer />
      </div>
      {popupData && <Popup  close={clickHidePopup}/>}
      {buyPopup && <BuyConfirm />}
      {reportPopup && <ReportPopup />}
    </>
  );
}
