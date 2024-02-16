import m from './myApplication.module.scss';
import Navigation from '../navigation/navigation';
import ApplicationData from '../applicationData/applicationData';

const MyApplication = () => {
    return (
        <div className={m.myApplication__wrapper}>
           <div className={m.myApplication__header}>
              <h2 className={m.mainTitle}>Мои заявки</h2>
              <button type='button' className={m.addApplication}>Добавить устройство</button>
           </div>
           <Navigation />
           <ApplicationData />
        </div>
    )
}

export default MyApplication;