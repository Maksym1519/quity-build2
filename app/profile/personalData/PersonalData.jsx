import pd from "./personalData.module.scss";
//components------------------------------------------------
import InputNotification from "@/app/components/profile/InputNotification";
import Calendar from "./Calendar";


const PersonalData = () => {
  return (
    <div className={pd.wrapper}>
      <form className={pd.form}>
        <div className={pd.personalData}>
          <h3 className={pd.title}>Персональные данные</h3>
          {/* //input1-------------------------------------------------------------------- */}
          <div className={pd.input__wrapper}>
            <label htmlFor="name">ФИО</label>
            <input type="text" name="name" />
          </div>
          {/* //input2-------------------------------------------------------------------- */}
          <Calendar />
          {/* //input3-------------------------------------------------------------------- */}
          <div className={pd.input__wrapper}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>
          {/* //input4-------------------------------------------------------------------- */}
          <div className={pd.input__wrapper}>
            <label htmlFor="phone">Телефон</label>
            <input type="text" name="phone" />
          </div>
          <button type="submit" className={pd.saveButton}>
            Сохранить изменения
          </button>
        </div>
        <div className={pd.notification}>
          <h3 className={pd.title}>Оповещения</h3>
          <div className={pd.input__wrapper}>
           <InputNotification />
            <span className={pd.text}>
              Получать письма от сайта gmail.com на свой почтовый ящик
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
