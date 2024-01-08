"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppDispatch } from "@/lib/hooks";

const initialState = {
    currentComponent: "all",
    blogInfoAll: null
}

const BlogStateSlice = createSlice({
    name: "blogState",
    initialState,
    reducers: {
        setAll: (state) => {
            state.currentComponent = "all"
        },
        setEquipment: (state) => {
            state.currentComponent = "equipment"
        },
        setBlockChain: (state) => {
            state.currentComponent = "blockchain"
        },
        setInvestition: (state) => {
            state.currentComponent = "investition"
        },
        setCloudMining: (state) => {
            state.currentComponent = "cloudMining"
        },
        setBlogInfo: (state, action) => {
            state.blogInfoAll = action.payload
        }
    }
})
export const blogInfoFromServer = (state) => state.blogState.blogInfoAll;
export const {setAll,setEquipment,setInvestition,setBlockChain,setCloudMining,setBlogInfo} = BlogStateSlice.actions;
export default BlogStateSlice.reducer


 //get-blogItem-info-------------------------------------------
 export const BlogNews = () => {
    const [blogAllArray, setBlogAllArray] = useState([]);
    const dispatch = useAppDispatch();
    dispatch(setBlogInfo(blogAllArray))
    async function getBlogItems() {
        try {
          const response = await axios.get(
            "https://quitystrapi.onrender.com/api/blog-items?populate=*"
          );
          const dataResponse = response.data.data;
          setBlogAllArray(dataResponse);
          } catch (error) {
          console.error("get blogItems is failed", error);
        }
      }
      useEffect(() => {
        getBlogItems();
      }, []);
 }
 