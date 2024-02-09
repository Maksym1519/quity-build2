import p from "./pickupHosting.module.scss";
import Image from "next/image";
import { ShopImagesBG } from "@/public/Data";
import { Hosting } from "@/public/Data";
import ContactForm from "./contactForm";

const PickupHosting = () => {
  return (
    <div className={p.wrapper}>
      <div className={p.pickupMiner__container}>
        <h3 className={p.title}>
          Забронируйте место в нашем дата центре
          <br />и получите прогноз вашего будущего заработка
        </h3>
        <p className={p.bonusText}>+ получите бонусы</p>
        <Image src={Hosting.deployInfoArrow} width={50} height={50} className={p.arrow}/>
        <div className={p.steps__wrapper}>
          <div className={p.stepsItem}>
            <Image
              src={ShopImagesBG.payback}
              width={64}
              height={64}
              alt="icon"
            />
            <p className={p.text}>
            Профессиональную консультацию от инженеров Quity-хостинга
            </p>
          </div>
          <div className={p.stepsItem}>
            <Image
              src={ShopImagesBG.payback}
              width={64}
              height={64}
              alt="icon"
            />
            <p className={p.text}>
            Инструкцию «Как получить максимум прибыли через майнинг в дата-центре»
            </p>
          </div>
         </div>
         <ContactForm />
      </div>
     </div>
  );
};
export default PickupHosting;
