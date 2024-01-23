"use client";
import f from "../filters.module.scss";
import ReactSlider from "react-slider";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { setHashRate } from "@/lib/features/catalog/filtrationSlice";
import { hashRateInfo } from "@/lib/features/catalog/filtrationSlice";

const HashrateSlider = () => {
  const [value, setValue] = useState([2, 110]);
  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };
  //set-hashRate-to-redux--------------------------------------
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setHashRate(value));
  }, [value]);
  return (
    <>
      <div className={f.price__wrapper}>
        <h4 className={f.priceTitle}>Значение хешрейта, TH/s</h4>
        <div className={f.priceValue__wrapper}>
          <div className={f.priceValue}>{value[0]}</div>
          <span className={f.priceValueLine}>-</span>
          <div className={f.priceValue}>{value[1]}</div>
        </div>
        <ReactSlider
          className={f.slider}
          min={2}
          max={110}
          thumbClassName={f.thumb}
          trackClassName="track"
          defaultValue={[2, 110]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          pearling
          minDistance={5}
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
};
export default HashrateSlider;
