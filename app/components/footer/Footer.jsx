"use client";
import f from "./footer.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import Link from "next/link";
import { Currency } from "@/lib/features/currencySlice";
//import Currency from "./Currency";
//import StoreProvider from "@/app/StoreProvider";
import { useAppSelector } from "@/lib/hooks";
import { infoCurrency } from "@/lib/features/currencySlice";


const Footer = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const selected = useAppSelector(infoCurrency)
 console.log(selected)
   return (
    <div className={f.wrapper}>
      <div className="container">
        <div className={f.body}>
          <div className={f.consultation}>
            <div className={f.consultation__info}>
              <span className={f.text__white}>Получите консультацию </span>
              <span className={f.text__dark}>
                по телефону или в мессенджерах
              </span>
            </div>
            <div className={f.contacts}>
              <span className={f.text}>+38 (097) 123 45 67</span>
              <span className={f.text}>order@gmail.com</span>
            </div>
            <div className={f.socialMedia}>
              <Image src={Icones.footerWhatsUp} width={40} height={40} />
              <Image src={Icones.footerViber} width={40} height={40} />
              <Image src={Icones.footerTelegram} width={40} height={40} />
            </div>
          </div>
          <div className={f.adresses}>
            <div className={f.column}>
              <h4 className={f.title}>Магазин</h4>
              <Link href={"#"}>
                <span className={f.text}>Доставка</span>
              </Link>
              <Link href={"#"}>
                <span className={f.text}>Оплата</span>
              </Link>
              <Link href={"#"}>
                <span className={f.text}>Обмен и возврат</span>
              </Link>
            </div>
            <div className={f.column}>
              <h4 className={f.title}>Сервисный центр</h4>
              <Link href={"#"}>
                <span className={f.text}>Условия ремонта</span>
              </Link>
              <Link href={"#"}>
                <span className={f.text}>Условия гарантии</span>
              </Link>
            </div>
            <div className={f.column}>
              <h4 className={f.title}>Хостинг</h4>
              <Link href={"#"}>
                <span className={f.text}>Панель управления</span>
              </Link>
              <Link href={"#"}>
                <span className={f.text}>Мои устройства</span>
              </Link>
            </div>
            <div className={f.column}>
              <span className={f.text}>Офис в Киеве:</span>
              <div className={f.line}>
                <Image src={Icones.location} width={16} height={16} />
                <span className={f.text}>ул. Вивальди, д. 307</span>
              </div>
              <span className={f.text}>Офис в Виннице:</span>
              <div className={f.line}>
                <Image src={Icones.location} width={16} height={16} />
                <span className={f.text}>ул. Вивальди, д. 307</span>
              </div>
            </div>
          </div>
          <div className={f.currency}>
            <div className={f.headerCurrency}>
              <span className={f.title}>Курсы криптовалют</span>
              <span className={f.date}>(на {`${day}-${month}-${year}`})</span>
              </div>
             <div className={f.courses}>
                 <div className={f.column}>
                   <div className={f.itemCurrency__wrapper}>
                    <div className={f.currency__description}>
                    <Image />
                    <span className={f.currency__abbr}></span>
                    <span className={f.currency__fullName}></span>
                    </div>
                     <div className={f.currency__info}>
                       <span className={f.currency__ratio}></span>
                       <span className={f.currency__course}></span>
                     </div>
                   </div>
                 </div>
             </div>
          </div>
          </div>
      </div>
      <Currency />
    </div>
    
    );
};

export default Footer;
