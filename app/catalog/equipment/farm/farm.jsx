"use client";
import e from '../equipment.module.scss';
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { farmInfo } from "@/lib/features/shopCatalogSlice";
import { FarmData } from "@/lib/features/shopCatalogSlice";
import ProfitLink from '../profitLink/profitLink';


const Farm = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  const switchIndex = (index) => {
    setActiveIndex(index);
  };
   //get-data-from-redux----------------------------------------
   const [farmInfoServer, setFarmInfoServer] = useState();
   const farmInfoRedux = useAppSelector(farmInfo);
   useEffect(() => {
     if (farmInfoRedux && farmInfoRedux !== null) {
       setFarmInfoServer(farmInfoRedux);
       }
   }, [farmInfoRedux]);
     //sorting-by-popularity---------------------------------------------------
  const [popularityFarmArray, setPopularityFarmArray] = useState();
  useEffect(() => {
    if (farmInfoServer && farmInfoServer !== null) {
      const sortedArray = [...farmInfoServer];
      setPopularityFarmArray(sortedArray);
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
  }, [farmInfoServer]);
//sorting-by-price-from-cheap-to-cost----------------------------
const [cheapFarmArray, setCheapFarmArray] = useState();
  useEffect(() => {
    if (farmInfoServer && farmInfoServer !== null) {
      const sortedArray = [...farmInfoServer];
      setCheapFarmArray(sortedArray);
      sortedArray.sort((a, b) => {
      return parseFloat(a.attributes.price) - parseFloat(b.attributes.price);
      });
    }
  }, [farmInfoServer]);
//sorting-by-price-from-cost-to-cheap----------------------------
const [costFarmArray, setCostFarmArray] = useState();
  useEffect(() => {
    if (farmInfoServer && farmInfoServer !== null) {
      const sortedArray = [...farmInfoServer];
      setCostFarmArray(sortedArray);
      sortedArray.sort((a, b) => {
      return parseFloat(b.attributes.price) - parseFloat(a.attributes.price);
      });
    }
  }, [farmInfoServer]);
 //commonArray--------------------------------------------------
const commonArray = [popularityFarmArray,cheapFarmArray,costFarmArray,farmInfoServer]
 
    return (
        <div className={e.equipment__wrapper}>
        <FarmData />
        <div className={e.equipment__sorting}>
          <div
            className={activeIndex === 0 ? e.sortingItem__active : e.sortingItem}
            onClick={() => {
              switchIndex(0);
            }}
          >
            Сначала популярные
          </div>
          <div
            className={activeIndex === 1 ? e.sortingItem__active : e.sortingItem}
            onClick={() => {
              switchIndex(1);
            }}
          >
            Сначала дешевле
          </div>
          <div
            className={activeIndex === 2 ? e.sortingItem__active : e.sortingItem}
            onClick={() => {
              switchIndex(2);
            }}
          >
            Сначала дороже
          </div>
          <div
            className={activeIndex === 3 ? e.sortingItem__active : e.sortingItem}
            onClick={() => {
              switchIndex(3);
            }}
          >
            С высоким рейтингом
          </div>
        </div>
        <div className={e.catalogEquipment}>
          {farmInfoServer &&
            commonArray[activeIndex]?.map((item, index) => (
              <div className={e.item} key={index}>
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
                  <span className={e.presence}>{item.attributes.presence}</span>
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
            {farmInfoServer && <ProfitLink />}
        </div>
      </div>
    )
}
export default Farm;