"use client";
import c from "./cardCalculator.module.scss";
import Image from "next/image";
import MinerImg from "../../../public/cardCatalog.png";
import Icones from "@/public/Data";
import { useAppSelector } from "@/lib/hooks";
import { infoCurrencyCalc } from "@/lib/features/currencySlice";
import { useEffect, useState } from "react";
import { cardInfo } from "@/lib/features/card/cardSlice";
import "spinkit/spinkit.min.css";

const CardCalculator = () => {
  //set-current-card-info--------------------------
  const reduxCardInfo = useAppSelector(cardInfo);

  //get-power-price-----------------------------------
  const [inputPower, setInputPower] = useState();

  const getClickPower = (e) => {
    setInputPower(e);
  };
  //count-profit---------------------------------------
  const price = reduxCardInfo &&  reduxCardInfo.attributes.price;
  const priceInt = parseInt(price && price.replace(/\s/g, ""), 10);
  const totalPower = 24 * (reduxCardInfo && reduxCardInfo.attributes.w / 1000) * 30 * inputPower;
  const totalPrice = priceInt && priceInt + totalPower;
  const profitMonth = reduxCardInfo && reduxCardInfo.attributes.profit * 30;
  const profitRatio =
    profitMonth &&
    parseFloat(reduxCardInfo.attributes.price) / parseFloat(profitMonth);

  const payback = totalPrice && profitMonth && totalPrice / profitMonth;

  //---------------------------------------------------
  var Spinner = require("react-spinkit");

  const features = {
    Хэшрейт: reduxCardInfo && reduxCardInfo.attributes.ths,
    Потребление: reduxCardInfo && reduxCardInfo.attributes.w,
    "Доходность, $/мес.": profitMonth && profitMonth,
    "Доходность, %/мес.":
      profitMonth &&
      ((parseFloat(profitMonth) / parseFloat(reduxCardInfo.attributes.price)) *
        100) /
        1000,
  };
  //get-currency------------------------------------
  const [btc, setBtc] = useState();
  const currency = useAppSelector(infoCurrencyCalc);
  useEffect(() => {
    if (currency && currency !== null) {
      setBtc(currency[0]);
    }
  }, [currency]);

  //date----------------------------------------------
  const date = new Date();
  const day = date.getDate();
  const month = "0" + (date.getMonth() + 1);
  const year = date.getFullYear();

  return (
    <>
      {reduxCardInfo !== null && (
        <div className={c.cardCalculator__wrapper}>
          <h3 className={c.mainTitle}>Калькулятор прибыльности</h3>
          <div className={c.cardCalculator__body}>
            <div className={c.calculator}>
              <h4 className={c.calculatorTitle}>Стоимость электроэнергии</h4>
              <div className={c.inputWrapper}>
                <input
                  type="text"
                  className={c.calculationInput}
                  onChange={(e) => getClickPower(e.target.value)}
                />
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
                    {reduxCardInfo && reduxCardInfo.attributes.title}
                  </h4>
                  <div className={c.calculationPrice__wrapper}>
                    <span className={c.calculationPriceValue}>
                      {reduxCardInfo && reduxCardInfo.attributes.price}
                    </span>
                    <span className={c.calculationPriceMark}>$</span>
                  </div>
                  <div className={c.profit__wrapper}>
                    <div className={c.profit__column}>
                      <h4 className={c.profit__column_title}>Чистая прибыль</h4>
                      <div className={c.profitAmount__wrapper}>
                        <span className={c.profitAmountValue}>
                          {inputPower ? (
                            profitMonth - totalPower
                          ) : (
                            <Spinner name="circle" color="blue" />
                          )}
                        </span>

                        <span className={c.profitAmountText}>$/мес</span>
                      </div>
                    </div>
                    <div className={c.profit__column}>
                      <h4 className={c.profit__column_title}>Окупаемость</h4>
                      <div className={c.profitAmount__wrapper}>
                        <span className={c.profitAmountValue}>
                          {inputPower ? (
                            payback.toFixed(3)
                          ) : (
                            <Spinner name="circle" color="blue" />
                          )}
                        </span>
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
                      {btc && btc.percent_change_24h.includes("-") ? (
                        <span className={c.courseInfoNumbers}>
                          {btc && btc.price_usd}
                        </span>
                      ) : (
                        <span className={c.courseInfoNumbers}>
                          {btc && btc.price_usd}
                        </span>
                      )}

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
      )}
    </>
  );
};
export default CardCalculator;
