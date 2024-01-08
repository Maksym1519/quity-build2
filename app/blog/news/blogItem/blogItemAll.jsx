"use client";
import b from "./blogItem.module.scss";
import axios from "axios";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState, useEffect } from "react";
import { BlogNews } from "@/lib/features/blog/blogStateSlice";
import { useAppSelector } from "@/lib/hooks";
import { blogInfoFromServer } from "@/lib/features/blog/blogStateSlice";

const BlogItemAll = () => {
  const currentDate = new Date();
  const options = {
    day: "numeric",
    month: "long",
  };
  const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
  //get-blogItem-info-------------------------------------------
  const [blogArray, setBlogArray] = useState([]);
  const newBlogArray = useAppSelector(blogInfoFromServer);
  console.log(newBlogArray)
  useEffect(() => {
    setBlogArray(newBlogArray);
  }, [newBlogArray]);
 
  return (
    <div className={b.wrapper}>
      <BlogNews />
      <div className={b.blogItem__body}>
        {blogArray !==null && blogArray.map ((item, index) => (
          <div className={b.item} key={index}>
            <Image
              src={item.attributes.blogImage.data.attributes.url}
              width={296}
              height={220}
              className={b.blogItemImage}
            />
            <div className={b.category__wrapper}>
              <Image src={Icones.dotIconBlog} width={4} height={4} />
              <p className={b.category}>{item.attributes.blogCategory}</p>
            </div>
            <h3 className={b.title}>{item.attributes.blogTitle}</h3>
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
export default BlogItemAll;
