"use client";
import b from "../blogItem/blogItem.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState, useEffect } from "react";
import { BlogNews } from "@/lib/features/blog/blogStateSlice";
import { useAppSelector } from "@/lib/hooks";
import { blogInfoInvestitionFromServer} from "@/lib/features/blog/blogStateSlice";

const BlogInvestition = () => {
    const currentDate = new Date();
    const options = {
      day: "numeric",
      month: "long",
    };
    const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
    //get-blogItem-info-------------------------------------------
    const [blogInvestitionArray, setBlogInvestitionArray] =useState([])
    const newBlogInvestitionArray = useAppSelector(blogInfoInvestitionFromServer)
    useEffect(() => {
    setBlogInvestitionArray(newBlogInvestitionArray)
   },[newBlogInvestitionArray])
     return (
      <div className={b.wrapper}>
        <BlogNews />
        <div className={b.blogItem__body}>
          {blogInvestitionArray !==null && blogInvestitionArray.map ((item, index) => (
            <div className={b.item} key={index}>
              <Image
                src={item.attributes.blogInvestitionImage.data.attributes.url}
                width={296}
                height={220}
                className={b.blogItemImage}
                alt="image"
              />
              <div className={b.category__wrapper}>
                <Image src={Icones.dotIconBlog} width={4} height={4} alt="dot"/>
                <p className={b.category}>{item.attributes.blogInvestitionCategory}</p>
              </div>
              <h3 className={b.title}>{item.attributes.blogInvestitionTitle}</h3>
              <div className={b.date__wrapper}>
                <span className={b.date}>{formatedDate}</span>
                <div className={b.time__wrapper}>
                  <Image
                    src={Icones.timeIconBlog}
                    width={16}
                    height={16}
                    alt="time"
                  />
                  <span className={b.time}>{item.attributes.timeToRead}</span>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    );
  };
  export default BlogInvestition;
  