"use client";
import q from "./questions.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";
import { useState } from "react";

const Questions = () => {
  const [showQuestion1, setShowQuestion1] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false);
  const [showQuestion3, setShowQuestion3] = useState(false);
  const [showQuestion4, setShowQuestion4] = useState(false);
  const toggleShowQuestion1 = () => {
    setShowQuestion1(!showQuestion1);
  };
  const toggleShowQuestion2 = () => {
    setShowQuestion2(!showQuestion2);
  };
  const toggleShowQuestion3 = () => {
    setShowQuestion3(!showQuestion3);
  };
  const toggleShowQuestion4 = () => {
    setShowQuestion4(!showQuestion4);
  };

  return (
    <div className={q.wrapper}>
      <h3 className={q.questions__title}>Часто задаваемые вопросы</h3>
      <div className={q.questions__body}>
      {/* //item--------------------------------------------------------------------------- */}
        <div className={q.question__wrapper} onClick={toggleShowQuestion1}>
          <div className={q.question__item}>
            <h4 className={q.question__title}>Вы работаете официально?</h4>
            {!showQuestion1 ? (
              <Image src={Icones.questionPlus} width={32} height={32} alt="icon"/>
            ) : (
              <Image src={Icones.questionMinus} width={32} height={32} alt="icon"/>
            )}
          </div>
          {showQuestion1 && (
            <div className={q.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              debitis similique neque laboriosam saepe, aliquam quidem eius.
              Asperiores nam minus adipisci praesentium, impedit enim quae harum
              dolor, illum, fuga dignissimos!
            </div>
          )}
        </div>
      {/* //item--------------------------------------------------------------------------- */}
      <div className={q.question__wrapper} onClick={toggleShowQuestion2}>
          <div className={q.question__item}>
            <h4 className={q.question__title}>Блок питания входит в стоимость?</h4>
            {!showQuestion2 ? (
              <Image src={Icones.questionPlus} width={32} height={32} alt="icon"/>
            ) : (
              <Image src={Icones.questionMinus} width={32} height={32} alt="icon"/>
            )}
          </div>
          {showQuestion2 && (
            <div className={q.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              debitis similique neque laboriosam saepe, aliquam quidem eius.
              Asperiores nam minus adipisci praesentium, impedit enim quae harum
              dolor, illum, fuga dignissimos!
            </div>
          )}
        </div>
      {/* //item--------------------------------------------------------------------------- */}
      <div className={q.question__wrapper} onClick={toggleShowQuestion3}>
          <div className={q.question__item}>
            <h4 className={q.question__title}>Какие гарантии даёт Ваша компания?</h4>
            {!showQuestion3 ? (
              <Image src={Icones.questionPlus} width={32} height={32} alt="icon"/>
            ) : (
              <Image src={Icones.questionMinus} width={32} height={32} alt="icon"/>
            )}
          </div>
          {showQuestion3 && (
            <div className={q.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              debitis similique neque laboriosam saepe, aliquam quidem eius.
              Asperiores nam minus adipisci praesentium, impedit enim quae harum
              dolor, illum, fuga dignissimos!
            </div>
          )}
        </div>
      {/* //item--------------------------------------------------------------------------- */}
      <div className={q.question__wrapper} onClick={toggleShowQuestion4}>
          <div className={q.question__item}>
            <h4 className={q.question__title}>Вы работаете по договору? </h4>
            {!showQuestion4 ? (
              <Image src={Icones.questionPlus} width={32} height={32} alt="icon"/>
            ) : (
              <Image src={Icones.questionMinus} width={32} height={32} alt="icon"/>
            )}
          </div>
          {showQuestion4 && (
            <div className={q.answer}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              debitis similique neque laboriosam saepe, aliquam quidem eius.
              Asperiores nam minus adipisci praesentium, impedit enim quae harum
              dolor, illum, fuga dignissimos!
            </div>
          )}
        </div>
      {/* //item--------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};
export default Questions;
