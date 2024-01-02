"use client";
import Icones from "@/public/Data";
import t from "./test.module.scss";
import Image from "next/image";
import { useState } from "react";
import {
  setExperience,
  setEvaluation,
  setIncome,
  setKnowledge,
} from "@/lib/features/testSlice";
import { useAppSelector } from "@/lib/hooks";
import { useAppDispatch } from "@/lib/hooks";
import Experience from "./experince/experience";
import Knowledge from "./knowledge/knowledge";
import Income from "./income/income";
import Evaluation from "./evaluation/evaluation";
import { ShopImagesBG } from "@/public/Data";

const Test = () => {
  //progressBar------------------------------------------------------
  const [testCounter, setTestCounter] = useState(0);
  const setProgress = () => {
    setTestCounter(testCounter + 1);
  };
  const increseProgress = () => {
    setTestCounter(testCounter - 1);
  };
  //redux--------------------------------------------------------------
  const dispatch = useAppDispatch();
  const currentComponent = useAppSelector(
    (state) => state.test.currentComponent
  );
  const showExperience = () => {
    dispatch(setExperience());
  };
  const showEvaluation = () => {
    dispatch(setEvaluation());
  };
  const showIncome = () => {
    dispatch(setIncome());
  };
  const showKnowledge = () => {
    dispatch(setKnowledge());
  };
  //switch-state---------------------------------------------------------------------------
  const arrayFunctions = [
    showExperience,
    showKnowledge,
    showIncome,
    showEvaluation,
  ];
  const handleNextButtonClick = () => {
    if (testCounter < arrayFunctions.length - 1) {
      arrayFunctions[testCounter + 1]();
      setTestCounter(testCounter + 1);
    }
  };

  const handlePrevButtonClick = () => {
    if (testCounter > 0) {
      arrayFunctions[testCounter - 1]();
      setTestCounter(testCounter - 1);
    }
  };
  //changeButtonText----------------------------------------------------
  const [currentButton, setCurrentButton] = useState(false);
  const handleStateButton = () => {
    if (testCounter < arrayFunctions.length - 1) {
      setCurrentButton(false);
    } else {
      setCurrentButton(true);
      alert("Спасибо за участие в опросе !");
    }
  };
  const handleStateButtonFalse = () => {
    if (testCounter < arrayFunctions.length) {
      setCurrentButton(false);
    }
  };
  //pressEnter------------------------------------------------------------
  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Предотвращает отправку формы, если она есть
      handleNextButtonClick();
      handleStateButton();
    }
  };
  return (
    <div className={t.wrapper}>
<div className={t.test__container}>
      <div className={t.test__header}>
        <p className={t.headerQuestion}>Сомневаетесь в выборе модели?</p>
        <h3 className={t.mainTitle}>
          Пройдите тест и получите подборку ASIC-майнеров с окупаемостью за 9-12
          месяцев и прибылью от 40.000 в месяц
        </h3>
        <div className={t.term}>за 9-12</div>
        <div className={t.discount}>40 000 $</div>
      </div>
      <div className={t.questions__wrapper}>
        <div className={t.questions__body}>
          <span className={t.intro}>
            Пройдите тест и получите расчет Вашей прибыли и окупаемости
            ASIC-майнеров
          </span>
          {currentComponent === "yourExperience" && <Experience />}
          {currentComponent === "yourKnowledge" && <Knowledge />}
          {currentComponent === "yourIncome" && <Income />}
          {currentComponent === "yourEvaluation" && <Evaluation />}
          <div className={t.questionsProgress}>
            <div className={t.progressBar__wrapper}>
              <div className={t.outcome__wrapper}>
                <span className={t.outcomeText}>Готово</span>
                <span className={t.outcomeNumbers}></span>
              </div>
              <progress value={testCounter} className={t.progress} max={4} />
            </div>
            <div className={t.navigation__wrapper}>
              <Image
                src={Icones.prevQuestion}
                width={52}
                height={52}
                onClick={() => {
                  increseProgress();
                  handlePrevButtonClick();
                  handleStateButtonFalse();
                }}
              />
              <div
                className={t.button__wrapper}
                onClick={() => {
                  setProgress();
                  handleNextButtonClick();
                  handleStateButton();
                }}
              >
                {currentButton ? (
                  <button className={t.button}>Готово</button>
                ) : (
                  <button className={t.button} onKeyDown={handleEnterKey}>
                    Далее
                  </button>
                )}

                <span className={t.buttonHint}>или нажмите Enter</span>
              </div>
            </div>
          </div>
        </div>
        <div className={t.managerWindow}>
          <div className={t.avatar__wrapper}>
            <Image
              src={ShopImagesBG.managerAvatar}
              width={56}
              height={56}
              className={t.avatarManager__image}
            />
            <div className={t.avatar__info}>
              <span className={t.avatarName}>Максим Поляков</span>
              <span className={t.avatarPosition}>Менеджер</span>
            </div>
            </div>
            <div className={t.managerMessage__wrapper}>
              Ответьте на все вопросы и получите подборку ASIC-майнеров с
              окупаемостью за 9-12 месяцев и прибылью от 40.000 в месяц +
              получите бонусы
            </div>
        </div>
      </div>
</div>
    </div>
  );
};
export default Test;
