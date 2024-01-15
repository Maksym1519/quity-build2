import 'spinkit/spinkit.min.css';
import l from './loading.module.scss';


const Loading = () => {
    var Spinner = require('react-spinkit');


return (
    <div className={l.loading__wrapper}>
    <p className={l.text}>Подождите, идет загрузка...</p>
    {/* <div className={`${l.loadingSpinner} sk-spinner sk-spinner-pulse`}></div> */}
    <Spinner name='circle' color='blue' />
    </div>
)
}
export default Loading;