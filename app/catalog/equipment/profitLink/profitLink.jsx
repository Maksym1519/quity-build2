import p from "./profitLink.module.scss";
import Link from "next/link";

const ProfitLink = () => {
  return (
    <div className={p.profitLink__wrapper}>
      <div className={p.profitLink__body}>
        <h3 className={p.title}>Не можете выбрать оборудование?</h3>
        <p className={p.text}>Сравните майнеры в Таблице доходности</p>
        <Link href={"#"}>
          <button className={p.button}>В таблицу доходности</button>
        </Link>
      </div>
    </div>
  );
};
export default ProfitLink;
