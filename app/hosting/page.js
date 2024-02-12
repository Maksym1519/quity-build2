import h from "./hostingPage.module.scss";
import Deploy from "./deploy/deploy";
import Terms from "./deploy/terms/terms";
import Earn from "./earn/earn";
import Cases from "./cases/cases";
import DeployInfo from "./deployInfo/deployInfo";
import PickupHosting from "./pickupHosting/pickupHosting";
import PriceList from "../shop/priceList/priceList";
import Slider from "../shop/slider/slider";
import Questions from "../shop/questions/questions";
import Test from "../shop/test/test";
import DeployQuick from "./deployQuick/deployQuick";
import Scheme from "./scheme/scheme";

export default function HostingPage() {
  return (
    <>
      <div className={h.wrapper}>
        <div className="container">
          <Deploy />
          <Terms />
          <Earn />
          <Cases />
          <DeployInfo />
          <PickupHosting />
          <Scheme />
          <DeployQuick />
          <PriceList />
          <Slider />
          <Questions />
        </div>
      </div>
      <Test />
      <div className={h.wrapper}>
        <div className="container">
         
        </div>
      </div>
    </>
  );
}
