"use client";
import p from "./postDetail.module.scss";
import { useAppSelector } from "@/lib/hooks";
import { pageNavigationInfo } from "@/lib/features/blog/header/pageNavigationSlice";
import LastCryptoPosts from "../lastPosts/lastCryptoPosts";
import { useEffect, useState } from "react";
import Icones from "@/public/Data";
import Image from "next/image";

const PostDetail = () => {
  const currentDate = new Date();
  const options = {
    day: "numeric",
    month: "long",
  };
  const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
  //-------------------------------------------------------------------------
  const [dataFromServer, setDataFromServer] = useState();
  const [category, setCategory] = useState();
  const [title, setTitle] = useState()
  const [timeToRead, setTimeToRead] = useState();
  const [image,setImage] = useState();
  const dataFromRedux = useAppSelector(pageNavigationInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setCategory(dataFromServer.attributes.blogCategory);
      setTimeToRead(dataFromServer.attributes.timeToRead);
      setTitle(dataFromServer.attributes.blogTitle);
      setImage(dataFromServer.attributes.blogImage.data.attributes.url)
    }
  }, [dataFromServer]);
  return (
    <div className={p.wrapper}>
      <div className={p.postDetail__body}>
        <div className={p.content__wrapper}>
          <div className={p.contentHeader__wrapper}>
            <span className={p.date}>{formatedDate}</span>
            <div className={p.item}>
                <Image src={Icones.dotIconBlog} width={4} height={4}/>
              <span className={p.category}>{category}</span>
            </div>
            <div className={p.item}>
                <Image src={Icones.timeIconBlog} width={16} height={16}/>
              <span className={p.timeToRead}>{timeToRead}</span>
            </div>
          </div>
          <h2 className={p.mainTitle}>{title}</h2>
          <div className={p.postDetailImage__wrapper}>
            <Image src={image} width={600} height={400} className={p.postImage}/>
            <p className={p.postImageAuthor}>Photo by Austin Distel on Unsplash</p>
          </div>
        </div>
        <LastCryptoPosts />
      </div>
    </div>
  );
};
export default PostDetail;
