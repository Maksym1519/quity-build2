import f from "../filters.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";

const Consultation = () => {
  return (
    <div className={f.consultation__wrapper}>
      <div className={f.consultation__body}>
        <h2 className={f.mainTitle}>Не нашли нужный товар?</h2>
        <p className={f.mainText}>
          Оставьте заявку нашему менеджеру и получите бесплатную консультацию
        </p>
        <div className={f.socialMedia__wrapper}>
          <h4 className={f.title__contacts}>Куда Вам выслать расчет?</h4>
          <div className={f.socialMedia__body}>
            <Image
              src={Icones.whatsUp}
              width={40}
              height={40}
              className={f.icon}
              alt="icon"
            />
            <Image
              src={Icones.viber}
              width={40}
              height={40}
              className={f.icon}
              alt="icon"
            />
            <Image
              src={Icones.telegram}
              width={40}
              height={40}
              className={f.icon}
              alt="icon"
            />
          </div>
        </div>
        {/* //phones------------------------------------------------------------------- */}
        <div className={f.phones__wrapper}>
          <div className={f.input__wrapper}>
            <div className={f.inputs__body}>
              <span className={f.phoneCode}>+3</span>
              <input placeholder="(     )" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>
          </div>
        </div>
        {/* //button------------------------------------------------------------------- */}
        <div className={f.button__wrapper}>
        Получить консультацию
        </div>
      </div>
    </div>
  );
};
export default Consultation;
