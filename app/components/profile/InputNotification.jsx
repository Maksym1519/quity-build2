"use client";
import pd from "../../profile/personalData/personalData.module.scss";
import { useState } from "react";

const InputNotification = () => {
    const [notification,setNotification] = useState()
    const toggleNotification = () => {
        setNotification(!notification)
    }
  return (
    <div className={pd.radioWrapper} onClick={toggleNotification}>
      <input
        type="radio"
        className={pd.inputNotification}
        name="notification"
      />
{!notification &&
      <div className={pd.whiteCircle}></div>
}
{notification &&
      <div className={pd.blueCircle}></div>
}
    </div>
  );
};

export default InputNotification;
