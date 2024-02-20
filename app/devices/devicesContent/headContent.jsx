import d from "./devicesContent.module.scss";

const HeadContent = () => {
  const head = [
    <div className={d.headCell}>
      <span className={d.headTitle}>Устройство</span>
      <span className={d.headText}>(S/N)</span>
    </div>,
    <div className={d.headCell}>
      <span className={d.headTitle}>Индекс</span>
      <span className={d.headText}>(Размещение)</span>
    </div>,
    <div className={d.headCell}>
      <span className={d.headTitle}>Хэшрейт</span>
      <span className={d.headText}>(10мин)</span>
    </div>,
    <div className={d.headCell}>
      <span className={d.headTitle}>Прошивка</span>
      <span className={d.headText}>(Производитель)</span>
    </div>,
    <div className={d.headCell}>
      <span className={d.headTitle}>Пул</span>
      <span className={d.headText}>(Воркер)</span>
    </div>,
    <div className={d.headCell}>
      <span className={d.headTitle}>Тариф</span>
      <span className={d.headText}>(Дней осталось)</span>
    </div>,
    <div className={d.headCell}>
      <span className={d.headTitle}>Статус</span>
    </div>,
  ];

  return (
    <>
      {head.length > 0 &&
        head.map((item, index) => <th className={d.headTitle}>{item}</th>)}
    </>
  );
};
export default HeadContent;
