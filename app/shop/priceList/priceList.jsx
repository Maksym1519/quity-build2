import p from "./priceList.module.scss";
import Image from "next/image";
import { ShopImagesBG } from "@/public/Data";
import Icones from "@/public/Data";
import HandSlider from "./slider/handSlider";

const PriceList = () => {
  return (
    <div className={p.wrapper}>
      <div className={p.priceList__body}>
        <div className={p.information__body}>
          <h3 className={p.informationTitle}>
            Купите партию ASIC-майнеров и майните с выгодой до 30%
          </h3>
          <p className={p.informationText1}>
            Получите оптовый прайс-лист со специальными ценами*
          </p>
          <p className={p.informationText2}>
            *Специальные условия доставки и скидки при заказе от 30 штук
          </p>
          <div className={p.bonuses}>
            <h3 className={p.bonuses__title}>+ получите бонусы</h3>
            <div className={p.line__wrapper}>
              <Image src={ShopImagesBG.payback} width={64} height={64} />
              <p className={p.counter__text}>
                Чек-лист «5 способов заработка на майнинге кроме добычи
                криптовалюты»
              </p>
            </div>
            <div className={p.line__wrapper}>
              <Image src={ShopImagesBG.payback} width={64} height={64} />
              <p className={p.counter__text}>
                Расчет стоимости и окупаемости ASIC-майнеров{" "}
              </p>
            </div>
            <Image
              src={Icones.bonusesArrow}
              width={41}
              height={64}
              className={p.bonusArrow}
            />
          </div>
        </div>
        <div className={p.counter__body}>
          <div className={p.slider__body}>
            <h4 className={p.sliderTitle}>
              Какую сумму вы хотите инвестировать в майнинг?
            </h4>
            <HandSlider />
          </div>
          <div className={p.messengers__wrapper}>
              <div className={p.socialMedia__wrapper}>
                 <h4 className={p.title__contacts}>Куда Вам выслать расчет?</h4>
                 <div className={p.socialMedia__body}>
                   <Image src={Icones.whatsUp} width={40} height={40} className={p.icon}/>
                   <Image src={Icones.viber} width={40} height={40} className={p.icon}/>
                   <Image src={Icones.telegram} width={40} height={40} className={p.icon}/>
                 </div>
                 </div>
                 <div className={p.phones__wrapper}>
                    <h4 className={p.title__contacts}>Введите номер телефона</h4>
                    <div className={p.input__wrapper}>
                        <div className={p.inputs__body}>
                            <span className={p.phoneCode}>+3</span>
                           <input placeholder='(     )' />
                           <input type="number" />
                           <input type="number" />
                           <input type="number" />
                        </div>
                    </div>
                 </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceList;
