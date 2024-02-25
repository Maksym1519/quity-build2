"use client";
import s from "./newsSlider.module.scss";
import { useAppSelector } from "@/lib/hooks";
import { blogInfoFromServer } from "@/lib/features/blog/blogStateSlice";
import { useState, useEffect, useRef } from "react";
import { register } from "swiper/element";
register();
import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";
import { SliderImages } from "@/public/Data";
import Image from "next/image";
import Icones from "@/public/Data";

const NewsSlider = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      });
  }, []);
  //date-------------------------------------------------------------
  const currentDate = new Date();
  const options = {
    day: "numeric",
    month: "long",
  };
  const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
  //get-data-for-slider-----------------------------------------------
  const [blogArray, setBlogArray] = useState([]);
  const newBlogArray = useAppSelector(blogInfoFromServer);
  useEffect(() => {
    setBlogArray(newBlogArray);
  }, [newBlogArray]);
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Также читайте</h3>
      <div className={s.slider__body}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1.1"
          speed="500"
          >
          {blogArray.map((item, index) => (
            <swiper-slide>
              <div className={s.item} key={index}>
                <Image
                  src={item.attributes.blogImage.data.attributes.url}
                  width={296}
                  height={220}
                  className={s.blogItemImage}
                  alt="image"
                />
                <div className={s.category__wrapper}>
                  <Image src={Icones.dotIconBlog} width={4} height={4} alt="dot"/>
                  <p className={s.category}>{item.attributes.blogCategory}</p>
                </div>
                <h3 className={s.title}>{item.attributes.blogTitle}</h3>
                <div className={s.date__wrapper}>
                  <span className={s.date}>{formatedDate}</span>
                  <div className={s.time__wrapper}>
                    <Image
                      src={Icones.timeIconBlog}
                      width={16}
                      height={16}
                      alt="time"
                    />
                    <span className={s.time}>{item.attributes.timeToRead}</span>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div>
  );
};
export default NewsSlider;
