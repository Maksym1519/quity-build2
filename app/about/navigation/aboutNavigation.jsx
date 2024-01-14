"use client";
import a from "./aboutNavigation.module.scss";
import { useState,useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  setAbout,
  setRequisite,
  setContacts,
} from "@/lib/features/about/aboutSlice";
import { aboutInfo } from "@/lib/features/about/aboutSlice";



const AboutNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickActiveIndex = (index) => {
    setActiveIndex(index);
  };
  //set-redux-state-----------------------------------------------------
  const dispatch = useAppDispatch();
  const clickAboutState = () => {
    dispatch(setAbout());
  };
  const clickRequisiteState = () => {
    dispatch(setRequisite());
  };
  const clickContactsState = () => {
    dispatch(setContacts());
  };
  //set-check-data-from-redux-----------------------------
  //устанавливаем проверку есть ли данные для отображения контента
  const [dataFromServer, setDataFromServer] = useState(false);
  const dataFromRedux = useAppSelector(aboutInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);

  
  return (
    <div className={a.wrapper}>
      {dataFromServer && (
        <div className={a.aboutNavigation__body}>
          <div
            className={activeIndex === 0 ? a.itemActive : a.item}
            onClick={() => {
              clickActiveIndex(0);
              clickAboutState();
            }}
          >
            О компании
          </div>
          <div
            className={activeIndex === 1 ? a.itemActive : a.item}
            onClick={() => {
              clickActiveIndex(1);
              clickRequisiteState();
            }}
          >
            Реквизиты
          </div>
          <div
            className={activeIndex === 2 ? a.itemActive : a.item}
            onClick={() => {
              clickActiveIndex(2);
              setContacts();
            }}
          >
            Контакты
          </div>
          <div
            className={activeIndex === 3 ? a.itemActive : a.item}
            onClick={() => clickActiveIndex(3)}
          >
            Публичная оферта
          </div>
          <div
            className={activeIndex === 4 ? a.itemActive : a.item}
            onClick={() => clickActiveIndex(4)}
          >
            Пользовательское соглашение
          </div>
        </div>
      )}
    </div>
  );
};
export default AboutNavigation;
