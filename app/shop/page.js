import s from "./shop.module.scss";
//components------------------------------------
import Miners from "./miners/miners";
import Catalog from "./catalog/catalog";

export default function Shop() {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <Miners />
        <Catalog />
      </div>
    </div>
  );
}
