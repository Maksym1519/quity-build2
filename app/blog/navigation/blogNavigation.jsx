"use client";
import b from "./blogNavigation.module.scss";
import { useState } from "react";
import {
  setAll,
  setEquipment,
  setInvestition,
  setBlockChain,
  setCloudMining,
} from "@/lib/features/blog/blogStateSlice";
import { useAppDispatch } from "@/lib/hooks";

const BlogNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickActiveIndex = (index) => {
    setActiveIndex(index);
  };
  //set-redux-state--------------------------------------
  const dispatch = useAppDispatch();
  const handleAllBlogItems = () => {
    dispatch(setAll());
  };
  const handleEquipmentBlogItems = () => {
    dispatch(setEquipment());
  };
  const handleInvestitionBlogItems = () => {
    dispatch(setInvestition());
  };
  const handleBlockChainBlogItems = () => {
    dispatch(setBlockChain());
  };
  const handleCloudMiningBlogItems = () => {
    dispatch(setCloudMining());
  };
  return (
    <div className={b.wrapper}>
      <div className={b.blogNavigation__body}>
        <h3 className={b.blogNavigation__title}>
          Последние новости из мира криптовалют в Quity-блоге
        </h3>
        <div className={b.navigationItems}>
          <div
            className={activeIndex === 0 ? b.itemActive : b.item}
            onClick={() => {
              clickActiveIndex(0);
              handleAllBlogItems();
            }}
          >
            Все
          </div>
          <div
            className={activeIndex === 1 ? b.itemActive : b.item}
            onClick={() => {
              clickActiveIndex(1);
              handleEquipmentBlogItems();
            }}
          >
            Оборудование
          </div>
          <div
            className={activeIndex === 2 ? b.itemActive : b.item}
            onClick={() => {
              clickActiveIndex(2);
              handleInvestitionBlogItems();
            }}
          >
            Блокчейн
          </div>
          <div
            className={activeIndex === 3 ? b.itemActive : b.item}
            onClick={() => {
              clickActiveIndex(3);
              handleBlockChainBlogItems();
            }}
          >
            Инвестиции
          </div>
          <div
            className={activeIndex === 4 ? b.itemActive : b.item}
            onClick={() => {
              clickActiveIndex(4);
              handleCloudMiningBlogItems();
            }}
          >
            Облачный майнинг
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogNavigation;
