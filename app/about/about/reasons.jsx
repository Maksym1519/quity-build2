import a from "./about.module.scss";
import { reasonesIcones } from "@/public/Data";
import Image from "next/image";
import Link from "next/link";

const Reasones = () => {
  const linked = {
    text: "смотреть документы"
  }
  const title = [
    "Более 120 моделей в каталоге",
    "Хостинг с аптаймом 100% с оплатой 3,7 Р за кВТч",
    "Ремонт в кратчайшие сроки",
    "Полная документация и гарантия до 6 месяцев",
    "4320 машино-мест и 170 МВТ мощности",
    "Только оригинальные запчасти ",
  ];
  const text = [
    "Если товара нет в наличии, то доставим его специально для Вас напрямую из Китая за 14 дней",
    "Обеспечиваем бесперебойную работу оборудования 24/7, Ваши устройства не простаивают, не теряют характеристики из-за постоянных отключений",
    " Срок ремонта прописываем в договоре. Если нужной запчасти нет в наличии или проблема оказалась сложнее — предложим аренду нашего оборудования или скидку на ремонт, чтобы вы продолжали зарабатывать ",
   <div>
    <p className={a.itemText}>Предоставим все документы и сертификаты, чтобы  Вы были уверены в качестве и состоянии оборудования</p>
    <Link href={"#"}><span className={a.watchDocuments}>Смотреть документы</span></Link>
   </div>,
    "Мощные генетаторы для постоянной подачи электроэнергии для всех устройств одновременно",
    "Имеем прямые контракты с производителями комплектующих 20+ основных брендов",
  ];
  return (
    <div className={a.reasones__body}>
      <h3 className={a.reasonesTitle}>Почему Вам нужно выбрать Quity:</h3>
      <div className={a.items__wrapper}>
        {reasonesIcones.map((item, index) => (
          <div className={a.item} key={index}>
            <Image src={item} width={88} height={88} />
            <div className={a.info__wrapper}>
              <h4 className={a.itemTitle}>{title[index]}</h4>
              <p className={a.itemText}>{text[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reasones;
