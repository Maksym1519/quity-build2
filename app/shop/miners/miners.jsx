import m from "./miners.module.scss";
import { ShopImagesBG } from "@/public/Data";
import { ShopSmallMiners } from "@/public/Data";
import Image from "next/image";


const Miners = () => {
  return (
   <div className={m.wrapper}>
      <div className={m.miners__body}>
        <div className={m.main_item__wrapper}>
          <Image src={ShopImagesBG.minerAsic} className={m.minerAsicImage} width={870} height={480}/>
           <div className={m.description}>
            <h3 className={m.title}>ASIC-майнеры напрямую <br/>от производителя</h3>
            <ul className={m.descriptionList}>
              <li className={m.descriptionList__item}>Без переплат;</li>
              <li className={m.descriptionList__item}>180 дней гарантии;</li>
              <li className={m.descriptionList__item}>
                от 7 дней доставка по Украины;
              </li>
              <li className={m.descriptionList__item}>
                от 9 месяцев окупаемость;
              </li>
            </ul>
            <button className={m.minersButton}>В каталог</button>
          </div>
        </div>
        <div className={m.items__wrapper}>
            <div className={m.item__wrapper}>
               <Image src={ShopSmallMiners.blackBg} width={378} height={224} className={m.darkBg}/>
               <Image src={ShopSmallMiners.blueUpperBg} width={150} height={224} className={m.blueUpper}/>
               <Image src={ShopSmallMiners.upperMiner} width={150} height={224} className={m.upperMiner}/>
               <div className={m.description}>
<h4 className={m.title}>ASIC-майнеры</h4>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Miners;
