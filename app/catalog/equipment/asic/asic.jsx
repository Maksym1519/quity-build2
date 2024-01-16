"use client";
import e from "../equipment.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { asicInfo } from "@/lib/features/shopCatalogSlice";
import { AsicData } from "@/lib/features/shopCatalogSlice";
import Loading from "@/app/components/loading/loading";

const Asic = () => {
  //is-loading-?----------------------------------------------------
  const [isLoading, setIsLoading] = useState(true);
  //active-index-----------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(0);
  const switchIndex = (index) => {
    setActiveIndex(index);
  };
  //get-data-from-redux----------------------------------------
  const [asicInfoServer, setAsicInfoServer] = useState();
  const asicInfoRedux = useAppSelector(asicInfo);
  useEffect(() => {
    if (asicInfoRedux && asicInfoRedux !== null) {
      setAsicInfoServer(asicInfoRedux);
    }
  }, [asicInfoRedux]);
  useEffect(() => {
    if (asicInfoServer && asicInfoServer !== null) {
      setIsLoading(false);
    }
  }, [asicInfoServer]);
  //sorting-by-popularity---------------------------------------------------
  const [sortedPopularity, setSortedPopularity] = useState();
  async function comparePopularity(a, b) {
    if (
      a.popularity === "Хит" &&
      b.popularity === "Новинка"
    ) {
      return -1;
    } else if (
      a.popularity === "Новинка" &&
      b.popularity === "Хит"
    ) {
      return 1;
    } else {
      return 0;
    }
  }
  useEffect(() => {
    if (asicInfoServer && asicInfoServer !== null) {
      const sortedArray = [...asicInfoServer]; // Create a new array
      sortedArray.sort(comparePopularity);
      setSortedPopularity(sortedArray);
    }
  }, [asicInfoServer]);
  console.log(sortedPopularity)

  return (
    <div className={e.equipment__wrapper}>
      {isLoading ? (
        <>
          <Loading />
          <AsicData />
        </>
      ) : (
        <>
          <AsicData />
          <div className={e.equipment__sorting}>
            <div
              className={
                activeIndex === 0 ? e.sortingItem__active : e.sortingItem
              }
              onClick={() => {
                switchIndex(0);
              }}
            >
              Сначала популярные
            </div>
            <div
              className={
                activeIndex === 1 ? e.sortingItem__active : e.sortingItem
              }
              onClick={() => {
                switchIndex(1);
              }}
            >
              Сначала дешевле
            </div>
            <div
              className={
                activeIndex === 2 ? e.sortingItem__active : e.sortingItem
              }
              onClick={() => {
                switchIndex(2);
              }}
            >
              Сначала дороже
            </div>
            <div
              className={
                activeIndex === 3 ? e.sortingItem__active : e.sortingItem
              }
              onClick={() => {
                switchIndex(3);
              }}
            >
              С высоким рейтингом
            </div>
          </div>
          <div className={e.catalogEquipment}>
            {asicInfoServer &&
              sortedPopularity.map((item, index) => (
                <div className={e.item} key={index}>
                  <div className={e.image__wrapper}>
                    <Image
                      src={item.attributes.goodImage.data.attributes.url}
                      width={182}
                      height={168}
                      className={e.minerImage}
                      alt="icon"
                    />
                  </div>
                  <div className={e.description}>
                    <span className={e.presence}>
                      {item.attributes.presence}
                    </span>
                    <span className={e.title}>{item.attributes.title}</span>
                    <div className={e.parameters}>
                      <div className={e.parameters__item}>
                        <span className={e.numbers}>{item.attributes.ths}</span>
                        <span className={e.text}>TH/s</span>
                      </div>
                      <div className={e.parameters__item}>
                        <span className={e.numbers}>{item.attributes.w}</span>
                        <span className={e.text}>W</span>
                      </div>
                      <div className={e.parameters__item}>
                        <span className={e.numbers}>{item.attributes.jth}</span>
                        <span className={e.text}>J/TH</span>
                      </div>
                    </div>
                    <div className={e.price__wrapper}>
                      <span className={e.price}>{item.attributes.price}</span>
                      <span className={e.priceIcon}>$</span>
                    </div>
                  </div>
                  <span
                    className={
                      item.attributes.popularity === "Новинка"
                        ? e.label
                        : e.labelHit
                    }
                  >
                    {item.attributes.popularity}
                  </span>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Asic;
