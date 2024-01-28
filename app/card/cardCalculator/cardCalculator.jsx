"use client";
import c from "./cardCalculator.module.scss";
import Image from "next/image";
import MinerImg from "../../../public/cardCatalog.png";
import Icones from "@/public/Data";
import { useAppSelector } from "@/lib/hooks";
import { infoCurrencyCalc } from "@/lib/features/currencySlice";
import { useEffect, useState } from "react";

const CardCalculator = () => {
  const features = {
    Хэшрейт: "84 TH/s",
    Потребление: "3150 W",
    "Доходность, $/мес.": "71 132,64 $/мес.",
    "Доходность, %/мес.": "6,92%",
  };
  //get-currency------------------------------------
  const [btc, setBtc] = useState();
  const currency = useAppSelector(infoCurrencyCalc);
  useEffect(() => {
    if (currency && currency !== null) {
      setBtc(currency[0]);
      console.log(btc);
    }
  }, [currency]);

  //date----------------------------------------------
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className={c.cardCalculator__wrapper}>
      <h3 className={c.mainTitle}>Калькулятор прибыльности</h3>
      <div className={c.cardCalculator__body}>
        <div className={c.calculator}>
          <h4 className={c.calculatorTitle}>Стоимость электроэнергии</h4>
          <div className={c.inputWrapper}>
            <input type="text" className={c.calculationInput} />
            <span className={c.inputPlaceholder}> $/Квт</span>
          </div>
          <div className={c.features__wrapper}>
            {Object.entries(features).map(([key, value], index) => (
              <div className={c.features__item} key={index}>
                <p className={c.features__item_title}>{key}</p>
                <p className={c.features__item_value}>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={c.calculationInfo}>
          <div className={c.calculationInfo__body}>
            <div className={c.imageWrapper}>
              <Image
                src={MinerImg}
                width={118}
                height={108}
                className={c.minerImg}
              />
            </div>
            <div className={c.calculationData}>
              <h4 className={c.calculationData__title}>
                ASIC-майнеры Bitmain Antminer T19
              </h4>
              <div className={c.calculationPrice__wrapper}>
                <span className={c.calculationPriceValue}>1 970 000</span>
                <span className={c.calculationPriceMark}>$</span>
              </div>
              <div className={c.profit__wrapper}>
                <div className={c.profit__column}>
                  <h4 className={c.profit__column_title}>Чистая прибыль</h4>
                  <div className={c.profitAmount__wrapper}>
                    <span className={c.profitAmountValue}>63 644,64</span>
                    <span className={c.profitAmountText}>$/мес</span>
                  </div>
                </div>
                <div className={c.profit__column}>
                  <h4 className={c.profit__column_title}>Окупаемость</h4>
                  <div className={c.profitAmount__wrapper}>
                    <span className={c.profitAmountValue}>14,46</span>
                    <span className={c.profitAmountText}>мес</span>
                  </div>
                </div>
              </div>
              <div className={c.course__wrapper}>
                <div className={c.courseDescription__wrapper}>
                  <p className={c.courseDescriptionText}>
                    BTC/USD - Биткоин курс на {`${day}-${month}-${year}`}
                  </p>
                </div>
                <div className={c.courseInfo__wrapper}>
                  <Image
                    src={Icones.courseState}
                    width={24}
                    height={24}
                    alt="icon"
                  />
                  <span className={c.courseInfoNumbers}>
                    {btc ? btc.price_usd : ""}
                  </span>
                  {btc && btc.percent_change_24h.includes("-") ? (
                    <span className={c.courseInfoChangesRed}>
                      {btc ? btc.percent_change_24h : ""}
                    </span>
                  ) : (
                    <span className={c.courseInfoChanges}>
                      {btc ? btc.percent_change_24h : ""}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCalculator;
