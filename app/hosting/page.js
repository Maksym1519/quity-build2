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
import HostingTerms from "./terms/terms";
import VideoInfo from "./videoInfo/videoInfo";

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
          <HostingTerms />
          <Slider />
          <VideoInfo />
          <Questions />
        </div>
      </div>
      <Test />
     </>
  );
}
