"use client";
import c from '../catalog.module.scss';
import { useState } from 'react';

const CatalogNavigation = (props) => {
    const [activeIndex,setActiveIndex] = useState(0)
    const switchIndex = (index) => {
       setActiveIndex(index)
    }
    return (
        <div className={c.navigation}>
        <div className={activeIndex === 0 ? c.activeCatalog : c.passiveCatalog} onClick={() => {switchIndex(0);props.clickAsic()}}>
        ASIC–майнеры
        </div>
        <div className={activeIndex === 1 ? c.activeCatalog : c.passiveCatalog} onClick={() => {switchIndex(1);props.clickGpu()}}>
        GPU–майнеры
        </div>
        <div className={activeIndex === 2 ? c.activeCatalog : c.passiveCatalog} onClick={() => {switchIndex(2);props.clickHard();}}>
        Жесткие диски
        </div>
     </div>
    )
}
export default CatalogNavigation;