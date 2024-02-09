"use client";
import c from "./callTime.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useState } from "react";

const CallTime = () => {
  const [formData, setFormData] = useState({
    date: null,
    time: null,
  });

  const handleDateChange = (newDate) => {
    const formatedDate = newDate.toDate().toLocaleDateString();
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: formatedDate,
    }));
  };
  const handleTimeChange = (newTime) => {
    const formattedTime = newTime.format("HH:mm");
    setFormData((prevFormData) => ({
      ...prevFormData,
      time: formattedTime,
    }));
  };

  //showCalendar----------------------------------------------------------
  const [showCalendar, setShowCalendar] = useState(false);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };
  //showTime---------------------------------------------------------------------
  const [showTimer, setShowTimer] = useState(false);
  const toggleTimer = () => {
    setShowTimer(!showTimer);
  };
  //activeIndex-------------------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(null);
  const clickActiveIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={c.inputs__wrapper}>
      <div
        className={
          activeIndex === 0 ? c.input__wrapper_active : c.input__wrapper
        }
        onClick={() => clickActiveIndex(0)}
      >
        <input
          type="text"
          className={c.input}
          name="date"
          value={formData.date}
        />
        <Image
          src={Icones.calendar}
          width={24}
          height={24}
          className={c.calendarImg}
          alt="calendar"
          onClick={toggleCalendar}
        />
        {showCalendar && (
          <DateTime
            input={false}
            timeFormat={false}
            onChange={(e) => handleDateChange(e)}
            className={c.calendar}
          />
        )}
      </div>
      {/* //----------------------------------------------------------------- */}
      <div
        className={
          activeIndex === 1 ? c.input__wrapper_active : c.input__wrapper 
        }
        onClick={() => clickActiveIndex(1)}
      >
        <input
          type="text"
          className={c.input}
          name="date"
          value={formData.time}
        />
        <Image
          src={Icones.timeIconBlog}
          width={24}
          height={24}
          className={c.calendarImg}
          alt="calendar"
          onClick={toggleTimer}
        />
        {showTimer && (
          <DateTime
            input={false}
            dateFormat={false}
            timeFormat="HH:mm"
            onChange={(e) => handleTimeChange(e)}
            className={c.calendar}
          />
        )}
      </div>
      {/* //----------------------------------------------------------------- */}
      <div
        className={
          activeIndex === 2 ? c.input__wrapper_active : c.input__wrapper 
        }
        onClick={() => clickActiveIndex(2)}
      >
        <input
          type="text"
          className={c.input}
          name="date"
          />
        В ближайшее время
      </div>
    </div>
  );
};
export default CallTime;
