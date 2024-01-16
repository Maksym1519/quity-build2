"use client";
import e from './equipmentNavigation.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { asicCatalog,gpuCatalog,hardCatalog,farmCatalog,spareCatalog } from '@/lib/features/shopCatalogSlice';

const EquipmentNavigation = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const switchIndex = (index) => {
       setActiveIndex(index)
    }
    //set-current-state------------------------------------------------
    const dispatch = useAppDispatch()
    const showAsic = () => {
        dispatch(asicCatalog())
    }
    const showGpu = () => {
        dispatch(gpuCatalog())
    }
    const showHardDisc = () => {
        dispatch(hardCatalog())
    }
    const showFarm = () => {
        dispatch(farmCatalog())
    }
    const showSpare = () => {
        dispatch(spareCatalog())
    }
    return (
        <div className={e.navigation}>
        <div className={activeIndex === 0 ? e.activeCatalog : e.passiveCatalog} onClick={() => {switchIndex(0);showAsic()}}>
        ASIC–майнеры
        </div>
        <div className={activeIndex === 1 ? e.activeCatalog : e.passiveCatalog} onClick={() => {switchIndex(1);showGpu()}}>
        GPU–майнеры
        </div>
        <div className={activeIndex === 2 ? e.activeCatalog : e.passiveCatalog} onClick={() => {switchIndex(2);showHardDisc()}}>
        Жесткие диски
        </div>
        <div className={activeIndex === 3 ? e.activeCatalog : e.passiveCatalog} onClick={() => {switchIndex(3);showFarm()}}>
        Фермы для майнинга
        </div>
        <div className={activeIndex === 4 ? e.activeCatalog : e.passiveCatalog} onClick={() => {switchIndex(4);showSpare()}}>
        Комплектующие и аксессуары
        </div>
     </div>
    )
}
export default EquipmentNavigation;