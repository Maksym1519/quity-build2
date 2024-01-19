"use client";
import f from "../filters.module.scss";
import ReactSlider from "react-slider";
import { useState } from "react";

const ProfitSlider = () => {
  const [value, setValue] = useState([195, 1700]);
  const handleSliderChange = (newValue) => {
    setValue(newValue)
  }
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
