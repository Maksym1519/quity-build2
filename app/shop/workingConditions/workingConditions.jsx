import w from "./workingConditions.module.scss";
import Image from "next/image";

const WorkingConditions = () => {
  return (
    <div className={w.wrapper}>
      <div className={w.workingConditions__body}>
        <div className={w.column__wrapper}>
          <div className={w.column + " " + w.firstColumnRadius}>
            <h4 className={w.title}>Заказываете в 3 клика</h4>
            <p className={w.text}>
              Вы оформляете заказ через личный кабинет, <br />
              оплачиваете любым удобным способомВы оформляете заказ через личный
              кабинет, <br />
              оплачиваете любым удобным способом
            </p>
          </div>
          <div className={w.column}>
            <h4 className={w.title}>Отгружаем за 1 день</h4>
            <p className={w.text}>
              Если товар в наличии, то отгружаем Вам <br />в течение 1 дня после
              оплаты. По предзаказу – <br /> до 10 дней доставка из Китая
            </p>
          </div>
          <div className={w.column + " " + w.columnRadius}>
            <h4 className={w.title}>Предпродажная проверка</h4>
            <p className={w.text}>
              Проверяем товар в Вашем присутствии <br />
              или онлайн по видеосвязи
            </p>
          </div>
        </div>
        <div className={w.empty}>
     
        </div>
        <div className={w.columnBottom__wrapper}>
          <div className={w.column }>
            <h4 className={w.title}>Заказываете в 3 клика</h4>
            <p className={w.text}>
              Вы оформляете заказ через личный кабинет, <br />
              оплачиваете любым удобным способомВы оформляете заказ через личный
              кабинет, <br />
              оплачиваете любым удобным способом
            </p>
          </div>
          <div className={w.column}>
            <h4 className={w.title}>Отгружаем за 1 день</h4>
            <p className={w.text}>
              Если товар в наличии, то отгружаем Вам <br />в течение 1 дня после
              оплаты. По предзаказу – <br /> до 10 дней доставка из Китая
            </p>
          </div>
          <div className={w.column + " " + w.columnRadius}>
            <h4 className={w.title}>Предпродажная проверка</h4>
            <p className={w.text}>
              Проверяем товар в Вашем присутствии <br />
              или онлайн по видеосвязи
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkingConditions;
