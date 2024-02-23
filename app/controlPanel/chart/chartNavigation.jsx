"use client";
import c from "./chart.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveState } from "@/lib/features/chart/chartSlice";

const ChartNavigation = () => {
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0);
  const clickActiveIndex = (index) => {
    setActiveIndex(index);
    dispatch(setActiveState(index))
  };
  //------------------------------------------------------
  const value = ["1Д", "1Н", "3М", "6М", "1Г", "ЗА ВСЕ ВРЕМЯ"];
  return (
    <div className={c.chartNavigation__wrapper}>
      {value.map((item, index) => (
        <div className={activeIndex === index ? c.activeItem : c.item} onClick={() => clickActiveIndex(index)}>{value[index]}</div>
      ))}
    </div>
  );
};
export default ChartNavigation;
