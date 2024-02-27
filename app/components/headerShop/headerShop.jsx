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
import { useSelector, useDispatch } from "react-redux";
import { addTitle } from "@/lib/features/searchHistory/searchTitleSlice";
import { addToHistory } from "@/lib/features/searchHistory/searchHistorySlice";
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
      const arrayMatchingGoods = dataResponse.filter((item) =>
        item.attributes.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      addToSearchHistory(inputValue);
      setFindGoods(arrayMatchingGoods);
    } catch (error) {
      console.error("fetching data is failed");
    }
  }
  useEffect(() => {
    if (inputValue !== null) {
      searchingGoods();
    }
  }, [inputValue]);
  //set-redux-data--------------------------------------------------------------
  const dispatch = useDispatch();
  const handleSetFindingGoods = (item) => {
    dispatch(setFindingGoods(inputValue));
    dispatch(addTitle(item))
  };
  //pathname-change-catalog-button----------------------------
  const pathname = usePathname();
  //bucket-state-----------------------------
  const bucketRedux = useAppSelector(bucketInfo);
  const [bucket, setBucket] = useState(false);
  const showBucket = () => {
    setBucket(!bucket);
  };
  //set-data-from-bucket-length-------------------
  const [amountGoods, setAmountGoods] = useState();
  const [quantity, setQuantity] = useState();
  const bucketData = useAppSelector(bucketLengthInfo);
  const dataStorage = useSelector((state) => state.localStorage.value)
  const filteredBucket = bucketData.filter((item) => item.id === dataStorage);

  useEffect(() => {
    if (filteredBucket.length > 0) {
      const userBucket = filteredBucket[0];
      const arrayForQuantity = userBucket.userGoods;
      const sumQuantity = arrayForQuantity.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setQuantity(sumQuantity);
    }
  }, [filteredBucket]);

  const clickInfo = useAppSelector(clickBucketInfo);

  useEffect(() => {
    if (filteredBucket.userGoods && filteredBucket.userGoods.length > 0) {
      let totalQuantity = 0;
      filteredBucket.userGoods.forEach((item) => {
        totalQuantity += item.quantity;
      });
      setQuantity(totalQuantity);
    } else if (quantity === 1) {
      setQuantity(0);
    }
  }, [bucketData]);

  useEffect(() => {
    if (filteredBucket.userGoods && filteredBucket.userGoods.length >= 0) {
      setAmountGoods(filteredBucket.userGoods.length);
    }
  }, [filteredBucket, clickBucketInfo]);
  useEffect(() => {
    if (clickInfo === true) {
      setQuantity((prevQuantity) =>
        clickInfo ? prevQuantity + 1 : Math.max(prevQuantity - 1, 0)
      );
    }
  }, [clickInfo]);
  //history-search-----------------------------------------------------------
  const searchHistory = useSelector((state) => state.searchHistory);
  const addToSearchHistory = (item) => {
    dispatch(addToHistory(item));
  };
  
  //click-outSide------------------------------------------------------------
  const [catalogList, setCatalogList] = useState(false)
  const clickCatalog = () => {
    setCatalogList(!catalogList)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      const catalog = document.getElementById(`catalog`);
      if (catalog && !catalog.contains(event.target)) {
        setCatalogList(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [catalogList]);
//setInputValue------------------------------------------------
const inputValueRedux = useSelector((state) => state.searchTitle); 


  return (
    <div className={hs.headerShop__column}>
      <div className={hs.headerShop__wrapper}>
        <div className={hs.navigation}>
          <div className={hs.image__wrapper + " " + hs.logo__wrapper}>
            <Link href={"/shop"}>
              <Image
                src={Icones.logo}
                width={101}
                height={31}
                className={hs.logo}
                alt="logo"
              />
            </Link>
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
          <Link href={"/catalog"} className={hs.linkCatalog}>
            <div className={hs.catalog}>
              <div
                className={catalogMenu ? hs.burgerClose : hs.burger}
                onClick={toggleCatalogMenu}
              >
                <span className={hs.burger__line}></span>
              </div>
              <span className={hs.text}>Каталог оборудования</span>
            </div>
          </Link>
        )}

        <div className={hs.search__wrapper}>
          <input
            type="text"
            placeholder="Поиск по товарам или категориям...."
            className={hs.searchInput}
            //value={inputValueTitle ? inputValueTitle[0] : ''}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ border: "none" }}
            onClick={() => {clickCatalog()}}
             />
          <Image
            src={Icones.search}
            width={24}
            height={24}
            className={hs.searhIcon}
            onClick={() => {
              handleSetFindingGoods();
            }}
            alt="icon"
          />
          {/* //------------------------------------------------------------ */}
          {catalogList && (
            <div className={hs.history__wrapper} id="catalog">
              <ul>
                {findGoods.map((item, index) => (
                  <li
                    key={index}
                    className={hs.historyItem}
                    onClick={() => handleSetFindingGoods(item)}
                  >
                    {item.attributes.title}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* //------------------------------------------------------------------------ */}
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

          <span className={hs.text}>
            В корзине
            <br /> {clickInfo ? quantity + 1 : quantity} товаров
          </span>
        </div>
      </div>
      {bucket && <Bucket />}
    </div>
  );
};

export default HeaderShop;
