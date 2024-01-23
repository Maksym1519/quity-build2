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
import { setUsed } from "@/lib/features/catalog/filtrationSlice";
import { setMaker } from "@/lib/features/catalog/filtrationSlice";

const Filters = () => {
  //filtration----------------------------------------------------------
  const [selectedFilters, setSelectedFilters] = useState({
    presence: null,
    new: null,
    used: null,
    maker: {
      canaan: null,
      bitmain: null,
      whatsminer: null,
      innosilicon: null,
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
    setSelectedFilters((prevFilters) => {
      const newPresence =
        prevFilters.presence === "В наличии" ? null : "В наличии";
      dispatch(setPresence(newPresence));
      return {
        ...prevFilters,
        presence: newPresence,
      };
    });
  };

  const clickNew = () => {
    setSelectedFilters((prevFilters) => {
      const newNew = prevFilters.new === "new" ? null : "new";
      dispatch(setNew(newNew));
      return {
        ...prevFilters,
        new: newNew,
      };
    });
  };
  const clickUsed = () => {
    setSelectedFilters((prevFilters) => {
      const newClicked = prevFilters.used === "used" ? null : "used";
      dispatch(setUsed(newClicked));
      return {
        ...prevFilters,
        used: newClicked,
      };
    });
  };

  const clickMaker = (maker) => {
    setSelectedFilters((prevFilters) => {
      const newMakerState = { ...prevFilters.maker };
      newMakerState[maker] = !prevFilters.maker[maker];
      const selectedMakers = Object.keys(newMakerState).filter(
        (maker) => newMakerState[maker]
      );
      dispatch(setMaker(selectedMakers));
      return {
        ...prevFilters,
        maker: newMakerState,
      };
    });
  };
  

  const equipmentMaker = ["Canaan", "Bitmain", "Whatsminer", "Innosilicon"];

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
              {selectedFilters.new && (
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
              {selectedFilters.used && (
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
          {equipmentMaker.map((maker, index) => (
            <div
              className={f.makerItem}
              key={index}
              onClick={() => clickMaker(maker)}
            >
              <div className={f.makerInput}>
                {selectedFilters.maker && selectedFilters.maker[maker] && (
                  <Image
                    src={Icones.filterBird}
                    width={24}
                    height={24}
                    className={f.makerIcon}
                  />
                )}
              </div>
              <span className={f.inputLabel}>{maker}</span>
            </div>
          ))}
        </div>
        {/* //algorithm----------------------------------------------------------------------- */}
        <div className={f.algorithm__wrapper}>
          <h4 className={f.algorithmTitle}>Алгоритм</h4>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>Blake2B+SHA3</span>
            <Image
              src={Icones.filterAttention}
              width={20}
              height={20}
              alt="icon"
            />
          </div>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>DaggerHashimoto</span>
            <Image
              src={Icones.filterAttention}
              width={20}
              height={20}
              alt="icon"
            />
          </div>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>SHA256</span>
            <Image
              src={Icones.filterAttention}
              width={20}
              height={20}
              alt="icon"
            />
          </div>
          <div className={f.algorithmItem}>
            <div className={f.algorithmInput}></div>
            <span className={f.inputLabel}>Equihash</span>
            <Image
              src={Icones.filterAttention}
              width={20}
              height={20}
              alt="icon"
            />
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  );
};
export default Filters;
