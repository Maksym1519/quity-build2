import m from "./miners.module.scss";
import { ShopImagesBG } from "@/public/Data";
import { ShopMinersIcones } from "@/public/Data";
import Image from "next/image";
import Link from "next/link";

const Miners = () => {
  return (
    <div className={m.wrapper}>
      <div className={m.miners__body}>
        <div className={m.main_item__wrapper}>
          <Image
            src={ShopImagesBG.minerAsic}
            className={m.minerAsicImage}
            width={870}
            height={480}
            alt="icon"
          />
          <div className={m.description}>
            <h3 className={m.title}>
              ASIC-майнеры напрямую <br />
              от производителя
            </h3>
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
            <Link href={"/catalog"} className={m.buttonLink}>
              <button className={m.minersButton} type="button">
                В каталог
              </button>
            </Link>
          </div>
        </div>
        <div className={m.items__wrapper}>
          <div className={m.item__wrapper}>
            <Image
              src={ShopImagesBG.promoMiner1}
              width={378}
              height={100}
              className={m.promoMiner + " " + m.c}
              alt="icon"
            />
            <Link href={"/catalog"}>
              <button className={m.promoMiner__button}></button>
            </Link>
          </div>
          <div className={m.item__wrapper}>
            <Image
              src={ShopImagesBG.promoMiner2}
              width={378}
              height={100}
              className={m.promoMiner + " " + m.promoMiner2}
              alt="icon"
            />
            <Link href={"/catalog"}>
              <button className={m.promoMiner__button} type="button"></button>
            </Link>
          </div>
        </div>
      </div>
      <div className={m.miners__terms}>
        <div className={m.miners__terms__body}>
          <div className={m.item}>
            <Image
              src={ShopMinersIcones.sertificate}
              width={48}
              height={48}
              alt="icon"
            />
            <span className={m.text}>
              Сертификаты <br />
              от производителя
            </span>
          </div>
          <div className={m.item}>
            <Image
              src={ShopMinersIcones.custom}
              width={48}
              height={48}
              alt="icon"
            />
            <span className={m.text}>
              Легальный ввоз <br />
              через таможню
            </span>
          </div>
          <div className={m.item}>
            <Image
              src={ShopMinersIcones.coins}
              width={48}
              height={48}
              alt="icon"
            />
            <span className={m.text}>
              5 способов оплаты.
              <br />
              Даже криптовалютой
            </span>
          </div>
          <div className={m.item}>
            <Image
              src={ShopMinersIcones.checkingLike}
              width={48}
              height={48}
              alt="icon"
            />
            <span className={m.text}>
              Предпродажная проверка <br />
              перед отправкой и в офисе
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Miners;
