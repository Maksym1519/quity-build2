"use client";
import p from "../priceList.module.scss";
import ReactSlider from "react-slider";
import { useState } from "react";

const HandSlider = () => {
 const [sliderValue, setSliderValue] = useState(0)
 const [minAmount, setMinAmount] = useState(0);
 const [maxAmount, setMaxAmount] = useState(200);
 const handleSliderAmountChange = (newValue) => {
   setSliderValue(newValue);
   setMinAmount([0]);
   setMaxAmount([1]);
 }



  return (
    <div className={p.slider__wrapper}>
        <span className={p.amount}>{sliderValue} шт</span>
      <ReactSlider
        // value={sliderValue}
        onChange={handleSliderAmountChange}
        min={0}
        max={200}
        className={p.slider}
        thumbClassName={p.thumb}
        trackClassName="track"
        />
        <div className={p.scale}>
            <span className={p.scaleNumber}>1 шт</span>
            <span className={p.scaleNumber}>200 шт</span>
        </div>
    </div>
  );
};
export default HandSlider;
