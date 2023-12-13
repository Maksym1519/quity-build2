"use client";
import { useEffect, useState } from "react";
import r from "./registration.module.scss";
import Link from "next/link";
//components----------------------------------------------------
import getIdSlice from "@/lib/features/getIdSlice";
import { useAppDispatch,useAppSelector } from "@/lib/hooks";
import { getId } from "@/lib/features/getIdSlice";
import { selectData } from "@/lib/features/getIdSlice";

const Registration = () => {
//localStorage-----------------------------------------------------
const [id, setId] = useState('')
useEffect(() => {
localStorage.getItem("id",id)
},[id])
const dispatch = useAppDispatch()
useEffect(() => {
dispatch(getId({payload:id}))
},[dispatch,id])
const data = useAppSelector(selectData)
console.log(id)
//change-active-component---------------------------------------------
  const [activeComponent, setActiveComponent] = useState(true);
  useEffect(() => {
    setActiveComponent(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveComponent(index);
  };
  //send-data-toServer-----------------------------------------------
const [formData,setFormData] = useState({
  fullName: null,
  email: null,
  phone: null,
  password: null
})
const handleChange = (e) => {
  const {name,value} = e.target
  setFormData({...formData,[name]:value})
}
const handleSubmit = async () => {

}
  return (
    <div className={r.registration__wrapper}>
      <div className={r.registration}>
        <div className={r.registration__container}>
          <div className={r.navigation}>
            <h3
              className={`${activeComponent === 0 ? r.active : r.nonActive}`}
              onClick={() => handleSwitcher(0)}
            >
              Вход
            </h3>
            <span className={r.slash}>/</span>
            <h3
              className={`${activeComponent === 1 ? r.active : r.nonActive}`}
              onClick={() => handleSwitcher(1)}
            >
              Регистрация
            </h3>
          </div>
         <form onSubmit={handleSubmit}>
          {activeComponent === 0 && (
            <div className={r.enter__body}>
              <div className={r.inputs__wrapper}>
                <div className={r.input__wrapper}>
                  <label htmlFor="email">Email или телефон *</label>
                  <input name="email" onChange={(e) => {setId(e.target.value),handleChange()}}/>
                </div>
                <div className={r.input__wrapper}>
                  <label htmlFor="password">Пароль *</label>
                  <input type="password" name="password" />
                </div>
              </div>
              <div className={r.reminder} onClick={() => handleSwitcher(2)}>
              Забыл пароль?
              </div>
              <div className={r.button__wrapper}>
                <button className={r.registrationButton}>
                Войти
                </button>
              </div>
            </div>
          )}
          {activeComponent === 1 && (
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
            {activeComponent === 2 && (
            <div className={r.enter__body}>
              <h3 className={r.active}>Новый пароль будет отправлен на Ваш почтовый ящик</h3>
              <div className={r.inputs__wrapper}>
                <div className={r.input__wrapper}>
                  <label htmlFor="email"> Введите Email</label>
                  <input type="number" name="email" />
                </div>
                </div>
              <div className={r.reminder} onClick={() => handleSwitcher(0)}>
              {`< назад`}
              </div>
              <div className={r.button__wrapper}>
                <button className={r.registrationButton}>
                Отправить
                </button>
              </div>
            </div>
          )}
</form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
