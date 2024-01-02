import s from "./shop.module.scss";
//components------------------------------------
import Miners from "./miners/miners";
import Catalog from "./catalog/catalog";
import Advertisment from "./advertisment/advertisment";
import WorkingConditions from "./workingConditions/workingConditions";
import PickupMiner from "./pickupMiner/pickupMiner";
import RemoteScheme from "./remoteScheme/remoteScheme";
import Services from "./services/services";
import Coupon from "./coupon/coupon";
import Slider from "./slider/slider";
import PriceList from "./priceList/priceList";
import Questions from "./questions/questions";
import Test from "./test/test";

export default function Shop() {
  return (
<>
    <div className={s.wrapper}>
      <div className="container">
        <Miners />
        <Catalog />
        <Advertisment />
        <WorkingConditions />
        <PickupMiner />
        <RemoteScheme />
        <Services />
        <Coupon />
        <Slider />
        <PriceList />
        <Questions />
         </div>
        </div>
    <Test />
</>
  );
}
