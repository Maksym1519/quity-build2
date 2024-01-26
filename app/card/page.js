import c from "./cardPage.module.scss";
import CardPresentation from "./cardPresentation/cardPresentation";
import CardInfo from "./cardInfo/cardInfo";
import Terms from "./terms/terms";
import CardFeatures from "./cardFeatures/cardFeatures";
import CardCalculator from "./cardCalculator/cardCalculator";
import Test from "../shop/test/test";

export default function CardPage() {
  return (
    <>
    <div className={c.wrapper}>
      <div className="container">
        <main className={c.mainContent}>
          <div className={c.cardPage__body}>
            <CardPresentation />
            <CardInfo />
          </div>
        </main>
      </div>
      </div>
    <Terms />
    <div className={c.wrapper}>
       <div className="container">
          <CardFeatures />
          <CardCalculator />
         </div>
    </div>
    <Test />
   </>
  );
}
