"use client";
import c from "./catalog.module.scss";
import axios from "axios";
import CatalogNavigation from "./navigation/catalogNavigation";
import { ShopCatalogIcones } from "@/public/Data";
import { SliderImages } from "@/public/Data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { asicCatalog } from "@/lib/features/shopCatalogSlice";
import { gpuCatalog } from "@/lib/features/shopCatalogSlice";
import { hardCatalog } from "@/lib/features/shopCatalogSlice";
import { findingCatalog } from "@/lib/features/shopCatalogSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useAppSelector } from "@/lib/hooks";
import { selectFindingGoods } from "@/lib/features/searchGoodsSlice";

const Catalog = () => {
  //show-all-cards-------------------------------------------------------------
  const [allMiners, setAllMiners] = useState(true);
  const [allGpus, setAllGpus] = useState(true);
  const [allHards, setAllHards] = useState(true);
  const [allFinded, setAllFinded] = useState(true);
  const handleShowMiners = () => {
    setAllMiners(false);
  };
  const handleShowGpus = () => {
    setAllGpus(false);
  };
  const handleShowHards = () => {
    setAllHards(false);
  };
  const handleShowFinded = () => {
    setAllFinded(false);
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
  const handleFindingCatalog = () => {
    dispath(findingCatalog());
  };

  async function getCatalogItems() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/catalog-items?populate=*"
      );
      const dataResponse = response.data.data;
      const dataResponseImages = dataResponse.map(
        (item) => item.attributes.itemImage.data.attributes.url
      );
      if (dataResponseImages) {
        setItemsImages(dataResponseImages);
        setCatalogItems(dataResponse);
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
  const gpuCatalogItemsLength = gpuCatalogItems.length;
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
  const hardCatalogItemsLength = hardCatalogItems.length;
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
  //set-finding-goods---asic-----------------------------------------
  const [displayAmount, setDisplayAmount] = useState(0);
  const [findedMiners, setFindedMiners] = useState();
  const selectedMiners = useAppSelector(selectFindingGoods);
  useEffect(() => {
    setDisplayAmount(7);
  }, []);
  // useEffect(() => {
  //   if (selectedMiners) {
  //     setFindedMiners(selectedMiners);
  //     window.scrollTo({
  //       top: 800,
  //       behavior: "smooth", // добавляет плавный скроллинг
  //     });
  //   }
  // }, [selectedMiners]);
  const filteredMiners = catalogItems.filter((item) =>
    item.attributes.title.toLowerCase().includes(selectedMiners)
  );
  // useEffect(() => {
  //   if (filteredMiners.length === 0 && selectedMiners !== null) {
  //     alert("Товар не найден");
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth", // добавляет плавный скроллинг
  //     });
  //   }
  // }, [selectedMiners]);
  const displayMiners =
    findedMiners && currentComponent === "asicCatalog"
      ? filteredMiners
      : catalogItems;
  const displayMinersLength = displayMiners.length - displayAmount;

  //-GPU----------------------------------------------------------------------
  const [findedGpu, setFindedGpu] = useState();
  const selectedGpu = useAppSelector(selectFindingGoods);
  const filteredGpu = gpuCatalogItems.filter((item) =>
    item.attributes.title.toLowerCase().includes(selectedGpu)
  );
  useEffect(() => {
    if (selectedGpu) {
      setFindedGpu(selectedGpu);
    }
  }, [selectedGpu]);
  const displayGpu =
    findedGpu && currentComponent === "gpuCatalog"
      ? filteredGpu
      : gpuCatalogItems;
  const displayGpuLength = displayGpu.length - displayAmount;
  //Hard---------------------------------------------------------------------------------
  const [findedHard, setFindedHard] = useState();
  const selectedHard = useAppSelector(selectFindingGoods);
  const filteredHard = hardCatalogItems.filter((item) =>
    item.attributes.title.toLowerCase().includes(selectedHard)
  );
  useEffect(() => {
    if (selectedHard) {
      setFindedHard(selectedHard);
    }
  }, [selectedHard]);
  const displayHard =
    findedHard && currentComponent === "hardCatalog"
      ? filteredHard
      : hardCatalogItems;
  const displayHardLength = displayHard.length - displayAmount;
  //searching-goods---------------------------------------------------------------------
  const [showFindedGoods, setShowFindedGoods] = useState(false);
  const [allFindedItems, setAllFindedItems] = useState([]);
 
  const selectedData = useAppSelector(selectFindingGoods);
  const setAllFindedItemsLength = allFindedItems.length;
  useEffect(() => {
    if (selectedData !== null) {
      setShowFindedGoods(selectedData);
    }
  }, [selectedData]);
  const allFindedGoods = catalogItems
    .filter((item) =>
      item.attributes.title.toLowerCase().includes(selectedData)
    )
    .concat(
      gpuCatalogItems.filter((item) =>
        item.attributes.title.toLowerCase().includes(selectedData)
      )
    )
    .concat(
      hardCatalogItems.filter((item) =>
        item.attributes.title.toLowerCase().includes(selectedData)
      )
    );
    console.log(allFindedGoods)
  useEffect(() => {
    setAllFindedItems(allFindedGoods);
  }, [selectedData]);
  useEffect(() => {
    if (showFindedGoods) {
      handleFindingCatalog();
    }
  }, [showFindedGoods]);

  //come-to-0----------------------------------------------------------------------------
  useEffect(() => {
    setFindedMiners(null);
    setFindedGpu(null);
    setFindedHard(null);
  }, [currentComponent]);

  return (
    <div className={c.wrapper}>
      <div className={c.catalog__body}>
        {currentComponent === "findingCatalog" && (
           <div className={c.outcome__wrapper}>
            <div className={c.back__wrapper} onClick={handleAsicCatalog}>
           <Image src={SliderImages.prev} width={40} height={40} alt="icon"/>
              <span>назад</span>
            </div>
            <h3 className={c.serchResultTitle}>
              Результаты поиска по запросу "<span>{selectedData}"</span>
            </h3>
            <div className={c.outcomeAmount__wrapper}>
              Всего результатов: <span>{setAllFindedItemsLength}</span>
            </div>
          </div>
        )}
        {currentComponent === "findingCatalog" && (
          <div className={c.goods__wrapper}>
            {showFindedGoods &&
              allFindedItems.map((item, index) => (
                <div className={c.item} key={index}>
                  <div className={c.image__wrapper}>
                    <Image
                      src={itemsImages[index]}
                      width={182}
                      height={168}
                      className={c.minerImage}
                      alt="icon"
                    />
                  </div>
                  <div className={c.description}>
                    <span className={c.presence}>
                      {item.attributes.presence}
                    </span>
                    <span className={c.title}>{item.attributes.title}</span>
                    <div className={c.parameters}>
                      <div className={c.parameters__item}>
                        <span className={c.numbers}>{item.attributes.ths}</span>
                        <span className={c.text}>TH/s</span>
                      </div>
                      <div className={c.parameters__item}>
                        <span className={c.numbers}>{item.attributes.w}</span>
                        <span className={c.text}>W</span>
                      </div>
                      <div className={c.parameters__item}>
                        <span className={c.numbers}>{item.attributes.jth}</span>
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
          </div>
        )}
        {currentComponent !== "findingCatalog" && (
          <h4 className={c.title}>
            Более {currentComponent === "asicCatalog" && catalogItemsLength}{" "}
            {currentComponent === "gpuCatalog" && gpuCatalogItemsLength}{" "}
            {currentComponent === "hardCatalog" && hardCatalogItemsLength}{" "}
            моделей в наличии и под заказ
          </h4>
        )}
        {currentComponent !== "findingCatalog" && (
          <CatalogNavigation
            clickAsic={handleAsicCatalog}
            clickGpu={handleGpuCatalog}
            clickHard={handleHardCatalog}
          />
        )}
        {currentComponent === "asicCatalog" && (
          <div className={c.goods__wrapper}>
            {allMiners
              ? displayMiners.slice(0, 7).map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={itemsImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                        alt="icon"
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
                        alt="icon"
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
                <h4 className={c.title}>Смотреть еще ...</h4>
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
              ? displayGpu.slice(0, 7).map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={gpuImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                        alt="icon"
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
                        alt="icon"
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
                <h4 className={c.title}>Смотреть еще ...</h4>
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
              ? displayHard.slice(0, 7).map((item, index) => (
                  <div className={c.item} key={index}>
                    <div className={c.image__wrapper}>
                      <Image
                        src={hardImages[index]}
                        width={182}
                        height={168}
                        className={c.minerImage}
                        alt="icon"
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
                        alt="icon"
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
                <h4 className={c.title}>Смотреть еще ...</h4>
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
