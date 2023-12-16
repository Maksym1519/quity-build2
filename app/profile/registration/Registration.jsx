"use client";
import { useEffect, useState } from "react";
import r from "./registration.module.scss";
import Link from "next/link";
import axios from "axios";
import emailjs from "@emailjs/browser";
//components----------------------------------------------------
import getIdSlice from "@/lib/features/getIdSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getId } from "@/lib/features/getIdSlice";
import { selectData } from "@/lib/features/getIdSlice";
import Icones from "@/public/Data";
import Image from "next/image";

const Registration = () => {
  //localStorage-----------------------------------------------------
  const [id, setId] = useState("");
  useEffect(() => {
    localStorage.getItem("id", id);
  }, [id]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getId({ payload: id }));
  }, [dispatch, id]);
  const data = useAppSelector(selectData);
  console.log(id);
  //change-active-component---------------------------------------------
  const [activeComponent, setActiveComponent] = useState(true);
  useEffect(() => {
    setActiveComponent(0);
  }, []);
  const handleSwitcher = (index) => {
    setActiveComponent(index);
  };
  //registration-----------------------------------------------
  const [formData, setFormData] = useState({
    fullName: null,
    email: null,
    phone: null,
    password: null,
    passwordConfirmation: null,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.passwordConfirmation) {
        alert("Вы ввели неправильный пароль");
        return;
      }
      if (formData.password.length <= 6) {
        alert("Вы ввели слишком короткий пароль");
        return;
      }
      if (!/\d/.test(formData.password)) {
        alert("Пароль должен содержать хотя бы одну цифру");
        return;
      }
      if (!/[a-zA-Z]/.test(formData.password)) {
        alert("Пароль должен содержать хотя бы одну букву");
        return;
      }
      const requestData = {
        data: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        },
      };
      const response = await axios.post(
        "https://quitystrapi.onrender.com/api/clients",
        requestData,
        {
          params: {
            populate: "password",
          },
        }
      );
      if (response.status === 200) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          password: "",
          passwordConfirmation: "",
        });
      }
      setTimeout(() => {
        if (response.status === 200) {
          alert("Вы успешно зарегистрировались!");
        } else {
          alert("Что-то пошло не так, повторите попытку");
        }
      }, 1000);
      setTimeout(() => {
        handleSwitcher(0);
      }, 1500);
    } catch (error) {
      console.error("fetchdata failed");
    }
  };
  useEffect(() => {
    axios
      .get("https://quitystrapi.onrender.com/api/clients?populate=*")
      .then((response) => {
        const responseData = response.data.data;
        const findEmail = responseData.find(
          (item) => item.attributes.email === formData.email
        );
        if (findEmail) {
          alert("Пользователь с таким email уже существует !");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [formData.email]);
  //check-enter---------------------------------------------------------------
  const [clients, setClients] = useState([]);

  async function getDataClients() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/clients?populate=*"
      );
      const dataResponse = response.data.data;
      setClients(dataResponse);
      const user = dataResponse.find(
        (u) =>
          (u.attributes.email === formData.email ||
            u.attributes.phone === formData.email) &&
          u.attributes.password === formData.password
      );
      if (user) {
        window.location.href = "/profile";
        alert("переход на главную страницу");
      } else {
        alert("Вы ввели неправильный логин или пароль");
      }
    } catch (error) {
      console.error("get dataClients failed");
    }
  }
  //forgotPassword-------------------------------------------------------
  const generateRandomPassword = () => {
    const length = 8;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };
  //--------------------------------------------------------------------
  const [newPasswordToSever, setNewPasswordToServer] = useState();
  useEffect(() => {
    const newPassword = generateRandomPassword();
    setNewPasswordToServer(newPassword);
  }, []);
  //----------------------------------------------------------------------
  const [email, setEmail] = useState(null);
  const [matchedClient, setMatchedClient] = useState();
  console.log(email);
  const sendEmail = async (e) => {
    e.preventDefault();
    handleChangePassword(e);
    const newEmail = e.target.elements.user_email.value;
    setEmail(newEmail);
    const templateParams = {
      to: newEmail,
      to_email: email,
      from_name: "Maksym",
      to_name: "Guest",
      message: `Ваш новый пароль: ${newPasswordToSever}`,
    };
    try {
      await emailjs.send(
        "service_npekptm",
        "template_kyh2hsb",
        templateParams,
        "MC7BRzxDCdfYOwX2U"
      );
    } catch (error) {
      console.error("Ошибка при отправке письма:", error.text);
    }
  };
  //change-password-------------------------------------------------------------
  async function handleChangePassword(e) {
    try {
      const requestData = {
        data: {
          password: newPasswordToSever,
        },
      };
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/clients?populate=*"
      );
      const dataResponse = response.data.data;
      const filteredClients = dataResponse.find(
        (item) => item.attributes.email === e.target.elements.user_email.value
      );
      const clientId = filteredClients.id;
      console.log(clientId);
      const responsePut = await axios.put(
        `https://quitystrapi.onrender.com/api/clients/${clientId}`,
        requestData
      );
      if (responsePut.status === 200) {
        setFormData({
          user_email: "",
        });
        alert("Ваш пароль успешно изменен");
      }
    } catch (error) {
      console.error("change password failed", error);
    }
  }
  //handleSwitcher-setTimeout-----------------------------------
  const delayHandleSwitcher = () => {
    setTimeout(() => {
      handleSwitcher(0);
    }, 1000);
  };
  //show/hide-password-------------------------------------------------
  const [showPassword, setShowPassword] = useState(true);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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

          {activeComponent === 0 && (
            <div className={r.enter__body}>
              <div className={r.inputs__wrapper}>
                <div className={r.input__wrapper}>
                  <label htmlFor="email">Email или телефон *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      handleChange(e);
                      setId(e.target.value);
                    }}
                  />
                </div>
                <div className={r.input__wrapper}>
                  <label htmlFor="password">Пароль *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={r.reminder} onClick={() => handleSwitcher(2)}>
                Забыл пароль?
              </div>
              <div className={r.button__wrapper} onClick={getDataClients}>
                <button className={r.registrationButton}>Войти</button>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {activeComponent === 1 && (
              <div className={r.inputs__wrapper}>
                {/* //input1-------------------------------------------------------------------- */}
                <div className={r.input__wrapper}>
                  <label htmlFor="fullName">ФИО *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                {/* //input2-------------------------------------------------------------------- */}
                <div className={r.input__wrapper}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {/* //input3-------------------------------------------------------------------- */}
                <div className={r.input__wrapper}>
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* //input4-------------------------------------------------------------------- */}
                {showPassword ? (
                  <div className={r.input__wrapper}>
                    <label htmlFor="password">Придумайте пароль *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <Image
                      src={Icones.show}
                      width={16}
                      height={13}
                      className={r.eyeIcon}
                      onClick={() => handleShowPassword()}
                    />
                  </div>
                ) : (
                  <div className={r.input__wrapper}>
                    <label htmlFor="password">Придумайте пароль *</label>
                    <input
                      type="text"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <Image
                      src={Icones.hide}
                      width={16}
                      height={13}
                      className={r.eyeIcon}
                      onClick={() => handleShowPassword()}
                    />
                  </div>
                )}
                <div className={r.passwordHint}>
                  Минимум 6 символов (букв, цифр и спец. знаков)
                </div>
                {/* //input5-------------------------------------------------------------------- */}
                {showPassword ? (
                  <div className={r.input__wrapper}>
                    <label htmlFor="passwordConfirmation">
                      Подтвердите пароль *
                    </label>
                    <input
                      type="password"
                      name="passwordConfirmation"
                      value={formData.passwordConfirmation}
                      onChange={handleChange}
                    />
                    <Image
                      src={Icones.show}
                      width={16}
                      height={13}
                      className={r.eyeIcon}
                      onClick={() => handleShowPassword()}
                    />
                  </div>
                ) : (
                  <div className={r.input__wrapper}>
                    <label htmlFor="passwordConfirmation">
                      Подтвердите пароль *
                    </label>
                    <input
                      type="text"
                      name="passwordConfirmation"
                      value={formData.passwordConfirmation}
                      onChange={handleChange}
                    />
                    <Image
                      src={Icones.hide}
                      width={16}
                      height={13}
                      className={r.eyeIcon}
                      onClick={() => handleShowPassword()}
                    />
                  </div>
                )}
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
                  <button className={r.registrationButton} type="submit">
                    Зарегистриоватся
                  </button>
                </div>
              </div>
            )}
          </form>
          <form onSubmit={sendEmail}>
            {activeComponent === 2 && (
              <div className={r.enter__body}>
                <h3 className={r.active}>
                  Новый пароль будет отправлен на Ваш почтовый ящик
                </h3>
                <div className={r.inputs__wrapper}>
                  <div className={r.input__wrapper}>
                    <label htmlFor="email"> Введите Email</label>
                    <input
                      type="email"
                      name="user_email"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={r.reminder} onClick={() => handleSwitcher(0)}>
                  {`< назад`}
                </div>
                <div className={r.button__wrapper}>
                  <button
                    className={r.registrationButton}
                    type="submit"
                    onClick={() => delayHandleSwitcher()}
                  >
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
