import c from "./contactForm.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import CallTime from "./callTime";


const ContactForm = () => {
  return (
    <div className={c.wrapper}>
      <div className={c.investingForm__body}>
        <h4 className={c.title}>Когда с вами удобнее связаться?</h4>
        <CallTime />
        <div className={c.contacts__wrapper}>
          <div className={c.phones__wrapper}>
            <h4 className={c.title__contacts}>Введите номер телефона</h4>
            <div className={c.input__wrapper}>
              <div className={c.inputs__body}>
                <span className={c.phoneCode}>+3</span>
                <input placeholder="(     )" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>
            </div>
          </div>
          <div className={c.socialMedia__wrapper}>
            <h4 className={c.title__contacts}>Куда Вам выслать расчет?</h4>
            <div className={c.socialMedia__body}>
              <Image
                src={Icones.whatsUp}
                width={40}
                height={40}
                className={c.icon}
                alt="icon"
              />
              <Image
                src={Icones.viber}
                width={40}
                height={40}
                className={c.icon}
                alt="icon"
              />
              <Image
                src={Icones.telegram}
                width={40}
                height={40}
                className={c.icon}
                alt="icon"
              />
            </div>
          </div>
        </div>
        <button className={c.countButton}>
          Подобрать и рассчитать окупаемость + получить бонусы{" "}
        </button>
        <div className={c.messengers__wrapper}>
          <p className={c.text}>
            Или пишите - подберем Вам оборудование в мессенджере
          </p>
          <div className={c.icones__wrapper}>
            <Image
              src={Icones.blackWhatsup}
              width={32}
              height={32}
              className={c.icon}
              alt="icon"
            />
            <Image
              src={Icones.blackViber}
              width={32}
              height={32}
              className={c.icon}
              alt="icon"
            />
            <Image
              src={Icones.blackTelegram}
              width={32}
              height={32}
              className={c.icon}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
