"use client";
import { useEffect, useState } from "react";
import r from "./registration.module.scss";
import Link from "next/link";

const Registration = () => {
  const [activeComponent, setActiveComponent] = useState(true);
  useEffect(() => {
    setActiveComponent(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveComponent(index);
  };
  return (
    <div className={r.registration__wrapper}>
      <div className={r.registration}>
        <div className={r.registration__container}>
          <div className={r.navigation}>
            <h3 className={r.title} onClick={() => handleSwitcher(0)}>
              Вход
            </h3>
            <span className={r.slash}>/</span>
            <h3 className={r.title} onClick={() => handleSwitcher(1)}>
              Регистрация
            </h3>
          </div>
          {activeComponent === 0 && (
            <div className={r.inputs__wrapper}>
              {/* //input1-------------------------------------------------------------------- */}
              <div className={r.input__wrapper}>
                <label htmlFor="name">ФИО *</label>
                <input type="text" name="name" />
              </div>
              {/* //input2-------------------------------------------------------------------- */}
              <div className={r.input__wrapper}>
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" />
              </div>
              {/* //input3-------------------------------------------------------------------- */}
              <div className={r.input__wrapper}>
                <label htmlFor="phone">Телефон *</label>
                <input type="number" name="phone" />
              </div>
              {/* //input4-------------------------------------------------------------------- */}
              <div className={r.input__wrapper}>
                <label htmlFor="password">Придумайте пароль *</label>
                <input type="password" name="password" />
              </div>
              <div className={r.passwordHint}>
                Минимум 6 символов (букв, цифр и спец. знаков)
              </div>
              {/* //input5-------------------------------------------------------------------- */}
              <div className={r.input__wrapper}>
                <label htmlFor="password">Подтвердите пароль *</label>
                <input type="password" name="password" />
              </div>
              {/* //-------------------------------------------------------------------------- */}
              <div className={r.approvement}>
                Я принимаю условия{" "}
                <Link href="#">
                  <span className={r.colored}>Публичной оферты</span>
                </Link>{" "}
                и{" "}
                <Link href="#">
                  <span className={r.colored}>
                    Пользовательского соглашения
                  </span>
                </Link>
              </div>
              <div className={r.button__wrapper}>
                <button className={r.registrationButton}>
                  Зарегистриоватся
                </button>
              </div>
            </div>
          )}
          {activeComponent === 1 && 
          <div className={r.enter__body}>
           
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Registration;
