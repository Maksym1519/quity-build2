"use client";
import c from "./cardPresentation.module.scss";
import Image from "next/image";
import { useSelector } from "react-redux";
import { cardInfo } from "@/lib/features/card/cardSlice";
import Icones from "@/public/Data";
//slider------------------------------------------------
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
register();


const CardPresentation = () => {
  //get-info-from-catalog-redux------------------------
  const [reduxInfo,setReduxInfo] = useState()
  
  const reduxData = useSelector((state) => state.card.cardState);
  useEffect(() => {
   if (reduxData && reduxData !== undefined) {
    setReduxInfo(reduxData)
   }
   },[reduxData])
   console.log(reduxInfo)
  //slider----------------------------------------------
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
     });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
     });
  }, []);
  //changeImage------------------------------------------------
  const [currentImg,setCurrentImg] = useState(0)
  const changeImg = (index) => {
    setCurrentImg(index)
  }
  return (
    <>
    {reduxInfo !== null && <div className={c.cardPresentation__wrapper}>
      <div className={c.cardPresentation__body}>
        {reduxInfo !== undefined && <div className={c.cardImageWrapper}>
          <Image
            src={reduxInfo && currentImg === -1 ? reduxInfo.attributes.itemImage.data.attributes.url  && reduxInfo.attributes.itemImage.data.attributes.url : reduxInfo.attributes.sliderMiniatur.data[currentImg].attributes.url && reduxInfo.attributes.sliderMiniatur.data[currentImg].attributes.url}
            width={412}
            height={380}
            className={c.cardImage}
            alt="minerImage"
          />
          <div className={c.cardLabel}>{reduxInfo ? reduxInfo.attributes.popularity : ""}</div>
        </div>}
       
        <div className={c.slider__wrapper}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          speed="1500"
          loop="true"
          navigation="true"
        >
            {reduxInfo !== undefined &&
              reduxInfo.attributes.sliderMiniatur.data.map((item, index) => (
                <swiper-slide key={index}>
                  <div className={c.slideWrapper} onClick={() => changeImg(index)}>
                    <Image src={item.attributes.url} width={56} height={56} className={c.sliderImg} alt="minerImage" />
                  </div>
                </swiper-slide>
              ))}
          </swiper-container>
          <Image src={Icones.sliderPrev} width={52} height={52} className={c.sliderPrev} alt="minerImage"/>
          <Image src={Icones.sliderNext} width={52} height={52} className={c.sliderNext} alt="minerImage"/>
        </div>
      </div>
    </div>}
    
    </>
  );
};

export default CardPresentation;
