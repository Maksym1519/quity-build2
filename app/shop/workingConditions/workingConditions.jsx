import w from "./workingConditions.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";

const WorkingConditions = () => {
  return (
    <div className={w.wrapper}>
      <div className={w.workingConditions__body}>
        <div className={w.column__wrapper}>
          <div className={w.column}>
            <h4 className={w.title}>Заказываете в 3 клика</h4>
            <p className={w.text}>
              Вы оформляете заказ через <span className={w.colored}>личный кабинет,</span> <br />
              оплачиваете любым удобным способом
            </p>
            <div className={w.step__wrapper}>
              <Image src={Icones.step1} width={62} height={62} />
            </div>
          </div>
          <div className={w.column}>
            <h4 className={w.title}>Отгружаем за 1 день</h4>
            <p className={w.text}>
              Если товар в наличии, то отгружаем Вам <br />в течение 1 дня после
              оплаты. По предзаказу – <br /> до 10 дней доставка из Китая
            </p>
            <div className={w.step__wrapper}>
              <Image src={Icones.step2} width={62} height={62} />
            </div>
          </div>
          <div className={w.column + " " + w.columnRadius}>
            <h4 className={w.title}>Предпродажная проверка</h4>
            <p className={w.text}>
              Проверяем товар в Вашем присутствии <br />
              или онлайн по видеосвязи
            </p>
            <div className={w.step__wrapper}>
              <Image src={Icones.step3} width={62} height={62} />
            </div>
          </div>
        </div>
        <div className={w.empty}></div>
        <div className={w.columnBottom__wrapper}>
          <div className={w.column}>
            <h4 className={w.title}>Заказываете в 3 клика</h4>
            <p className={w.text}>
              Вы оформляете заказ через личный кабинет, <br />
              оплачиваете любым удобным способомВы оформляете заказ через личный
              кабинет, <br />
              оплачиваете любым удобным способом
            </p>
            <div className={w.step__wrapper}>
              <Image src={Icones.step4} width={62} height={62} />
            </div>
          </div>
          <div className={w.column}>
            <h4 className={w.title}>Отгружаем за 1 день</h4>
            <p className={w.text}>
              Если товар в наличии, то отгружаем Вам <br />в течение 1 дня после
              оплаты. По предзаказу – <br /> до 10 дней доставка из Китая
            </p>
            <div className={w.step__wrapper}>
              <Image src={Icones.step5} width={62} height={62} />
              <Image src={Icones.workingHint} width={216} height={30} className={w.workingHint}/>
             </div>
          </div>
          <div className={w.column + " " + w.columnRadius}>
            <h4 className={w.title}>Предпродажная проверка</h4>
            <p className={w.text}>
              Проверяем товар в Вашем присутствии <br />
              или онлайн по видеосвязи
            </p>
            <div className={w.step__wrapper}>
              <Image src={Icones.step6} width={62} height={62} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkingConditions;
