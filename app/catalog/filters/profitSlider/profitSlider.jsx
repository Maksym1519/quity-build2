"use client";
import f from "../filters.module.scss";
import ReactSlider from "react-slider";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setProfit } from "@/lib/features/catalog/filtrationSlice";

const ProfitSlider = () => {
  const [value, setValue] = useState([195, 1700]);
  const handleSliderChange = (newValue) => {
    setValue(newValue)
  }
  //set-data-to-redux---------------------------------
  const dispatch = useAppDispatch()
  useEffect(() => {
   dispatch(setProfit(value))
  },value)
  return (
    <>
      <div className={f.price__wrapper}>
        <h4 className={f.priceTitle}>Доходность, $/день</h4>
        <div className={f.priceValue__wrapper}>
          <div className={f.priceValue}>{value[0]}</div>
          <span className={f.priceValueLine}>-</span>
          <div className={f.priceValue}>{value[1]}</div>
        </div>
        <ReactSlider
          className={f.slider}
          min={195}
          max={1700}
          thumbClassName={f.thumb}
          trackClassName="track"
          defaultValue={[195, 1700]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          pearling
          minDistance={50}
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
};
export default ProfitSlider;
