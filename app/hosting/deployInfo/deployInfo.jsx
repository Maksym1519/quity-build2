import d from "./deployInfo.module.scss";
import DeployServices from "./deployServices";

const DeployInfo = () => {
  return (
    <div className={d.deployInfo__wrapper}>
      <p className={d.deployInfoSubtitle}>Разместите оборудование в</p>
      <h2 className={d.deployInfoTitle}>
        Современном дата-центр на базе ГТЭС Терешково с <br />
        бесперебойной работой оборудования и охраной
      </h2>
      <div className={d.deployInfoStatistics}>
        <div className={d.statisticItem}>
          <span className={d.statisticItemValue}><span className={d.numbers}>4320</span>МЕСТ</span>
          <span className={d.statisticItemText}>в контейнере в дата-центре</span>
        </div>
        <div className={d.statisticItem + " " + d.statisticItemMargin}>
          <span className={d.statisticItemValue}><span className={d.numbers}>170</span>МВТ</span>
          <span className={d.statisticItemText}>доступная мощность для размещения <br/>оборудования</span>
        </div>
        <button className={d.statisticButton}>Что входит в стоимость размещения?</button>
      </div>
      <DeployServices />
      <div className={d.banner}>24/7</div>
    </div>
  );
};
export default DeployInfo;
