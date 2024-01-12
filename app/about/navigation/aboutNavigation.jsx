"use client";
import a from './aboutNavigation.module.scss';
import { useState } from 'react';

const AboutNavigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const clickActiveIndex = (index) => {
        setActiveIndex(index)
    }
     return (
        <div className={a.wrapper}>
           <div className={a.aboutNavigation__body}>
             <div className={activeIndex === 0 ? a.itemActive : a.item} onClick={() => clickActiveIndex(0)}>
             О компании
             </div>
             <div className={activeIndex === 1 ? a.itemActive : a.item} onClick={() => clickActiveIndex(1)}>
             Реквизиты
             </div>
             <div className={activeIndex === 2 ? a.itemActive : a.item} onClick={() => clickActiveIndex(2)}>
             Контакты
             </div>
             <div className={activeIndex === 3 ? a.itemActive : a.item} onClick={() => clickActiveIndex(3)}>
             Публичная оферта
             </div>
             <div className={activeIndex === 4 ? a.itemActive : a.item} onClick={() => clickActiveIndex(4)}>
             Пользовательское соглашение
             </div>
           </div>
        </div>
    )
}
export default AboutNavigation;