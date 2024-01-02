"use client";
import t from "../test.module.scss";
import { useState } from "react";

const Income = () => {
    const [answer, setAnswer] = useState(0);
  const clickedAnswer = (index) => {
    setAnswer(index)
  }
    return (
        <>
        <h3 className={t.questionTitle}>
        Какой объем средств Вы готовы инвестировать?
      </h3>
      <div className={t.items__wrapper}>
        <div className={ answer === 1 ? t.clickedItem : t.item} onClick={() => clickedAnswer(1)}>
          1000{" "}
        </div>
        <div className={answer === 2 ? t.clickedItem : t.item} onClick={() => clickedAnswer(2)}>2000</div>
        <div className={answer === 3 ? t.clickedItem : t.item} onClick={() => clickedAnswer(3)}>
          3000{" "}
        </div>
        <div className={answer === 4 ? t.clickedItem : t.item} onClick={() => clickedAnswer(4)}>4000</div>
      </div>
      </>
    )
}
export default Income;