import r from './return.module.scss';
import Return from './return';

export default function ReturnPage() {
    return (
        <div className={r.wrapper}>
           <div className="container">
              <Return />
           </div>
        </div>
    )
}