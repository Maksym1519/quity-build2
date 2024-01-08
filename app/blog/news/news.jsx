"use client";
import n from "./news.module.scss";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
//components------------------------------------------------
import BlogItemAll from "./blogItem/blogItemAll";

const News = () => {
  const currentComponent = useAppSelector((state) => state.blogState.currentComponent)
    return (
        <div className={n.wrapper}>
          <div className={n.news__body}>
            {currentComponent === "all" && <BlogItemAll />}
          </div>
        </div>
    )
}
export default News;