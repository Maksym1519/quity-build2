"use client";
import b from "../blogItem/blogItem.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState, useEffect } from "react";
import { BlogNews } from "@/lib/features/blog/blogStateSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { blogInfoBlockChainFromServer} from "@/lib/features/blog/blogStateSlice";
import { setPageNavigation } from "@/lib/features/blog/header/pageNavigationSlice";


const BlogBlockChain = (props) => {
    const currentDate = new Date();
    const options = {
      day: "numeric",
      month: "long",
    };
    const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
    //get-blogItem-info-------------------------------------------
    const [blogBlockChainArray, setBlogBlockChainArray] =useState([])
    const newBlogBlockChainArray = useAppSelector(blogInfoBlockChainFromServer)
    useEffect(() => {
    setBlogBlockChainArray(newBlogBlockChainArray)
   },[newBlogBlockChainArray])
   //set-info-to-page-navigation-----------------------------------------
const [titleFromArray, setTitleFromArray] = useState(null)
const [postInfo, setPostInfo] = useState()
const clickTitleFromArray = (blogTitle) => {
  setTitleFromArray(blogTitle) 
  }
  const clickDataToPostInfo = (itemInfo) => {
    setPostInfo(itemInfo)
  }
if (titleFromArray !== null) {
  const dispatch = useAppDispatch()
  dispatch(setPageNavigation(postInfo))
  props.clickPostDetail()
}
     return (
      <div className={b.wrapper}>
        <BlogNews />
        <div className={b.blogItem__body}>
          {blogBlockChainArray !==null && blogBlockChainArray.map ((item, index) => (
            <div className={b.item} key={index} onClick={() => {clickTitleFromArray(item.attributes.blogBlockChainTitle); clickDataToPostInfo(item)}}>
              <Image
                src={item.attributes.blogBlockChainImage.data.attributes.url}
                width={296}
                height={220}
                className={b.blogItemImage}
                alt="image"
              />
              <div className={b.category__wrapper}>
                <Image src={Icones.dotIconBlog} width={4} height={4} alt="dot"/>
                <p className={b.category}>{item.attributes.blogBlockChainCategory}</p>
              </div>
              <h3 className={b.title}>{item.attributes.blogBlockChainTitle}</h3>
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
  export default BlogBlockChain;
  