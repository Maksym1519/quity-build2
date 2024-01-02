"use client";
import c from "./catalog.module.scss";
import axios from "axios";
import CatalogNavigation from "./navigation/catalogNavigation";
import { ShopCatalogIcones } from "@/public/Data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { asicCatalog } from "@/lib/features/shopCatalogSlice";
import { gpuCatalog } from "@/lib/features/shopCatalogSlice";
import { hardCatalog } from "@/lib/features/shopCatalogSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useAppSelector } from "@/lib/hooks";

const Catalog = () => {
  //show-all-cards-------------------------------------------------------------
  const [allMiners, setAllMiners] = useState(true);
  const [allGpus, setAllGpus] = useState(true);
  const [allHards, setAllHards] = useState(true);
  const handleShowMiners = () => {
    setAllMiners(false);
  };
  const handleShowGpus = () => {
    setAllGpus(false);
  };
  const handleShowHards = () => {
    setAllHards(false);
  };
  //get-catalog-items----------------------------------------------------------
  const [catalogItems, setCatalogItems] = useState([]);
  const [itemsImages, setItemsImages] = useState([]);
  const [stylePopularity, setStylePopularity] = useState(false);
  //variables---------------------------------------------------------------
  const catalogItemsLength = catalogItems.length;
  //switch-catalogs----------------------------------------------------------
  const currentComponent = useAppSelector(
    (state) => state.shopCatalog.currentComponent
  );
  const dispath = useAppDispatch();
  const handleAsicCatalog = () => {
    dispath(asicCatalog());
  };
  const handleGpuCatalog = () => {
    dispath(gpuCatalog());
  };
  const handleHardCatalog = () => {
    dispath(hardCatalog());
  };

  async function getCatalogItems() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-items?populate=*"
      );
      const dataResponse = response.data.data;
      const dataResponseImages = dataResponse.map(
        (item) => item.attributes.goodImage.data.attributes.url
      );
      if (dataResponseImages) {
        setCatalogItems(dataResponse);
        setItemsImages(dataResponseImages);
      }
    } catch (error) {
      console.error("get catalog items are failed");
    }
  }
  useEffect(() => {
    getCatalogItems();
  }, []);
  //get-catalog-GPU----------------------------------------------------------------
  const [gpuImages, setGpuImages] = useState([]);
  const [gpuCatalogItems, setGpuCatalogItems] = useState([]);
  //variables---------------------------------------------------------------
  const catalogGpuLength = gpuCatalogItems.length;
  async function getCatalogGpu() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-gpus?populate=*"
      );
      const dataResponse = response.data.data;
      const dataResponseImages = dataResponse.map(
        (item) => item.attributes.itemImage.data.attributes.url
      );
      if (dataResponseImages) {
        setGpuCatalogItems(dataResponse);
        setGpuImages(dataResponseImages);
      }
    } catch (error) {
      console.error("get gpu items are failed", error);
    }
  }
  useEffect(() => {
    getCatalogGpu();
  }, []);
  //get-hard-discs--------------------------------------------------------------------
  const [hardImages, setHardImages] = useState([]);
  const [hardCatalogItems, setHardCatalogItems] = useState([]);
  //variables---------------------------------------------------------------
  const catalogHardLength = hardCatalogItems.length;
  async function getCatalogHard() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-hards?populate=*"
      );
      const dataResponse = response.data.data;
      const dataResponseImages = dataResponse.map(
        (item) => item.attributes.itemImage.data.attributes.url
      );
      if (dataResponseImages) {
        setHardImages(dataResponseImages);
        setHardCatalogItems(dataResponse);
      }
    } catch (error) {
      console.error("get hards are failed", error);
    }
  }
  useEffect(() => {
    getCatalogHard();
  }, []);
  return (
    <div className={c.wrapper}>
      <div className={c.catalog__body}>
        <h4 className={c.title}>
          Более {currentComponent === "asicCatalog" && catalogItemsLength}{" "}
          {currentComponent === "gpuCatalog" && catalogGpuLength}{" "}
          {currentComponent === "hardCatalog" && catalogHardLength} моделей в
          наличии и под заказ
        </h4>
        <CatalogNavigation
          clickAsic={handleAsicCatalog}
          clickGpu={handleGpuCatalog}
          clickHard={handleHardCatalog}
        />
        {currentComponent === "asicCatalog" && (
          <div className={c.goods__wrapper}>
            {allMiners
              ? catalogItems.slice(0, 7).map((item, index) => (
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
                      <span className={c.presence}>
                        {item.attributes.presence}
                      </span>
                      <span className={c.title}>{item.attributes.title}</span>
                      <div className={c.parameters}>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.ths}
                          </span>
                          <span className={c.text}>TH/s</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>{item.attributes.w}</span>
                          <span className={c.text}>W</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.jth}
                          </span>
                          <span className={c.text}>J/TH</span>
                        </div>
                      </div>
                      <div className={c.price__wrapper}>
                        <span className={c.price}>{item.attributes.price}</span>
                        <span className={c.priceIcon}>$</span>
                      </div>
                    </div>
                    <span
                      className={
                        item.attributes.popularity === "Новинка"
                          ? c.label
                          : c.labelHit
                      }
                    >
                      {item.attributes.popularity}
                    </span>
                  </div>
                ))
              : catalogItems.map((item, index) => (
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
                      <span className={c.presence}>
                        {item.attributes.presence}
                      </span>
                      <span className={c.title}>{item.attributes.title}</span>
                      <div className={c.parameters}>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.ths}
                          </span>
                          <span className={c.text}>TH/s</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>{item.attributes.w}</span>
                          <span className={c.text}>W</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.jth}
                          </span>
                          <span className={c.text}>J/TH</span>
                        </div>
                      </div>
                      <div className={c.price__wrapper}>
                        <span className={c.price}>{item.attributes.price}</span>
                        <span className={c.priceIcon}>$</span>
                      </div>
                    </div>
                    <span
                      className={
                        item.attributes.popularity === "Новинка"
                          ? c.label
                          : c.labelHit
                      }
                    >
                      {item.attributes.popularity}
                    </span>
                  </div>
                ))}
            {allMiners && (
              <div className={c.showMore__wrapper} onClick={handleShowMiners}>
                <h4 className={c.title}>
                  Еще{" "}
                  {currentComponent === "asicCatalog" && catalogItemsLength - 7}{" "}
                  модели в наличии и под заказ
                </h4>
                <Image
                  src={ShopCatalogIcones.arrow}
                  width={48}
                  height={48}
                  className={c.catalogArrow}
                  alt="arrow"
                />
              </div>
            )}
          </div>
        )}
        {/* //gpu-catalog------------------------------------------------------------------------------------- */}
        {currentComponent === "gpuCatalog" && (
          <div className={c.goods__wrapper}>
            {allGpus
              ? gpuCatalogItems.slice(0, 7).map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={gpuImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                      />
                    </div>
                    <div className={c.description}>
                      <span className={c.presence}>
                        {item.attributes.presence}
                      </span>
                      <span className={c.title}>{item.attributes.title}</span>
                      <div className={c.parameters}>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.ths}
                          </span>
                          <span className={c.text}>TH/s</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>{item.attributes.w}</span>
                          <span className={c.text}>W</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.jth}
                          </span>
                          <span className={c.text}>J/TH</span>
                        </div>
                      </div>
                      <div className={c.price__wrapper}>
                        <span className={c.price}>{item.attributes.price}</span>
                        <span className={c.priceIcon}>$</span>
                      </div>
                    </div>
                    <span
                      className={
                        item.attributes.popularity === "Новинка"
                          ? c.label
                          : c.labelHit
                      }
                    >
                      {item.attributes.popularity}
                    </span>
                  </div>
                ))
              : gpuCatalogItems.map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={gpuImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                      />
                    </div>
                    <div className={c.description}>
                      <span className={c.presence}>
                        {item.attributes.presence}
                      </span>
                      <span className={c.title}>{item.attributes.title}</span>
                      <div className={c.parameters}>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.ths}
                          </span>
                          <span className={c.text}>TH/s</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>{item.attributes.w}</span>
                          <span className={c.text}>W</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.jth}
                          </span>
                          <span className={c.text}>J/TH</span>
                        </div>
                      </div>
                      <div className={c.price__wrapper}>
                        <span className={c.price}>{item.attributes.price}</span>
                        <span className={c.priceIcon}>$</span>
                      </div>
                    </div>
                    <span
                      className={
                        item.attributes.popularity === "Новинка"
                          ? c.label
                          : c.labelHit
                      }
                    >
                      {item.attributes.popularity}
                    </span>
                  </div>
                ))}
            {allGpus && (
              <div className={c.showMore__wrapper} onClick={handleShowGpus}>
                <h4 className={c.title}>
                  Еще{" "}
                  {currentComponent === "gpuCatalog" && catalogGpuLength - 7}{" "}
                  модели в наличии и под заказ
                </h4>
                <Image
                  src={ShopCatalogIcones.arrow}
                  width={48}
                  height={48}
                  className={c.catalogArrow}
                  alt="arrow"
                />
              </div>
            )}
          </div>
        )}

        {/* //hard-catalog------------------------------------------------------------------------------------- */}
        {currentComponent === "hardCatalog" && (
          <div className={c.goods__wrapper}>
            {allHards
              ? hardCatalogItems.slice(0, 7).map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={hardImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                      />
                    </div>
                    <div className={c.description}>
                      <span className={c.presence}>
                        {item.attributes.presence}
                      </span>
                      <span className={c.title}>{item.attributes.title}</span>
                      <div className={c.parameters}>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.ths}
                          </span>
                          <span className={c.text}>TH/s</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>{item.attributes.w}</span>
                          <span className={c.text}>W</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.jth}
                          </span>
                          <span className={c.text}>J/TH</span>
                        </div>
                      </div>
                      <div className={c.price__wrapper}>
                        <span className={c.price}>{item.attributes.price}</span>
                        <span className={c.priceIcon}>$</span>
                      </div>
                    </div>
                    <span
                      className={
                        item.attributes.popularity === "Новинка"
                          ? c.label
                          : c.labelHit
                      }
                    >
                      {item.attributes.popularity}
                    </span>
                  </div>
                ))
              : hardCatalogItems.map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={hardImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                      />
                    </div>
                    <div className={c.description}>
                      <span className={c.presence}>
                        {item.attributes.presence}
                      </span>
                      <span className={c.title}>{item.attributes.title}</span>
                      <div className={c.parameters}>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.ths}
                          </span>
                          <span className={c.text}>TH/s</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>{item.attributes.w}</span>
                          <span className={c.text}>W</span>
                        </div>
                        <div className={c.parameters__item}>
                          <span className={c.numbers}>
                            {item.attributes.jth}
                          </span>
                          <span className={c.text}>J/TH</span>
                        </div>
                      </div>
                      <div className={c.price__wrapper}>
                        <span className={c.price}>{item.attributes.price}</span>
                        <span className={c.priceIcon}>$</span>
                      </div>
                    </div>
                    <span
                      className={
                        item.attributes.popularity === "Новинка"
                          ? c.label
                          : c.labelHit
                      }
                    >
                      {item.attributes.popularity}
                    </span>
                  </div>
                ))}
            {allHards && (
              <div className={c.showMore__wrapper} onClick={handleShowHards}>
                <h4 className={c.title}>
                  Еще{" "}
                  {currentComponent === "hardCatalog" && catalogHardLength - 7}{" "}
                  модели в наличии и под заказ
                </h4>
                <Image
                  src={ShopCatalogIcones.arrow}
                  width={48}
                  height={48}
                  className={c.catalogArrow}
                  alt="arrow"
                />
              </div>
            )}
          </div>
        )}
        {/* //------------------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Catalog;
