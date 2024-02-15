import a from './applicationPage.module.scss';
import MyApplication from './myApplication/myApplication';

export default function ApplicationPage() {
    return (
        <div className={a.wrapper}>
           <div className='container'>
             <MyApplication />
           </div>
        </div>
    )
}