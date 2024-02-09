import h from "./hostingPage.module.scss";
import Deploy from "./deploy/deploy";
import Terms from "./deploy/terms/terms";
import Earn from "./earn/earn";
import Cases from "./cases/cases";
import DeployInfo from "./deployInfo/deployInfo";
import PickupHosting from "./pickupHosting/pickupHosting";

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
        </div>
      </div>
    </>
  );
}
