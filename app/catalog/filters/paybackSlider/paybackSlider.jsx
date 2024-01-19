"use client";
import f from "../filters.module.scss";
import ReactSlider from "react-slider";
import { useState } from "react";

const PaybackSlider = () => {
  const [value, setValue] = useState([1, 18]);
  const handleSliderChange = (newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <div className={f.price__wrapper}>
        <h4 className={f.priceTitle}>Окупаемость, месяц</h4>
        <div className={f.priceValue__wrapper}>
          <div className={f.priceValue}>{value[0]}</div>
          <span className={f.priceValueLine}>-</span>
          <div className={f.priceValue}>{value[1]}</div>
        </div>
        <ReactSlider
          className={f.slider}
          min={0}
          max={18}
          thumbClassName={f.thumb}
          trackClassName="track"
          defaultValue={[1, 18]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          pearling
          minDistance={1}
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
};
export default PaybackSlider;
