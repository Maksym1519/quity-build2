"use client";
import c from "./catalog.module.scss";
import axios from "axios";
import CatalogNavigation from "./navigation/catalogNavigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const Catalog = () => {
  //get-catalog-items----------------------------------------------------------
  const [catalogItems, setCatalogItems] = useState([]);
  const [itemsImages,setItemsImages] = useState([])
  console.log(itemsImages)
  async function getCatalogItems() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-items?populate=*"
      );
      const dataResponse = response.data.data;
      const dataResponseImages = dataResponse.map((item) => item.attributes.goodImage.data.attributes.url)
      if (dataResponseImages) {
        setCatalogItems(dataResponse);
        setItemsImages(dataResponseImages)
      }
      console.log(dataResponse)
    } catch (error) {
      console.error("get catalog items are failed");
    }
  }
  useEffect(() => {
    getCatalogItems();
  }, []);
 
  return (
    <div className={c.wrapper}>
      <div className={c.catalog__body}>
        <h4 className={c.title}>Более 120 моделей в наличии и под заказ</h4>
        <CatalogNavigation />
        <div className={c.goods__wrapper}>
          {catalogItems.map((item,index) => (
            <div className={c.item} key={index}>
              <div className={c.image__wrapper}>
                 <Image
                  src={itemsImages[index]}
                  width={182}
                  height={168}
                  className={c.minerImage}
                /> 
              </div>
              <div className={c.description}>
                <span className={c.presence}></span>
                <span className={c.title}>{item.attributes.title}</span>
                <div className={c.parameters}>
                  <div className={c.parameters__item}>
                    <span className={c.numbers}>{item.attributes.ths}</span>
                    <span className={c.text}>TH/s</span>
                  </div>
                  <div className={c.parameters__item}>
                    <span className={c.numbers}></span>
                    <span className={c.text}>W</span>
                  </div>
                  <div className={c.parameters__item}>
                    <span className={c.numbers}></span>
                    <span className={c.text}>J/TH</span>
                  </div>
                </div>
                <div className={c.price__wrapper}>
                  <span className={c.price}>{item.attributes.price}</span>
                  <span className={c.priceIcon}>$</span>
                </div>
              </div>
              <span className={c.label}></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
