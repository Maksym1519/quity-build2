import hs from './headerShop.module.scss';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
//components----------------------------------------------------------------
import ShopNavigation from './shopNavigation';
import Icones from "@/public/Data";

const HeaderShop = () => {
    const [catalogMenu, setCatalogMenu] = useState(false);
    const toggleCatalogMenu = () => {
      setCatalogMenu(!catalogMenu);
    };
  return (
<div className={hs.headerShop__column}>
    <div className={hs.headerShop__wrapper}>
      <div className={hs.navigation}>
        <div className={hs.image__wrapper + " " + hs.logo__wrapper}>
          <Image src={Icones.logo} width={101} height={31} className={hs.logo}/>
        </div>
        <div className={hs.miningEquipment}>
         <Link href="#">Оборудование<br/> для майнинга</Link>
        </div>
      <ShopNavigation />
      </div>
      <div className={hs.socialMedia__wrapper}>
        <span className={hs.text}>Получите консультацию <br/>в мессенджерах</span>
        <div className={hs.image__wrapper}>
            <Image src={Icones.whatsUp} width={32} height={32}/>
        </div>
        <div className={hs.image__wrapper}>
            <Image src={Icones.viber} width={32} height={32}/>
        </div>
        <div className={hs.image__wrapper}>
            <Image src={Icones.telegram} width={32} height={32}/>
        </div>
      </div>
    </div>
    <div className={hs.sorting__wrapper}>
        <div className={hs.catalog}>
          <div
            className={catalogMenu ? hs.burgerClose : hs.burger}
            onClick={toggleCatalogMenu}
          >
            <span className={hs.burger__line}></span>
          </div>
          <span className={hs.text}>Каталог оборудования</span>
        </div>
        <div className={hs.search__wrapper}>
            <input type="text" placeholder='Поиск по товарам или категориям....' className={hs.searchInput}/>
            <Image src={Icones.search} width={24} height={24} className={hs.searhIcon}/>
        </div>
        <div className={hs.flag}>
          <Image src={Icones.flag} width={24} height={24}/>
        </div>
        <div className={hs.menu}>
        <Image src={Icones.menu} width={24} height={24}/>
        </div>
        <div className={hs.bucket}>
        <Image src={Icones.trolley} width={24} height={24}/>
        <span className={hs.text}>В корзине<br/> нет товаров</span>
        </div>
      </div>
</div>
  );
};

export default HeaderShop;
