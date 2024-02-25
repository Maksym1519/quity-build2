import r from "./remoteScheme.module.scss";
import Image from "next/image";
import { ShopSheme } from "@/public/Data";

const RemoteScheme = () => {
  return (
    <div className={r.wrapper}>
      <h3 className={r.title}>
        Зарабатывайте удаленно из любой точки
        <br /> мира в надежной экосистеме Quity
      </h3>
      <div className={r.scheme__body}>
        <div className={r.ellipse__wrapper}>
          <Image src={ShopSheme.ellipse} width={952} height={621} alt="icon"/>
          <Image
            src={ShopSheme.leftLineEmpty}
            width={133}
            height={147}
            className={r.leftLine}
            alt="icon"
          />
          <Image
            src={ShopSheme.rightLineEmpty}
            width={133}
            height={147}
            className={r.rightLine}
            alt="icon"
          />
          <Image
            src={ShopSheme.bottomLineEmpty}
            width={133}
            height={147}
            className={r.bottomLine}
            alt="icon"
          />
          <Image
            src={ShopSheme.attention}
            width={24}
            height={24}
            className={r.attentionRight}
            alt="icon"
          />
          <Image
            src={ShopSheme.attention}
            width={24}
            height={24}
            className={r.attentionLeft}
            alt="icon"
          />
          <Image
            src={ShopSheme.attention}
            width={24}
            height={24}
            className={r.attentionBottom}
            alt="icon"
          />
        </div>
        <Image
          src={ShopSheme.title}
          width={603}
          height={180}
          className={r.imageTitle}
          alt="icon"
        />
        <div className={r.shopImage}>
          <div className={r.text}>
            Покупайте мощные ASIC-майнеры от оригинальных производителей
          </div>
          <Image src={ShopSheme.shop} width={281} height={281} alt="icon"/>
        </div>
        <div className={r.hostingImage}>
          <div className={r.text}>
            Размещайте на хостинге с аптаймом 100% и тех. осблуживанием 24/7
          </div>
          <Image src={ShopSheme.hosting} width={281} height={281} alt="icon"/>
        </div>
        <div className={r.serviceCenterImage}>
          <div className={r.text}>
            Отправляйте оборудование удаленно для ремонта в нашем сервисном
            центре
          </div>
          <Image src={ShopSheme.serviceCenter} width={281} height={281} alt="icon"/>
        </div>
      </div>
      <div className={r.quityManage__warraper}>
        <Image
          src={ShopSheme.mobileMockup}
          width={533}
          height={593}
          className={r.mobileMockup}
          alt="icon"
        />
        <div className={r.info__body}>
          <h4 className={r.info__body_title}>
            Управляй экосистемой Quity со своего смартфона
          </h4>
          <p className={r.text}>
            Quity всегда была компанией с фокусом на клиента: мы видим (и иногда
            предвосхищаем) потребности — и создаем сервисы для их удовлетворения
            онлайн.{" "}
          </p>
          <button type="button" className={r.quityManageButton}>Стать частью Quity</button>
        </div>
      </div>
    </div>
  );
};
export default RemoteScheme;
