"use client";
import m from './myApplication.module.scss';
import Navigation from '../navigation/navigation';
import ApplicationData from '../applicationData/applicationData';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPopup } from '@/lib/features/hostingApplication/hostingApplicationSlice';


const MyApplication = () => {
    //showpopup--------------------------------------------------------
  const [showPopup, setShowPopup] = useState(false);
  const clickShowPopup = () => {
    setShowPopup(true)
  }
  const clickHidePopup = () => {
    setShowPopup(false)
  }
 
  //setPopupState-----------------------------------------------------
  const dispatch = useDispatch()
  const setPopupState = () => {
    dispatch(setPopup(true))
  }

     return (
        <div className={m.myApplication__wrapper}>
           <div className={m.myApplication__header}>
              <h2 className={m.mainTitle}>Мои заявки</h2>
              <button type='button' className={m.addApplication} onClick={() => {setPopupState();clickShowPopup()}}>Добавить устройство</button>
           </div>
           <Navigation />
           <ApplicationData close={clickHidePopup} show={showPopup}/>
        </div>
    )
}

export default MyApplication;