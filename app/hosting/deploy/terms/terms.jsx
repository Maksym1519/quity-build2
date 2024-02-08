import t from './terms.module.scss';
import Image from 'next/image';
import { ShopMinersIcones } from '@/public/Data';

const Terms  = () => {
    return (
        <div className={t.miners__terms}>
        <div className={t.miners__terms__body}>
          <div className={t.item}>
            <Image src={ShopMinersIcones.sertificate} width={48} height={48} alt="icon"/>
            <span className={t.text}>Оплата по факту <br/>за размещение</span>
          </div>
          <div className={t.item}>
            <Image src={ShopMinersIcones.custom} width={48} height={48} alt="icon"/>
            <span className={t.text}>Консультации 24/7 <br/>от наших инженеров</span>
          </div>
          <div className={t.item}>
            <Image src={ShopMinersIcones.coins} width={48} height={48} alt="icon"/>
            <span className={t.text}>Легальная оплата <br/>за «розетку» с НДС</span>
          </div>
          <div className={t.item}>
            <Image src={ShopMinersIcones.checkingLike} width={48} height={48} alt="icon"/>
            <span className={t.text}>Материальная <br/>ответственность <br/>по договору</span>
          </div>
        </div>
      </div>
    )
}
export default Terms;