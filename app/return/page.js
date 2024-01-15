import r from './return.module.scss';
import Return from './return';

export default function ReturnPage() {
    return (
        <div className={r.wrapper}>
           <div className={r.return__container}>
              <Return />
           </div>
        </div>
    )
}