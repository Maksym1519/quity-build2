"use client";
import t from "../test.module.scss";
import { useState } from "react";

const Evaluation = () => {
    const [answer, setAnswer] = useState(0);
  const clickedAnswer = (index) => {
    setAnswer(index)
  }
    return (
        <>
        <h3 className={t.questionTitle}>
        Ваша оценка наших услуг
      </h3>
      <div className={t.items__wrapper}>
        <div className={ answer === 1 ? t.clickedItem : t.item} onClick={() => clickedAnswer(1)}>
        Ваша оценка наших услуг - 2{" "}
        </div>
        <div className={answer === 2 ? t.clickedItem : t.item} onClick={() => clickedAnswer(2)}> Ваша оценка наших услуг - 3</div>
        <div className={answer === 3 ? t.clickedItem : t.item} onClick={() => clickedAnswer(3)}>
        Ваша оценка наших услуг - 4{" "}
        </div>
        <div className={answer === 4 ? t.clickedItem : t.item} onClick={() => clickedAnswer(4)}> Ваша оценка наших услуг - 5</div>
      </div>
      </>
    )
}
export default Evaluation;