import c from './cardCalculator.module.scss';

const CardCalculator = () => {
    return (
        <div className={c.cardCalculator__wrapper}>
            <h3 className={c.mainTitle}>Калькулятор прибыльности</h3>
           <div className={c.cardCalculator__body}>
              <div className={c.calculator}>
                  <h4 className={c.calculatorTitle}>Стоимость электроэнергии</h4>
                  <div className={c.inputWrapper}>
                     <input type="text" className={c.calculationInput}/>
                     <span className={c.inputPlaceholder}> $/Квт</span>
                  </div>
              </div>
              <div className={c.calculationInfo}>

              </div>
           </div>
        </div>
    )
}
export default CardCalculator;