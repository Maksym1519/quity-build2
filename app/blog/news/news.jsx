"use client";
import n from "./news.module.scss";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
//components------------------------------------------------
import BlogItemAll from "./blogItem/blogItemAll";
import BlogEquipment from "./blogEquipment/blogEquipment";
import BlogBlockChain from "./blogBlockChain/blogBlockChain";
import BlogInvestition from "./blogInvestition/blogInvestition";
import BlogCloudMining from "./blogCloudMining/blogCloudMining";
import LastCryptoPosts from "../lastPosts/lastCryptoPosts";
import LastEquipmentPosts from "../lastPosts/lastEquipmentPosts";
import LastBlockchainPosts from "../lastPosts/lastBlockchainPosts";
import LastInvestitionPosts from "../lastPosts/lastInvestitionPosts";
import LastCloudMiningPosts from "../lastPosts/lastCloudMiningPosts";

const News = () => {
  const currentComponent = useAppSelector((state) => state.blogState.currentComponent)
    return (
        <div className={n.wrapper}>
          <div className={n.news__body}>
            {currentComponent === "all" && <BlogItemAll />}
            {currentComponent === "equipment" && <BlogEquipment />}
            {currentComponent === "blockchain" && <BlogBlockChain />}
            {currentComponent === "investition" && <BlogInvestition />}
            {currentComponent === "cloudMining" && <BlogCloudMining />}
            {currentComponent === "all" && <LastCryptoPosts />}
            {currentComponent === "equipment" && <LastEquipmentPosts />}
            {currentComponent === "blockchain" && <LastBlockchainPosts />}
            {currentComponent === "investition" && <LastInvestitionPosts />}
            {currentComponent === "cloudMining" && <LastCloudMiningPosts />}
          </div>
        </div>
    )
}
export default News;