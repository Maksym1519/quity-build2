import c from "./catalog.module.scss";
import CatalogNavigation from "./navigation/catalogNavigation";

const Catalog = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.catalog__body}>
        <h4 className={c.title}>Более 120 моделей в наличии и под заказ</h4>
        <CatalogNavigation />
        <div className={c.goods__wrapper}>
          <div className={c.item}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
