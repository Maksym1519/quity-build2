import p from './pickupMiner.module.scss';
import { ShopImagesBG } from '@/public/Data';
import Image from 'next/image';
import InvestingForm from './investingForm/investingForm';

const PickupMiner = () => {
    return (
        <div className={p.wrapper}>
            <div className={p.pickupMiner__container}>
              <h3 className={p.title}>Подберите ASIC-майнер <br/>и рассчитайте сроки окупаемости <br/>и Вашу будущую прибыль за период 2021-2023 год </h3>
              <div className={p.steps__wrapper}>
                 <div className={p.stepsItem}>
                   <Image src={ShopImagesBG.payback} width={64} height={64} alt="icon"/>
                   <p className={p.text}>Чек-лист «ТОП5 ASIC-майнеров <br/>2021 года»</p>
                 </div>
                 <div className={p.stepsItem}>
                   <Image src={ShopImagesBG.payback} width={64} height={64} alt="icon"/>
                   <p className={p.text}>«Как оптимизировать<br/> домашнюю майнинг-ферму <br/>с минимальными вложениями»</p>
                 </div>
                 <div className={p.stepsItem}>
                   <Image src={ShopImagesBG.payback} width={64} height={64} alt="icon"/>
                   <p className={p.text}>Подборка ASIC-майнеров <br/>в 3х вариантов с расчетом<br/> прибыльности </p>
                 </div>
              </div>
              <InvestingForm />
            </div>
        </div>
    )
}
export default PickupMiner;