import c from "./catalogPage.module.scss";
import EquipmentNavigation from "./equipmentNavigation/equipmentNavigation";
import Equipment from "./equipment/equipment";

export default function CatalogPage() {
    return (
        <div className={c.wrapper}>
           <div className="container">
              <div className={c.catalogPage__body}>
                  <h2 className={c.catalogTitle}>Более 120 ASIC-майнеров в каталоге<br/> в наличии и под заказ</h2>
                  <EquipmentNavigation />
                  <main className={c.catalogPage__content}>
                   <Equipment />
                  </main>
              </div>
           </div>
        </div>
    )
}