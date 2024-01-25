"use client";
import c from "./cardInfo.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState } from "react";

const CardInfo = () => {
  //bucket/counter---------------------------------------
  const [bucket, setBucket] = useState(true);
  const toglleBucket = () => {
    setBucket(!bucket);
  };
  return (
    <div className={c.cardInfo__wrapper}>
      <div className={c.cardInfo__body}>
        <div className={c.cardInfo__header}>
          <h3 className={c.mainTitle}>ASIC-майнеры Bitmain Antminer T19</h3>
          <div className={c.headerDescription}>
            <div className={c.stars}>
              <Image src={Icones.star} width={13} height={13} alt="icon"/>
              <span>4.8</span>
            </div>
            <div className={c.comments}>
              <Image src={Icones.chat} width={13} height={13} alt="icon"/>
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
                <div className={c.optionItem}>800 W</div>
                <div className={c.optionItem}>1200 W</div>
                <div className={c.optionItem}>1800 W</div>
              </div>
            </div>
            <div className={c.optionLine}>
              <h4 className={c.optionTitle}>Хешрейт</h4>
              <div className={c.options__body}>
                <div className={c.optionItem}>30 Th/s</div>
                <div className={c.optionItem}>56 Th/s</div>
                <div className={c.optionItem}>84 Th/s</div>
              </div>
            </div>
            <div className={c.optionLine}>
              <h4 className={c.optionTitle}>Состояние</h4>
              <div className={c.options__body}>
                <div className={c.optionItem}>Новое</div>
                <div className={c.optionItem}>Б/у</div>
              </div>
            </div>
          </div>
          {/* //------------------------------------------------------------------ */}
          <div className={c.buyInfo__wrapper}>
            <div className={c.buyInfo__body}>
              <div className={c.priceWrapper}>
                <span className={c.price}>1 970 000</span>
                <span className={c.priceIcon}>$</span>
              </div>
              <div className={c.payback__wrapper}>
                <div className={c.paybackItem}>
                  <span className={c.paybackItemText}>Окупаемость</span>
                  <Image src={Icones.filterAttention} width={12} height={12} alt="icon"/>
                </div>
                <div className={c.paybackItem}>
                  <span className={c.paybackItemNumbers}>14</span>
                  <span className={c.paybackItemNumbers_text}>месяцев</span>
                </div>
              </div>
              <div className={c.counter__wrapper}>
                {bucket && (
                  <div className={c.bucketButton} onClick={() => toglleBucket()}>
                    <Image src={Icones.whiteBucket} width={20} height={20} alt="icon"/>
                    <span>В корзину</span>
                  </div>
                )}
                {!bucket && (
                  <div className={c.counterButtons}>
                    <div className={c.buttonOperation}>-</div>
                    <div className={c.counterButtonsValue}>
                      <span>1</span>
                      <span>шт</span>
                    </div>
                    <div className={c.buttonOperation}>+</div>
                  </div>
                )}
                <div className={c.counterIcones__wrapper}>
                  <div className={c.iconWrapper}>
                    <Image src={Icones.flag} width={20} height={20} alt="icon"/>
                  </div>
                  <div className={c.iconWrapper}>
                    <Image src={Icones.menu} width={20} height={20} alt="icon"/>
                  </div>
                </div>
              </div>
              <div className={c.buyButton}>Купить в 1 клик</div>
              <div className={c.hostingInfoText}>Узнать стоимость размещения <br/>на хостинге</div>
              <div className={c.location__wrapper}>
                 <div className={c.locationItem}>
                  <Image src={Icones.location} width={9} height={13} alt="icon"/>
                  <div className={c.locationInfo}>В наличии в Киеве, <span>1</span> шт</div>
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
