"use client";
import e from "../equipment.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { asicInfo } from "@/lib/features/shopCatalogSlice";
import { AsicData } from "@/lib/features/shopCatalogSlice";
import Loading from "@/app/components/loading/loading";
import ProfitLink from "../profitLink/profitLink";
import { presenceArrayInfo } from "@/lib/features/catalog/filtrationSlice";
import { FiltrationPresenceData } from "@/lib/features/catalog/filtrationSlice";
import { presenceInfo } from "@/lib/features/catalog/filtrationSlice";
import { newInfo } from "@/lib/features/catalog/filtrationSlice";
import { usedInfo } from "@/lib/features/catalog/filtrationSlice";
import { priceInfo } from "@/lib/features/catalog/filtrationSlice";
import { hashRateInfo } from "@/lib/features/catalog/filtrationSlice";
import { profitInfo } from "@/lib/features/catalog/filtrationSlice";
import { powerInfo } from "@/lib/features/catalog/filtrationSlice";
import { makerInfo } from "@/lib/features/catalog/filtrationSlice";
import { setInfo } from "@/lib/features/card/cardSlice";
import { setCard } from "@/lib/features/card/cardSlice";


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
  const [popularityAsicArray, setPopularityAsicArray] = useState();
  useEffect(() => {
    if (asicInfoServer && asicInfoServer !== null) {
      const sortedArray = [...asicInfoServer];
      setPopularityAsicArray(sortedArray);
      sortedArray.sort((a, b) => {
        if (
          a.attributes.popularity === "Хит" &&
          b.attributes.popularity === "Новинка"
        ) {
          return -1;
        } else if (
          a.attributes.popularity === "Новинка" &&
          b.attributes.popularity === "Хит"
        ) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }, [asicInfoServer]);
  //sorting-by-price-from-cheap-to-cost----------------------------
  const [cheapAsicArray, setCheapAsicArray] = useState();
  useEffect(() => {
    if (asicInfoServer && asicInfoServer !== null) {
      const sortedArray = [...asicInfoServer];
      setCheapAsicArray(sortedArray);
      sortedArray.sort((a, b) => {
        return parseFloat(a.attributes.price) - parseFloat(b.attributes.price);
      });
    }
  }, [asicInfoServer]);
  //sorting-by-price-from-cost-to-cheap----------------------------
  const [costAsicArray, setCostAsicArray] = useState();
  useEffect(() => {
    if (asicInfoServer && asicInfoServer !== null) {
      const sortedArray = [...asicInfoServer];
      setCostAsicArray(sortedArray);
      sortedArray.sort((a, b) => {
        return parseFloat(b.attributes.price) - parseFloat(a.attributes.price);
      });
    }
  }, [asicInfoServer]);
  //get-data-from-filterSlice------------------------------------------
  const arrayFromRedux = useAppSelector(presenceArrayInfo);
  const presenceStateRedux = useAppSelector(presenceInfo);
  const newStateRedux = useAppSelector(newInfo);
  const usedStateRedux = useAppSelector(usedInfo);
  const priceStateRedux = useAppSelector(priceInfo);
  const hashRateStateRedux = useAppSelector(hashRateInfo);
  const profitStateRedux = useAppSelector(profitInfo);
  const powerStateRedux = useAppSelector(powerInfo);
  const makerStateRedux = useAppSelector(makerInfo);
  //---------------------------------------------------------
  const [sortedArrayRedux, setSortedArrayRedux] = useState()
  useEffect(() => {
    if (arrayFromRedux && arrayFromRedux !== null) {
      const sortedArray = [...arrayFromRedux];
      setSortedArrayRedux(sortedArray)
      sortedArray.sort((a, b) => {
        if (
          a.attributes.popularity === "Хит" &&
          b.attributes.popularity === "Новинка"
        ) {
          return -1;
        } else if (
          a.attributes.popularity === "Новинка" &&
          b.attributes.popularity === "Хит"
        ) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }, [arrayFromRedux]);
  
  const currentArray = arrayFromRedux ? sortedArrayRedux : popularityAsicArray;

  //commonArray--------------------------------------------------
  const commonArray = [
    currentArray,
    cheapAsicArray,
    costAsicArray,
    asicInfoServer,
  ];
//-get-card-info-----------------------------------------------------
const dispatch = useAppDispatch()
const clickCardInfo = (info) => {
  dispatch(setInfo(info))
  dispatch(setCard())
}

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
          <FiltrationPresenceData />
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
              commonArray[activeIndex]?.map((item, index) => (
                <Link href={"/card"}>
                <div className={e.item} key={index} onClick={() => clickCardInfo(item)}>
                  <div className={e.image__wrapper}>
                    <Image
                      src={item.attributes.itemImage.data.attributes.url}
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
</Link>
                 ))}

            {asicInfoServer && <ProfitLink />}
          </div>
        </>
      )}
    </div>
  );
};
export default Asic;
