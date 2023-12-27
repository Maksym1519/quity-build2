"use client";
import s from './services.module.scss';
import { useState } from 'react';
const Switcher = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleSwitcher = (index) => {
       setActiveIndex(index)
    }
    return (
        <div className={s.switcher__wrapper}>
        <div className={activeIndex === 0 ? s.active : s.disActive} onClick={() => handleSwitcher(0)}>Интернет-магазин</div>
        <div className={activeIndex === 1 ? s.active : s.disActive} onClick={() => handleSwitcher(1)}>Хостинг</div>
        <div className={activeIndex === 2 ? s.active : s.disActive} onClick={() => handleSwitcher(2)}>Сервисный центр</div>
        <div className={activeIndex === 3 ? s.active : s.disActive} onClick={() => handleSwitcher(3)}>Личный кабинет</div>
     </div>
    )
}
export default Switcher;