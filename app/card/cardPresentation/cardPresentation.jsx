"use client";
import c from "./cardPresentation.module.scss";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { cardInfo } from "@/lib/features/card/cardSlice";
import Icones from "@/public/Data";
//slider------------------------------------------------
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
register();
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { SliderImages } from "@/public/Data";
import CardImage from '../../../public/cardCatalog.png'

const CardPresentation = () => {
  //get-info-from-catalog-redux------------------------
  const reduxInfo = useAppSelector(cardInfo);
  //slider----------------------------------------------
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
     });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
     });
  }, []);
  return (
    <div className={c.cardPresentation__wrapper}>
      <div className={c.cardPresentation__body}>
        <div className={c.cardImageWrapper}>
          <Image
            src={CardImage}
            width={412}
            height={380}
            className={c.cardImage}
          />
          <div className={c.cardLabel}>Новинка</div>
        </div>
        <div className={c.slider__wrapper}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="3"
          speed="1500"
          loop="true"
          navigation="true"
        >
          <swiper-slide>
            <div className={c.slideWrapper}>
              <Image src={CardImage} width={56} height={56} className={c.sliderImg}/>  
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={c.slideWrapper}>
              <Image src={CardImage} width={56} height={56} className={c.sliderImg}/>  
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={c.slideWrapper}>
              <Image src={CardImage} width={56} height={56} className={c.sliderImg}/>  
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={c.slideWrapper}>
              <Image src={CardImage} width={56} height={56} className={c.sliderImg}/>  
            </div>
          </swiper-slide>
          </swiper-container>
          <Image src={Icones.sliderPrev} width={52} height={52} className={c.sliderPrev}/>
          <Image src={Icones.sliderNext} width={52} height={52} className={c.sliderNext}/>
        </div>
      </div>
    </div>
  );
};

export default CardPresentation;
