import d from './deployQuick.module.scss';

const DeployQuick = () => {
    return (
        <div className={d.deployQuick__wrapper}>
           <div className={d.deployQuick__body}>
               <h3 className={d.mainTitle}>Размещайте ASIC-майнеры <br/>на хостинге за 1 день</h3>
               <p className={d.subTitle}>Как работает хостинг Quity?</p>
           </div>
        </div>
    )
}
export default DeployQuick;