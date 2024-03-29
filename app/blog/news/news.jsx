"use client";
import n from "./news.module.scss";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { setPostDetail } from "@/lib/features/blog/blogStateSlice";
import { setPostBlockChainDetail } from "@/lib/features/blog/blogStateSlice";
//components------------------------------------------------
import BlogNavigation from "../navigation/blogNavigation";
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
import PostDetail from "../postDetail/postCryptoDetail";
import PostBlockChainDetail from "../postDetail/postBlockChainDetail";
import NewsSlider from "../newsSlider/newsSlider";
import NewsSliderBlockChain from "../newsSlider/newsSliderBlockChain";

const News = () => {
  const currentComponent = useAppSelector((state) => state.blogState.currentComponent)
  //set-post-detail-----------------------------------------------------------
  const dispatch = useAppDispatch()
  const clickPostDetail = () => {
    dispatch(setPostDetail())
  }
  const clickPostBlockChainDetail = () => {
    dispatch(setPostBlockChainDetail())
  }
    return (
        <div className={n.wrapper}>
         {currentComponent !== "postDetail" && <BlogNavigation />}
          <div className={n.news__body}>
            {currentComponent === "all" && <BlogItemAll clickPostDetail={clickPostDetail}/>}
            {currentComponent === "equipment" && <BlogEquipment />}
            {currentComponent === "blockchain" && <BlogBlockChain clickPostDetail={clickPostBlockChainDetail}/>}
            {currentComponent === "investition" && <BlogInvestition />}
            {currentComponent === "cloudMining" && <BlogCloudMining />}
            {currentComponent === "all" && <LastCryptoPosts />}
            {currentComponent === "equipment" && <LastEquipmentPosts />}
            {currentComponent === "blockchain" && <LastBlockchainPosts />}
            {currentComponent === "investition" && <LastInvestitionPosts />}
            {currentComponent === "cloudMining" && <LastCloudMiningPosts />}
            {currentComponent === "postDetail" && <PostDetail />}
            {currentComponent === "postBlockChainDetail" && <PostBlockChainDetail />}
            </div>
            {currentComponent === "postDetail" && <NewsSlider />}
            {currentComponent === "postBlockChainDetail" && <NewsSliderBlockChain />}
        </div>
    )
}
export default News;