"use client";
import i from './investingForm.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import Icones from '@/public/Data';

const InvestingForm = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const switchActiveIndex = (index) => {
        setActiveIndex(index)
    }
    return (
        <div className={i.wrapper}>
           <div className={i.investingForm__body}>
              <h4 className={i.title}>Какую сумму вы хотите инвестировать в майнинг?</h4>
              <div className={i.sum__wrapper}>
                 <input type="text" className={activeIndex === 0 ? i.sumItemActive : i.sumItem} value="До 10 000$" onClick={() => switchActiveIndex(0)}/>
                 <input type="text" className={activeIndex === 1 ? i.sumItemActive : i.sumItem} value="10-20 тыс.$" onClick={() => switchActiveIndex(1)}/>
                 <input type="text" className={activeIndex === 2 ? i.sumItemActive : i.sumItem} value="20-30 тыс. $" onClick={() => switchActiveIndex(2)}/>
                 <input type="text" className={activeIndex === 3 ? i.sumItemActive : i.sumItem} value="30-50 тыс. $" onClick={() => switchActiveIndex(3)}/>
                 <input type="text" className={activeIndex === 4 ? i.sumItemActive : i.sumItem} value="более 50 тыс. $" onClick={() => switchActiveIndex(4)}/>
              </div>
              <div className={i.contacts__wrapper}>
                 <div className={i.phones__wrapper}>
                    <h4 className={i.title__contacts}>Введите номер телефона</h4>
                    <div className={i.input__wrapper}>
                        <div className={i.inputs__body}>
                            <span className={i.phoneCode}>+3</span>
                           <input placeholder='(     )' />
                           <input type="number" />
                           <input type="number" />
                           <input type="number" />
                        </div>
                    </div>
                 </div>
                 <div className={i.socialMedia__wrapper}>
                 <h4 className={i.title__contacts}>Куда Вам выслать расчет?</h4>
                 <div className={i.socialMedia__body}>
                   <Image src={Icones.whatsUp} width={40} height={40} className={i.icon} alt="icon"/>
                   <Image src={Icones.viber} width={40} height={40} className={i.icon} alt="icon"/>
                   <Image src={Icones.telegram} width={40} height={40} className={i.icon} alt="icon"/>
                 </div>
                 </div>
                </div>
                <button className={i.countButton}>Подобрать и рассчитать окупаемость + получить бонусы </button>
                <div className={i.messengers__wrapper}>
                    <p className={i.text}>Или пишите - подберем Вам оборудование в мессенджере</p>
                    <div className={i.icones__wrapper}>
                        <Image src={Icones.blackWhatsup} width={32} height={32} className={i.icon} alt="icon"/>
                        <Image src={Icones.blackViber} width={32} height={32} className={i.icon} alt="icon"/>
                        <Image src={Icones.blackTelegram} width={32} height={32} className={i.icon} alt="icon"/>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default InvestingForm;