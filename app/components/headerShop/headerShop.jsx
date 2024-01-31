import hs from "./headerShop.module.scss";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pathname } from "react-router-dom";
//components----------------------------------------------------------------
import ShopNavigation from "./shopNavigation";
import Icones from "@/public/Data";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setFindingGoods } from "@/lib/features/searchGoodsSlice";
import { usePathname } from "next/navigation";
import { bucketInfo } from "@/lib/features/card/cardSlice";
import Bucket from "../bucket/bucket";
//info-amount-goods-length--------------------------
import { bucketLengthInfo } from "@/lib/features/card/cardSlice";
import { clickBucketInfo } from "@/lib/features/card/cardSlice";

const HeaderShop = () => {
  const [catalogMenu, setCatalogMenu] = useState(false);
  const toggleCatalogMenu = () => {
    setCatalogMenu(!catalogMenu);
  };
  //search-goods------------------------------------------------------------------
  const [findGoods, setFindGoods] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  async function searchingGoods() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-items?populate=*"
      );
      const dataResponse = response.data.data;
      // console.log(dataResponse.map((item) => item.attributes.title));
      const arrayMatchingGoods = dataResponse.filter((item) =>
        item.attributes.title.toLowerCase().includes(inputValue.toLowerCase())
      );
    } catch (error) {
      console.error("fetching data is failed");
    }
  }
  //set-redux-data--------------------------------------------------------------
  const dispatch = useAppDispatch();
  const handleSetFindingGoods = () => {
    dispatch(setFindingGoods(inputValue));
  };
  //pathname-change-catalog-button----------------------------
  const pathname = usePathname();
  //bucket-state-----------------------------
  const bucketRedux = useAppSelector(bucketInfo);
  const [bucket,setBucket] = useState(false);
  const showBucket = () => {
    setBucket(!bucket)
  }
  //set-data-from-bucket-length-------------------
  const [amountGoods, setAmountGoods] = useState()
  const [quantity,setQuantity] = useState()
  const bucketData = useAppSelector(bucketLengthInfo)
  const clickInfo = useAppSelector(clickBucketInfo)
  useEffect(() => {
if(bucketData && bucketData.length > 0) {
  let totalQuantity = 0;
 bucketData.forEach((item) => {
   totalQuantity += item.quantity
 })
 setQuantity(totalQuantity)
 } else if(quantity === 1) {
  setQuantity(0)
 }
  },[bucketData])
  
  useEffect(() => {
  if (bucketData && bucketData.length >=0) {
    setAmountGoods(bucketData.length)
  }
  },[bucketData,clickBucketInfo])
  useEffect(()=> {
if(clickInfo && clickInfo === true) {
  setAmountGoods(bucketData.length + 1)
}
  },[clickInfo])
  return ( 
    <div className={hs.headerShop__column}>
      <div className={hs.headerShop__wrapper}>
        <div className={hs.navigation}>
          <div className={hs.image__wrapper + " " + hs.logo__wrapper}>
            <Image
              src={Icones.logo}
              width={101}
              height={31}
              className={hs.logo}
              alt="logo"
            />
          </div>
          <div className={hs.miningEquipment}>
            <Link href="#" style={{ textDecoration: "none" }}>
              Оборудование
              <br /> для майнинга
            </Link>
          </div>
          <ShopNavigation />
        </div>
        <div className={hs.socialMedia__wrapper}>
          <span className={hs.text}>
            Получите консультацию <br />в мессенджерах
          </span>
          <div className={hs.image__wrapper}>
            <Image src={Icones.whatsUp} width={32} height={32} alt="icon" />
          </div>
          <div className={hs.image__wrapper}>
            <Image src={Icones.viber} width={32} height={32} alt="icon" />
          </div>
          <div className={hs.image__wrapper}>
            <Image src={Icones.telegram} width={32} height={32} alt="icon" />
          </div>
        </div>
      </div>
      <div className={hs.sorting__wrapper}>
        {pathname === "/catalog" ? (
          <div className={hs.catalogActive}>
            <div
              className={catalogMenu ? hs.burgerClose : hs.burger}
              onClick={toggleCatalogMenu}
            >
              <span className={hs.burger__line}></span>
            </div>
            <span className={hs.text}>Каталог оборудования</span>
          </div>
        ) : (
          <div className={hs.catalog}>
            <div
              className={catalogMenu ? hs.burgerClose : hs.burger}
              onClick={toggleCatalogMenu}
            >
              <span className={hs.burger__line}></span>
            </div>
            <span className={hs.text}>Каталог оборудования</span>
          </div>
        )}

        <div className={hs.search__wrapper}>
          <input
            type="text"
            placeholder="Поиск по товарам или категориям...."
            className={hs.searchInput}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ border: "none" }}
          />
          <Image
            src={Icones.search}
            width={24}
            height={24}
            className={hs.searhIcon}
            onClick={() => {
              searchingGoods();
              handleSetFindingGoods();
            }}
            alt="icon"
          />
        </div>
        <div className={hs.flag}>
          <Image src={Icones.flag} width={24} height={24} alt="icon" />
        </div>
        <div className={hs.menu}>
          <Image src={Icones.menu} width={24} height={24} alt="icon" />
        </div>
        <div className={hs.bucket} onClick={() => showBucket()}>
          {bucketRedux ? (
            <Image
              src={Icones.bucketActive}
              width={24}
              height={24}
              alt="icon"
            />
          ) : (
            <Image src={Icones.trolley} width={24} height={24} alt="icon" />
          )}
          {bucketData ? <span className={hs.text}>
            В корзине
            <br /> {clickInfo ? quantity + 1 : quantity} товар(ов)
          </span> : <span className={hs.text}>
            В корзине
            <br /> нет товаров
          </span>}
         
         </div>
      </div>
      {bucket && <Bucket />}
     </div>
  );
};

export default HeaderShop;
