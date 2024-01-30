"use client";
import c from "./cardInfo.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { cardInfo } from "@/lib/features/card/cardSlice";
import { addToBucket } from "@/lib/features/card/cardSlice";
import { setClickBucket } from "@/lib/features/card/cardSlice";

const CardInfo = () => {
  //bucket/counter---------------------------------------
  const [bucket, setBucket] = useState(true);
  const toglleBucket = () => {
    setBucket(!bucket);
  };
  //get-data-from-redux---------------------------------
  const reduxInfo = useAppSelector(cardInfo);
  //payback-------------------------------------
  const [payback, setPayback] = useState();
  useEffect(() => {
    if (reduxInfo && reduxInfo !== null) {
      const price = parseFloat(reduxInfo.attributes.price.replace(/\s/g, ""));
      const profit = parseFloat(reduxInfo.attributes.profit);
      if (!isNaN(price) && !isNaN(profit) && profit !== 0) {
        setPayback(Math.floor(price / (profit * 30)));
      }
    }
  }, [reduxInfo]);
  //set-data-to-redux-for-bucket----------------------------------
  const [orderBucket, setOrderBucket] = useState(false);
  const dispatch = useAppDispatch();
  const clickReduxBucket = () => {
    setOrderBucket(true);
  };
 //send-data-to-bucket-------------------------------
 const sendDataBucket = () => {
  dispatch(setClickBucket(true))
 }
 //buttonStile----------------------------
 const [styleButton,setButtonStyle] = useState(false);
 const changeButtonStyle = () => {
  setButtonStyle(!styleButton)
 }
  return (
    <div className={c.cardInfo__wrapper}>
      <div className={c.cardInfo__body}>
        <div className={c.cardInfo__header}>
          <h3 className={c.mainTitle}>
            {reduxInfo ? reduxInfo.attributes.title : ""}
          </h3>
          <div className={c.headerDescription}>
            <div className={c.stars}>
              <Image src={Icones.star} width={13} height={13} alt="icon" />
              <span>4.8</span>
            </div>
            <div className={c.comments}>
              <Image src={Icones.chat} width={13} height={13} alt="icon" />
              <span>12</span>
            </div>
            <div className={c.article}>Артикул: 915</div>
          </div>
        </div>
        {/* //------------------------------------------------------------------ */}
        <main className={c.mainContent}>
          <div className={c.options__wrapper}>
            <h4 className={c.optionsTitle}>Доступные опции</h4>
            <div className={c.optionLine}>
              <h4 className={c.optionTitle}>Энергопотребление</h4>
              <div className={c.options__body}>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.w === "1100"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.w === "1100"
                    ? reduxInfo.attributes.w
                    : "1100"}
                  W
                </div>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.w === "1200"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.w === "1800"
                    ? reduxInfo.attributes.w
                    : "1800"}
                  W
                </div>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.w === "2200"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.w === "2200"
                    ? reduxInfo.attributes.w
                    : "2200"}
                  W
                </div>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.w === "3150"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.w === "3150"
                    ? reduxInfo.attributes.w
                    : "3150"}
                  W
                </div>
              </div>
            </div>
            <div className={c.optionLine}>
              <h4 className={c.optionTitle}>Хешрейт</h4>
              <div className={c.options__body}>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.ths === "30"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.ths === "30"
                    ? reduxInfo.attributes.ths
                    : "30"}
                  Th/s
                </div>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.ths === "56"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.ths === "56"
                    ? reduxInfo.attributes.ths
                    : "56"}
                  Th/s
                </div>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.ths === "84"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.ths === "84"
                    ? reduxInfo.attributes.ths
                    : "84"}
                  Th/s
                </div>
              </div>
            </div>
            <div className={c.optionLine}>
              <h4 className={c.optionTitle}>Состояние</h4>
              <div className={c.options__body}>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.condition === "new"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.condition === "new"
                    ? reduxInfo.attributes.condition
                    : "new"}
                </div>
                <div
                  className={
                    reduxInfo && reduxInfo.attributes.condition === "used"
                      ? c.optionItemActive
                      : c.optionItem
                  }
                >
                  {reduxInfo.attributes.condition === "used"
                    ? reduxInfo.attributes.condition
                    : "used"}
                </div>
              </div>
            </div>
          </div>
          {/* //------------------------------------------------------------------ */}
          <div className={c.buyInfo__wrapper}>
            <div className={c.buyInfo__body}>
              <div className={c.priceWrapper}>
                <span className={c.price}>
                  {reduxInfo && reduxInfo.attributes.price}
                </span>
                <span className={c.priceIcon}>$</span>
              </div>
              <div className={c.payback__wrapper}>
                <div className={c.paybackItem}>
                  <span className={c.paybackItemText}>Окупаемость</span>
                  <Image
                    src={Icones.filterAttention}
                    width={12}
                    height={12}
                    alt="icon"
                  />
                </div>
                <div className={c.paybackItem}>
                  <span className={c.paybackItemNumbers}>{payback}</span>
                  <span className={c.paybackItemNumbers_text}>месяцев</span>
                </div>
              </div>
              <div className={c.counter__wrapper}>
                <div
                    className={styleButton ? c.bucketButtonActive : c.bucketButton}
                    onClick={() => {
                      clickReduxBucket();
                      sendDataBucket();
                      changeButtonStyle()
                    }}
                  >
                    <Image
                      src={Icones.whiteBucket}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <span>В корзину</span>
                  </div>
                 <div className={c.counterIcones__wrapper}>
                  <div className={c.iconWrapper}>
                    <Image
                      src={Icones.flag}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </div>
                  <div className={c.iconWrapper}>
                    <Image
                      src={Icones.menu}
                      width={20}
                      height={20}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div className={c.buyButton}>Купить в 1 клик</div>
              <div className={c.hostingInfoText}>
                Узнать стоимость размещения <br />
                на хостинге
              </div>
              <div className={c.location__wrapper}>
                <div className={c.locationItem}>
                  <Image
                    src={Icones.location}
                    width={9}
                    height={13}
                    alt="icon"
                  />
                  <div className={c.locationInfo}>
                    В наличии в Киеве, <span>1</span> шт
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //------------------------------------------------------------------ */}
        </main>
      </div>
    </div>
  );
};
export default CardInfo;
