import s from "./services.module.scss";
import Switcher from "./switcher";
import Image from "next/image";
import { shopServicesIcones } from "@/public/Data";
import { ShopCatalogIcones } from "@/public/Data";

const Services = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.services__body}>
        <h3 className={s.title}>
          Продаем и обслуживанием оборудование <br />
          за счет собственных мощностей для прибыльного <br />и безопасного
          майнинга
        </h3>
        <Switcher />
        <div className={s.items__wrapper}>
          {/* //item1--------------------------------------------------------------------------- */}
          <div className={s.item}>
            <Image src={shopServicesIcones.catalog} width={88} height={88} alt="icon"/>
            <div className={s.text__wrapper}>
              <h4 className={s.itemTitle}>Более 120 моделей в каталоге</h4>
              <p className={s.text}>
                Если товара нет в наличии, то доставим его специально для Вас
                напрямую из Китая за 14 дней
              </p>
            </div>
          </div>
          {/* //item2--------------------------------------------------------------------------- */}
          <div className={s.item}>
            <Image src={shopServicesIcones.payment} width={88} height={88} alt="icon"/>
            <div className={s.text__wrapper}>
              <h4 className={s.itemTitle}>5 удобных способов оплаты </h4>
              <p className={s.text}>
                Наличные, банковской картой, BTC по курсу Binance, USDT,
                безналичный расчет + 15%
              </p>
            </div>
          </div>
          {/* //item3--------------------------------------------------------------------------- */}
          <div className={s.item}>
            <Image src={shopServicesIcones.garantee} width={88} height={88} alt="icon"/>
            <div className={s.text__wrapper}>
              <h4 className={s.itemTitle}>
                Гарантия 6 месяцев и полная документация
              </h4>
              <p className={s.text}>
                Предоставим все документы и сертификаты, чтобы Вы были уверены в
                качестве и состоянии оборудования <span className={s.colored}>Смотреть документы</span>
              </p>
            </div>
          </div>
          {/* //item4--------------------------------------------------------------------------- */}
          <div className={s.item}>
            <Image src={shopServicesIcones.delivery} width={88} height={88} alt="icon"/>
            <div className={s.text__wrapper}>
              <h4 className={s.itemTitle}>Доставка по всей УКРАИНЕ до 10 дней</h4>
              <p className={s.text}>
              Доставляем по всей Украины транспортными компаниями по тарифам перевозчиков
              </p>
            </div>
          </div>
          {/* //item5--------------------------------------------------------------------------- */}
          <div className={s.item}>
            <Image src={shopServicesIcones.delivery} width={88} height={88} alt="icon"/>
            <div className={s.text__wrapper}>
              <h4 className={s.itemTitle}>Проверка оборудования</h4>
              <p className={s.text}>
              Вместе с Вами проверим работу майнера, покажем все документы или снимем видео с проверкой и вышлем онлайн
              </p>
            </div>
          </div>
          {/* //item6--------------------------------------------------------------------------- */}
          <div className={s.catalogButton}>
          Перейти в каталог
          <Image src={ShopCatalogIcones.arrow} width={48} height={48} alt="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
