"use client";
import f from "./filters.module.scss";
import PriceSlider from "./priceSlider/priceSlider";
import PaybackSlider from "./paybackSlider/paybackSlider";
import HashrateSlider from "./hashrateSlider/hashrateSlider";
import ProfitSlider from "./profitSlider/profitSlider";
import PowerSlider from "./powerSlider/powerSlider";
import Icones from "@/public/Data";
import Image from "next/image";
import Consultation from "./consultation/consultation";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPresence } from "@/lib/features/catalog/filtrationSlice";
import { FiltrationPresenceData } from "@/lib/features/catalog/filtrationSlice";
import { setNew } from "@/lib/features/catalog/filtrationSlice";

const Filters = () => {
  //filtration----------------------------------------------------------
  const [selectedFilters, setSelectedFilters] = useState({
    presence: false,
    conditions: {
      new: false,
      used: false,
    },
    maker: {
      canaan: false,
      bitmain: false,
      whatsminer: false,
      innosilicon: false,
    },
    algorithm: {
      blake2bSha3: false,
      daggerHashimoto: false,
      sha256: false,
      equihash: false,
    },
  });
  //set-data-for-filtration--------------------------------------------
  const dispatch = useAppDispatch();
  const clickPresence = () => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      presence: !prevFilters.presence,
    }));
    dispatch(setPresence(!selectedFilters.presence));
  };
  const clickNew = () => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      conditions: {
        new: !prevFilters.conditions.new,
      },
    }));
    dispatch(setNew(!selectedFilters.conditions.new))
  };
  const clickUsed = () => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      conditions: {
        used: !prevFilters.conditions.used,
      },
    }));
  };
  return (
    <div className={f.filters__wrapper}>
      <FiltrationPresenceData />
      <div className={f.filters__body}>
        {/* //presence--------------------------------------------------------------- */}
        <div className={f.presence__wrapper}>
          <div
            className={f.presenceInput}
            onClick={() => {
              clickPresence();
            }}
          >
            {selectedFilters.presence && (
              <Image
                src={Icones.filterBird}
                width={24}
                height={24}
                className={f.filterBird}
              />
            )}
          </div>
          <span className={f.inputLabel}>Товары в наличии</span>
        </div>
        {/* //conditions--------------------------------------------------------------- */}
        <div className={f.conditions__wrapper}>
          <h4 className={f.conditionsTitle}>Состояние</h4>
          <div className={f.conditionsItem}>
            <div className={f.conditionsnput} onClick={() => clickNew()}>
              {selectedFilters.conditions.new && (
                <Image
                  src={Icones.filterConditionIcon}
                  width={24}
                  height={24}
                  alt="icon"
                  className={f.conditionsIcon}
                />
              )}
            </div>
            <span className={f.conditionsLabel}>Новое</span>
          </div>
          <div className={f.conditionsItem}>
            <div className={f.conditionsnput} onClick={() => clickUsed()}>
            {selectedFilters.conditions.used && (
                <Image
                  src={Icones.filterConditionIcon}
                  width={24}
                  height={24}
                  alt="icon"
                  className={f.conditionsIcon}
                />
              )}
            </div>
            <span className={f.conditionsLabel}>Б/у</span>
          </div>
        </div>
        {/* //sliders------------------------------------------------------------------ */}
        <PriceSlider />
        <PaybackSlider />
        <HashrateSlider />
        <ProfitSlider />
        <PowerSlider />
        {/* //maker----------------------------------------------------------------------- */}
        <div className={f.maker__wrapper}>
          <h4 className={f.makerTitle}>Производитель</h4>
          <div className={f.makerItem}>
            <div className={f.makerInput}></div>
            <span className={f.inputLabel}>Canaan</span>
          </div>
          <div className={f.makerItem}>
            <div className={f.makerInput}></div>
            <span className={f.inputLabel}>Bitmain</span>
          </div>
          <div className={f.makerItem}>
            <div className={f.makerInput}></div>
            <span className={f.inputLabel}>Whatsminer</span>
          </div>
          <div className={f.makerItem}>
            <div className={f.makerInput}></div>
            <span className={f.inputLabel}>Innosilicon</span>
          </div>
        </div>
        {/* //algorithm----------------------------------------------------------------------- */}
        <div className={f.algorithm__wrapper}>
          <h4 className={f.algorithmTitle}>Алгоритм</h4>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>Blake2B+SHA3</span>
            <Image src={Icones.filterAttention} width={20} height={20} />
          </div>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>DaggerHashimoto</span>
            <Image src={Icones.filterAttention} width={20} height={20} />
          </div>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>SHA256</span>
            <Image src={Icones.filterAttention} width={20} height={20} />
          </div>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>Equihash</span>
            <Image src={Icones.filterAttention} width={20} height={20} />
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
};
export default Filters;
