import c from "./cases.module.scss";
import Image from "next/image";
import { Hosting } from "@/public/Data";

const Cases = () => {
  return (
    <div className={c.cases__wrapper}>
      <h3 className={c.cases__title}>
        В каких ситуациях подходит размещение в дата-центре?
      </h3>
      <div className={c.cases__body}>
        <div className={c.item__wrapper}>
          <div className={c.item}>
            <p className={c.imageTitle}>
              Вы ищете стабильный источник пассивного дохода
            </p>
            <Image src={Hosting.caseImg1} width={296} height={240}/>
          </div>
          <div className={c.item}>
            <p className={c.imageTitle}>
              Если нет условий для создания домашней фермы
            </p>
            <Image src={Hosting.caseImg2} width={296} height={240}/>
          </div>
        </div>
        <div className={c.item}>
          <p className={c.imageTitle}>
            У вас нет времени для обслуживания<br/> майнинг-оборудования
          </p>
          <Image src={Hosting.caseImg3} width={624} height={240}/>
        </div>
        <div className={c.item}>
          <p className={c.imageTitle}>
            Вы начинающий майнер и хотите войти в <br/>майнинг с минимальными рисками
          </p>
          <Image src={Hosting.caseImg4} width={624} height={240}/>
        </div>
        <div className={c.item__wrapper}>
          <div className={c.item}>
            <p className={c.imageTitle}>
              Вы ищете стабильный источник пассивного дохода
            </p>
            <Image src={Hosting.caseImg5} width={624} height={240}/>
          </div>
          <div className={c.item}>
            <p className={c.imageTitle}>
              Если нет условий для создания домашней фермы
            </p>
            <Image src={Hosting.caseImg6} width={624} height={240}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cases;
