"use client";
import f from "./cardFeatures.module.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setAdditionalFeatures,
  setPayment,
  setFeedback,
} from "@/lib/features/card/cardSlice";

const CardFeatures = () => {
  const [activeNav, setActiveNav] = useState(0);
  const clickActiveNav = (index) => {
    setActiveNav(index);
  };
  const featuresColumnLeft = {
    производитель: "Bitmain",
    "Модель чипов": "BM1398BB",
    "Количество чипов": "342",
    "Количество хешплат": "3",
    "Входное напряжение переменного тока": "200-240 В",
    "Входной переменный ток источника питания": "20 (1-3) А",
    "Диапазон частот вх. напряжения переменного тока": "47-63 Гц",
  };
  const featuresColumnRight = {
    "Рекомендуемая температура работы": "от 0 до 40 °С",
    "Максимальная температура работы": "70 °С",
    "Температура хранения": "от -20 до 70 °С",
    "Страна–изготовитель": "Китай ",
    Вес: "14.2 кг",
    "Размер без упаковки": "400x195.5x290 мм",
    "Размер в упаковке": "570x316x430 мм",
  };
  //set-current-feature-----------------------
  const dispatch = useAppDispatch();
  const currentFeature = useAppSelector((state) => state.card.currentFeature);
  const clickAdditionalFeatures = () => {
    dispatch(setAdditionalFeatures());
  };
  const clickPayment = () => {
    dispatch(setPayment());
  };
  const clickFeedback = () => {
    dispatch(setFeedback());
  };
  return (
    <div className={f.cardFeatures__wrapper}>
      <div className={f.navigation}>
        <div
          className={
            activeNav === 0 ? f.navigationItemActiive : f.navigationItem
          }
          onClick={() => {
            clickActiveNav(0);
            clickAdditionalFeatures();
          }}
        >
          Дополнительные характеристики
        </div>

        <div
          className={
            activeNav === 1 ? f.navigationItemActiive : f.navigationItem
          }
          onClick={() => {
            clickActiveNav(1);
            clickPayment();
          }}
        >
          Оплата и доставка
        </div>

        <div
          className={
            activeNav === 2 ? f.navigationItemActiive : f.navigationItem
          }
          onClick={() => {
            clickActiveNav(2);
            clickFeedback();
          }}
        >
          Отзывы
        </div>
      </div>
      {/* //features-------------------------------------------------- */}
      {currentFeature === "additionalFeatures" && (
        <div className={f.features}>
          <div className={f.featuresColumn}>
            {Object.entries(featuresColumnLeft).map(([key, value], index) => (
              <div key={index} className={f.featuresItem}>
                <span className={f.featuresTitle}>{key}</span>
                <span className={f.featuresValue}>{value}</span>
              </div>
            ))}
          </div>
          <div className={f.featuresColumn}>
            {Object.entries(featuresColumnRight).map(([key, value], index) => (
              <div key={index} className={f.featuresItem}>
                <span className={f.featuresTitle}>{key}</span>
                <span className={f.featuresValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {currentFeature === "payment" && (
        <div className={f.features}>
          <div className={f.featuresColumn}>
            <div className={f.featuresPayment}>
              <p className={f.featuresText}>
                А также независимые государства формируют глобальную
                экономическую сеть и при этом - в равной степени предоставлены
                сами себе. В рамках спецификации современных стандартов,
                ключевые особенности структуры проекта набирают популярность
                среди определенных слоев населения, а значит, должны быть
                ограничены исключительно образом мышления! Господа, глубокий
                уровень погружения не оставляет шанса для своевременного
                выполнения сверхзадачи.
              </p>
              <p className={f.featuresText}>
                А также независимые государства формируют глобальную
                экономическую сеть и при этом - в равной степени предоставлены
                сами себе. В рамках спецификации современных стандартов,
                ключевые особенности структуры проекта набирают популярность
                среди определенных слоев населения, а значит, должны быть
                ограничены исключительно образом мышления! Господа, глубокий
                уровень погружения не оставляет шанса для своевременного
                выполнения сверхзадачи.
              </p>
            </div>
          </div>
          <div className={f.featuresColumn}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SUHKdAKVNk0?si=lz_7zNIlfFv9KCIr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
      {currentFeature === "feedback" && (
        <div className={f.features}>
          <div className={f.featuresColumn}>
            <div className={f.featuresPayment}>
              <p className={f.featuresText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ad
                possimus ratione fuga necessitatibus consequuntur exercitationem
                nesciunt doloremque veritatis, totam inventore nemo quibusdam
                ullam nostrum nihil. Blanditiis, non. Excepturi, voluptas?
              </p>
            </div>
          </div>
          <div className={f.featuresColumn}></div>
        </div>
      )}
    </div>
  );
};
export default CardFeatures;
