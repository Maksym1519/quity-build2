import s from "./shop.module.scss";
//components------------------------------------
import Miners from "./miners/miners";
import Catalog from "./catalog/catalog";
import Advertisment from "./advertisment/advertisment";
import WorkingConditions from "./workingConditions/workingConditions";
import PickupMiner from "./pickupMiner/pickupMiner";

export default function Shop() {
  return (
    <div className={s.wrapper}>
      <div className="container">
        <Miners />
        <Catalog />
        <Advertisment />
        <WorkingConditions />
        <PickupMiner />
      </div>
    </div>
  );
}
