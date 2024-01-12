"use client";
import p from "./postDetail.module.scss";
import { useAppSelector } from "@/lib/hooks";
import { pageNavigationInfo } from "@/lib/features/blog/header/pageNavigationSlice";
import LastCryptoPosts from "../lastPosts/lastCryptoPosts";
import { useEffect, useState } from "react";
import Icones from "@/public/Data";
import Image from "next/image";

const PostBlockChainDetail = () => {
  const currentDate = new Date();
  const options = {
    day: "numeric",
    month: "long",
  };
  const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
  //-------------------------------------------------------------------------
  const [dataFromServer, setDataFromServer] = useState();
  const [category, setCategory] = useState();
  const [title, setTitle] = useState();
  const [timeToRead, setTimeToRead] = useState();
  const [image, setImage] = useState();
  const [textTitleH2, setTextTitleH2] = useState();
  const [textTitleH3, setTextTitleH3] = useState();
  const [mainText, setMainText] = useState();
  const [subText, setSubText] = useState();
  const [listRow1, setListRow1] = useState();
  const [listRow2, setListRow2] = useState();
  const [listRow3, setListRow3] = useState();
  const [boldText, setBoldText] = useState();
  const [newsAuthor, setNewsAuthor] = useState() 
  const dataFromRedux = useAppSelector(pageNavigationInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setCategory(dataFromServer.attributes.blogCategory);
      setTimeToRead(dataFromServer.attributes.timeToRead);
      setTitle(dataFromServer.attributes.blogTitle);
      setImage(dataFromServer.attributes.blogBlockChainImage.data.attributes.url);
      setTextTitleH2(dataFromServer.attributes.h2);
      setTextTitleH3(dataFromServer.attributes.h3);
      setMainText(dataFromServer.attributes.text1);
      setSubText(dataFromServer.attributes.text2);
      setListRow1(dataFromServer.attributes.listRow1);
      setListRow2(dataFromServer.attributes.listRow2);
      setListRow3(dataFromServer.attributes.listRow3);
      setBoldText(dataFromServer.attributes.boldText);
      setNewsAuthor(dataFromServer.attributes.author)
    }
  }, [dataFromServer]);
  return (
    <div className={p.wrapper}>
      <div className={p.postDetail__body}>
        <div className={p.content__wrapper}>
          <div className={p.contentHeader__wrapper}>
            <span className={p.date}>{formatedDate}</span>
            <div className={p.item}>
              <Image src={Icones.dotIconBlog} width={4} height={4} alt="dot"/>
              <span className={p.category}>{category}</span>
            </div>
            <div className={p.item}>
              <Image src={Icones.timeIconBlog} width={16} height={16} alt="time"/>
              <span className={p.timeToRead}>{timeToRead}</span>
            </div>
          </div>
          <h2 className={p.mainTitle}>{title}</h2>
          <div className={p.postDetailImage__wrapper}>
            <Image
              src={image}
              width={600}
              height={400}
              className={p.postImage}
              alt="image"
            />
            <p className={p.postImageAuthor}>
              Photo by Austin Distel on Unsplash
            </p>
          </div>
          <h2 className={p.textTitleH2}>{textTitleH2}</h2>
          <p className={p.mainText}>{mainText}</p>
          <h3 className={p.textTitleH3}>{textTitleH3}</h3>
          <p className={p.subText}>{subText}</p>
          <ul className={p.newsList}>
            <li className={p.listItem}>{listRow1}</li>
            <li className={p.listItem}>{listRow2}</li>
            <li className={p.listItem}>{listRow3}</li>
          </ul>
          <p className={p.boldText}>{boldText}</p>
          <p className={p.newsAuthor}>{newsAuthor}</p>
        </div>
        <LastCryptoPosts />
      </div>
    </div>
  );
};
export default PostBlockChainDetail;
