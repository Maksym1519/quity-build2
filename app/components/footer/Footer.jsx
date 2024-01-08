"use client";
import f from "./footer.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { infoCurrency } from "@/lib/features/currencySlice";
import { useState } from "react";
//components------------------------------------------------
import Image from "next/image";
import Icones from "@/public/Data";
import { Currency } from "@/lib/features/currencySlice";
import { currencyLogos } from "@/public/Data";

const Footer = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const selected = useAppSelector(infoCurrency);

  //  select-currencies---------------------------------------
  const [selectedFromApi, setSelectedFromApi] = useState();
  useEffect(() => {
    setSelectedFromApi(selected);
  }, [selected]);

  const selectedCurrency = selectedFromApi
    ? selectedFromApi.filter((crypto) => {
        const targetNames = ["BTC", "XRP", "LTC", "BCH", "ETH"];
        return targetNames.includes(crypto.symbol);
      })
    : [];
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
              <Link href={"#"} className={f.link}>
                <span className={f.text}>Доставка</span>
              </Link>
              <Link href={"#"} className={f.link}>
                <span className={f.text}>Оплата</span>
              </Link>
              <Link href={"#"} className={f.link}>
                <span className={f.text}>Обмен и возврат</span>
              </Link>
            </div>
            <div className={f.column}>
              <h4 className={f.title}>Сервисный центр</h4>
              <Link href={"#"} className={f.link}>
                <span className={f.text}>Условия ремонта</span>
              </Link>
              <Link href={"#"} className={f.link}>
                <span className={f.text}>Условия гарантии</span>
              </Link>
            </div>
            <div className={f.column}>
              <h4 className={f.title}>Хостинг</h4>
              <Link href={"#"} className={f.link}>
                <span className={f.text}>Панель управления</span>
              </Link>
              <Link href={"#"} className={f.link}>
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
              {/* //column1------------------------------------------------------------- */}
              <div className={f.column}>
                {selectedCurrency.map((crypto, index) => (
                  <div className={f.itemCurrency__wrapper} key={index}>
                    <div className={f.currency__description}>
                      <Image
                        src={currencyLogos[index]}
                        width={24}
                        height={24}
                      />
                      <span className={f.currency__abbr}>{crypto.symbol}</span>
                      <span className={f.currency__fullName}>
                        {crypto.name}
                      </span>
                    </div>
                    <div className={f.currency__info}>
                      {crypto.percent_change_24h.includes("-") ? (
                        <span className={f.red}>
                          {crypto.percent_change_24h}
                        </span>
                      ) : (
                        <span className={f.currency__ratio}>
                          {crypto.percent_change_24h}
                        </span>
                      )}
                      <span className={f.currency__course}>
                        {crypto.price_usd} {"$"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={f.footer}>
            <div className={f.company}>©2021 ООО «Boring Company»»</div>
            <div className={f.politics}>
              <span className={f.text}>Реквизиты</span>
              <span className={f.text}>Политика конфиденциальности</span>
            </div>
            <div className={f.development}>
              Разработка сайта – Funny Company
            </div>
          </div>
        </div>
      </div>
      <Currency />
    </div>
  );
};

export default Footer;
