"use client";
import t from "../test.module.scss";
import { useState } from "react";


const Experience = () => {
  const [answer, setAnswer] = useState(0);
  const clickedAnswer = (index) => {
    setAnswer(index)
  }
    return (
        <>
        <h3 className={t.questionTitle}>
        Какой у Вас опыт в майнинге криптовалюты?
      </h3>
      <div className={t.items__wrapper}>
        <div className={ answer === 1 ? t.clickedItem : t.item} onClick={() => clickedAnswer(1)}>
          У меня уже была или есть своя майнинг-ферма{" "}
        </div>
        <div className={answer === 2 ? t.clickedItem : t.item} onClick={() => clickedAnswer(2)}>Я новичок</div>
        <div className={answer === 3 ? t.clickedItem : t.item} onClick={() => clickedAnswer(3)}>
          У меня еще не было своей майнинг-фермы{" "}
        </div>
        <div className={answer === 4 ? t.clickedItem : t.item} onClick={() => clickedAnswer(4)}>Я профессионал</div>
      </div>
      </>
    )
}
export default Experience;