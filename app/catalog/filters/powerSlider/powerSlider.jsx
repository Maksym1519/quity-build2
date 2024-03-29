"use client";
import f from "../filters.module.scss";
import ReactSlider from "react-slider";
import { useState, useEffect } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setPower } from "@/lib/features/catalog/filtrationSlice";

const PowerSlider = () => {
  const [value, setValue] = useState([0, 3600]);
  const handleSliderChange = (newValue) => {
    setValue(newValue)
  }
  //set-data-to-redux-------------------------------
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setPower(value))
  },[value])
  return (
    <>
      <div className={f.price__wrapper}>
        <h4 className={f.priceTitle}>Энергопотребление, W</h4>
        <div className={f.priceValue__wrapper}>
          <div className={f.priceValue}>{value[0]}</div>
          <span className={f.priceValueLine}>-</span>
          <div className={f.priceValue}>{value[1]}</div>
        </div>
        <ReactSlider
          className={f.slider}
          min={0}
          max={3600}
          thumbClassName={f.thumb}
          trackClassName="track"
          defaultValue={[0, 3600]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          pearling
          minDistance={300}
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
};
export default PowerSlider;
