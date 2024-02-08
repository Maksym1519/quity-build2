import e from "./earn.module.scss";
import Terms from "../deploy/terms/terms";

const Earn = () => {
  return (
    <div className={e.earn__wrapper}>
      <div className={e.title__wrapper}>
        Зарабатывайте от <span className={e.titleEmpty}> </span>в месяц, даже <br />
        без опыта в майнинге и окупите свои вложения <br />
        за
        <div className={e.price}>8 000 $</div>
        <div className={e.term}>10 месяцев</div>
      </div>
      <Terms />
    </div>
  );
};
export default Earn;
