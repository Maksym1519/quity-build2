import d from "./devicesPage.module.scss";
import DevicesHeader from "./devicesHeader/devicesHeader";
import Navigation from "./navigation/navigation";
import Attention from "./attention/attention";
import DevicesContent from "./devicesContent/devicesContent";


export default function Devices() {
  
  return (
    <>
      <div className={d.wrapper}>
        <div className="container">
            <div className={d.content}>
               <DevicesHeader />
               <Navigation />
               <Attention />
               <DevicesContent />
            </div>
          </div>
      </div>
    </>
  );
}
