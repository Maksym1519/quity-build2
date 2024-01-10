"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "@/lib/hooks";

const initialState = {
  currentComponent: "all",
  blogInfoAll: null,
  blogInfoEquipment: null,
  blogInfoBlockChain: null,
  blogInfoInvestition: null,
  blogInfoCloudMining: null,
};

const BlogStateSlice = createSlice({
  name: "blogState",
  initialState,
  reducers: {
    setAll: (state) => {
      state.currentComponent = "all";
    },
    setEquipment: (state) => {
      state.currentComponent = "equipment";
    },
    setBlockChain: (state) => {
      state.currentComponent = "blockchain";
    },
    setInvestition: (state) => {
      state.currentComponent = "investition";
    },
    setCloudMining: (state) => {
      state.currentComponent = "cloudMining";
    },
    setPostDetail: (state) => {
      state.currentComponent = "postDetail"
    },
    setBlogInfo: (state, action) => {
      state.blogInfoAll = action.payload;
    },
    setBlogInfoEquipment: (state, action) => {
      state.blogInfoEquipment = action.payload;
    },
    setBlogInfoBlockChain: (state, action) => {
      state.blogInfoBlockChain = action.payload;
    },
    setBlogInfoInvestition: (state, action) => {
      state.blogInfoInvestition = action.payload
    },
    setBlogInfoCloudMining: (state, action) => {
      state.blogInfoCloudMining = action.payload
    }
  },
});
export const blogInfoFromServer = (state) => state.blogState.blogInfoAll;
export const blogInfoEquipmentFromServer = (state) =>
  state.blogState.blogInfoEquipment;
export const blogInfoBlockChainFromServer = (state) =>
  state.blogState.blogInfoBlockChain;
export const blogInfoInvestitionFromServer = (state) =>
state.blogState.blogInfoInvestition; 
export const blogInfoCloudMiningFromServer = (state) =>
state.blogState.blogInfoCloudMining
export const {
  setAll,
  setPostDetail,
  setEquipment,
  setInvestition,
  setBlockChain,
  setCloudMining,
  setBlogInfo,
  setBlogInfoEquipment,
  setBlogInfoBlockChain,
  setBlogInfoInvestition,
  setBlogInfoCloudMining
} = BlogStateSlice.actions;
export default BlogStateSlice.reducer;

//get-blogItem-info-------------------------------------------
export const BlogNews = () => {
  const [blogAllArray, setBlogAllArray] = useState([]);
  const [blogEquipmentArray, setBlogEquipmentArray] = useState([]);
  const [blogBlockChainArray, setBlogBlockChainArray] = useState([]);
  const [blogInvestitionArray, setBlogInvestitionArray] = useState([]);
  const [blogCloudMiningArray, setBlogCloudMiningArray] = useState([])
  const dispatch = useAppDispatch();
  dispatch(setBlogInfo(blogAllArray));
  dispatch(setBlogInfoEquipment(blogEquipmentArray));
  dispatch(setBlogInfoBlockChain(blogBlockChainArray));
  dispatch(setBlogInfoInvestition(blogInvestitionArray));
  dispatch(setBlogInfoCloudMining(blogCloudMiningArray))
  async function getBlogItems() {
    try {
      const response = await axios.get(
        "https://quitystrapi.onrender.com/api/blog-items?populate=*"
      );
      const dataResponse = response.data.data;
      setBlogAllArray(dataResponse);

      const responseEquipment = await axios.get(
        "https://quitystrapi.onrender.com/api/blog-equipments?populate=*"
      );
      const dataResponseEquipment = responseEquipment.data.data;
      setBlogEquipmentArray(dataResponseEquipment);

      const responseBlockChain = await axios.get("https://quitystrapi.onrender.com/api/blog-block-chains?populate=*")
      const dataResponseBlockChain = responseBlockChain.data.data
      setBlogBlockChainArray(dataResponseBlockChain)

      const responseInvestition = await axios.get("https://quitystrapi.onrender.com/api/blog-investitions?populate=*")
      const dataResponseInvestition = responseInvestition.data.data
      setBlogInvestitionArray(dataResponseInvestition)

      const responseCloudMining = await axios.get("https://quitystrapi.onrender.com/api/blog-cloud-minings?populate=*")
      const dataResponseCloudMining = responseCloudMining.data.data
      setBlogCloudMiningArray(dataResponseCloudMining)
    } catch (error) {
      console.error("get blogEquipments is failed", error);
    }
  }
  useEffect(() => {
    getBlogItems();
  }, []);
};
