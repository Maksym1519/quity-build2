import f from "./filters.module.scss";

const Filters = () => {
  return (
    <div className={f.filters__wrapper}>
      <div className={f.filters__body}>
        {/* //presence--------------------------------------------------------------- */}
        <div className={f.presence__wrapper}>
          <div className={f.presenceInput}></div>
          <span className={f.inputLabel}>Товары в наличии</span>
        </div>
        {/* //conditions--------------------------------------------------------------- */}
        <div className={f.conditions__wrapper}>
          <h4 className={f.conditionsTitle}>Состояние</h4>
          <div className={f.conditionsItem}>
            <div className={f.conditionsnput}></div>
            <span className={f.conditionsLabel}>Новое</span>
          </div>
          <div className={f.conditionsItem}>
            <div className={f.conditionsnput}></div>
            <span className={f.conditionsLabel}>Б/у</span>
          </div>
        </div>
        {/* //price------------------------------------------------------------------ */}
        <div className={f.price__wrapper}>
          <h4 className={f.priceTitle}>Цена, $</h4>
          <div className={f.priceValue__wrapper}>
            <div className={f.priceValue}></div>
            <span className={f.priceValueLine}>-</span>
            <div className={f.priceValue}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filters;
