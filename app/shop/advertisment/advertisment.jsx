import a from "./advertisment.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";

const Advertisment = () => {
  return (
    <div className={a.wrapper}>
      <div className={a.advertisment__body}>
        {/* //item1--------------------------------------------------------------------------- */}
        <div className={a.item}>
          <div className={a.description__wrapper}>
            <h3 className={a.title}>
              Нет условий <br />
              для майнинга дома?
            </h3>
            <p className={a.textDescription}>
              Разместите оборудование в нашем дата-центре <br />и отслеживайте
              заработок с любого устройства <br />
              <span className={a.textUnderline}>в личном кабинете</span>
            </p>
            <div className={a.statistics__wrapper}>
              <div className={a.statisticsItem}>
                <div className={a.numbers}>3.7 кВтч <span className={a.nds}>с НДС</span></div>
                <div className={a.text}>легальная оплата<br/> за розетку</div>
              </div>
              <div className={a.statisticsItem}>
                <div className={a.numbers}>100 % </div>
                <div className={a.text}>время непрерывной<br/> работы </div>
              </div>
              <div className={a.statisticsItem}>
                <div className={a.numbers}> 24/7</div>
                <div className={a.text}>постоянный контроль <br/>и охрана объекта</div>
              </div>
            </div>
            <div className={a.detailes__wrapper}>
              <button className={a.detailesButton}>Подробнее</button>
              <Image src={Icones.play} width={56} height={56} alt="play"/>
              <span className={a.detailesText}>Посмотрите видео <br/>о нашем дата-центре</span>
            </div>
          </div>
          <div className={a.shadow}></div>
        </div>
        {/* //item2--------------------------------------------------------------------------- */}
        <div className={a.item + " " + a.item2}>
          <div className={a.description__wrapper}>
            <h3 className={a.title}>Отремонтируем <br/>Ваш ASIC за 2 недели</h3>
            <p className={a.textDescription}>Только оригинальные запчасти с оплатой по факту только <br/>за выполненные работы </p>
            <div className={a.statistics__wrapper}>
              <div className={a.statisticsItem}>
                <div className={a.numbers}>14 дней</div>
                <div className={a.text}>гарантия на ремонт</div>
              </div>
              <div className={a.statisticsItem}>
                <div className={a.numbers}>5+ лет</div>
                <div className={a.text}>опыт работы наших <br/> инженеров</div>
              </div>
              <div className={a.statisticsItem}>
                <div className={a.numbers}>0 $</div>
                <div className={a.text}>диагностика даже если <br/> откажетесь от услуг</div>
              </div>
            </div>
            <div className={a.detailes__wrapper}>
              <button className={a.detailesButton}>Подробнее</button>
            </div>
            </div>
            <div className={a.shadow}></div>
          </div>
      </div>
    </div>
  );
};

export default Advertisment;
