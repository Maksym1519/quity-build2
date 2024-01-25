"use client";
import c from "./catalogPage.module.scss";
import EquipmentNavigation from "./equipmentNavigation/equipmentNavigation";
import Equipment from "./equipment/equipment";
import Test from "../shop/test/test";
import Filters from "./filters/filters";
import { useAppSelector } from "@/lib/hooks";
import { cardInfo } from "@/lib/features/card/cardSlice";
import { useEffect, useState } from "react";
import CardPresentation from "../card/cardPresentation/cardPresentation";

export default function CatalogPage() {
  const [cardState, setCardState] = useState();
  const dataCardRedux = useAppSelector(cardInfo);
  useEffect(() => {
    if (dataCardRedux && dataCardRedux !== null) {
      setCardState(dataCardRedux);
    }
  }, [dataCardRedux]);
  const currentComponent = useAppSelector((state) => state.card.currentComponent);
  return (
    <>
      <div className={c.wrapper}>
        <div className="container">
          {currentComponent === "catalog" && (
            <div className={c.catalogPage__body}>
              <h2 className={c.catalogTitle}>
                Более 120 ASIC-майнеров в каталоге
                <br /> в наличии и под заказ
              </h2>
              <EquipmentNavigation />
              <main className={c.catalogPage__content}>
                <Equipment />
                <Filters />
              </main>
            </div>
          )}
          {currentComponent === "card" && <CardPresentation />}
        </div>
      </div>
      <Test />
    </>
  );
}
