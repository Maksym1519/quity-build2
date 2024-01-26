import t from "./terms.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";

const Terms = () => {
  const itemText = [
    "5 способов оплаты. Можно даже криптовалютой",
    "Доставка по всей УКРАИНЕ до 10 дней",
    "Проверка перед покупкой вживую или онлайн",
    "Сертифицированная продукция и гарантия",
  ];
  return (
    <div className={t.terms__wrapper}>
      <div className={t.terms__body}>
{itemText.map((item,index) => (<div className={t.termsItem} key={index}>
          <Image src={Icones.chart} width={48} height={48} />
          <p className={t.termsItem_text}>{item}</p>
        </div>))
        
}
      </div>
    </div>
  );
};
export default Terms;
