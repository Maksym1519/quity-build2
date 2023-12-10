"use client";
import pd from "./personalData.module.scss";
import { useState, useEffect } from "react";
import CalendarImage from "../../../public/Calendar.svg";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const Calendar = () => {
  const [date, setDate] = useState();
  const [showCalendar, setShowCalendar] = useState(false);
  const handleIconClick = () => {
    setShowCalendar(!showCalendar);
  };
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className={pd.input__wrapper}>
      <label htmlFor="birthday">Дата рождения</label>
      <input type="text" name="birthday" value={date} className={pd.inputBirthday}/>
      <Image
        src={CalendarImage}
        className={pd.calendar}
        onClick={handleIconClick}
        alt="calendar"
      />
      <DateTime input={true} timeFormat={false}/>
    </div>
  );
};
export default Calendar;
