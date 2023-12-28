"use client";
import s from "./slider.module.scss";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
register();
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { SliderImages } from "@/public/Data";
import Image from "next/image";


const Slider = () => {
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const toggleText = () => {
    setShowText(!showText)
  }
  const toggleText2 = () => {
    setShowText2(!showText2)
  }
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>
        Продаем оборудование для майнинга и помогаем с выбором
      </h3>
      <p className={s.text}>Вот что говорят наши клиенты</p>
      <Image
        src={SliderImages.bg999}
        width={164}
        height={164}
        alt="999"
        className={s.feedBackImage}
      />
      <div className={s.slider__body}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view="1.6"
          speed="500"
          loop="true"
          pagination="true"
          navigation="true"
          >
          <swiper-slide>
            <div className={s.item}>
              <div className={s.information__body}>
                <p className={s.name}>Maksym K.</p>
                <div className={s.bugDescription}>
                  <div className={s.bugDescription__line}>
                    <span className={s.lineTitle}>Оборудование:</span>
                    <span className={s.description}>ANTMINER S9</span>
                  </div>
                  <div className={s.bugDescription__line}>
                    <span className={s.lineTitle}>Поломка:</span>
                    <span className={s.description}>
                      не работали платы управления
                    </span>
                  </div>
                  <div className={s.bugDescription__line}>
                    <span className={s.lineTitle}>Срок:</span>
                    <span className={s.description}>3 дня</span>
                  </div>
                </div>
                <div className={s.text__wrapper}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum libero molestias quisquam quis itaque omnis amet
                    aliquid, deleniti veniam repellendus perspiciatis ullam
                    architecto laudantium eum? Repellat ab iure est vel.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum libero molestias quisquam quis itaque omnis amet
                    aliquid, deleniti veniam repellendus perspiciatis ullam
                    architecto laudantium eum? Repellat ab iure est vel.
                  </p>
                  {showText && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda dolorem, earum libero consequuntur vero minima
                      nemo pariatur maxime maiores iusto illum aliquid accusamus
                      in atque deserunt ad eius quaerat? Suscipit!
                    </p>
                  )}
                  {!showText ? (
                    <span className={s.readFull} onClick={() => toggleText()}>Читать полностью</span>
                  ) : (
                    <span className={s.readFull} onClick={() => toggleText()}>Показать меньше</span>
                  )}
                </div>
              </div>
              <Image
                src={SliderImages.chatImg}
                width={264}
                height={380}
                className={s.chatImg}
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className={s.item}>
              <div className={s.information__body}>
                <p className={s.name}>Maksym K.</p>
                <div className={s.bugDescription}>
                  <div className={s.bugDescription__line}>
                    <span className={s.lineTitle}>Оборудование:</span>
                    <span className={s.description}>ANTMINER S9</span>
                  </div>
                  <div className={s.bugDescription__line}>
                    <span className={s.lineTitle}>Поломка:</span>
                    <span className={s.description}>
                      не работали платы управления
                    </span>
                  </div>
                  <div className={s.bugDescription__line}>
                    <span className={s.lineTitle}>Срок:</span>
                    <span className={s.description}>3 дня</span>
                  </div>
                </div>
                <div className={s.text__wrapper}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum libero molestias quisquam quis itaque omnis amet
                    aliquid, deleniti veniam repellendus perspiciatis ullam
                    architecto laudantium eum? Repellat ab iure est vel.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum libero molestias quisquam quis itaque omnis amet
                    aliquid, deleniti veniam repellendus perspiciatis ullam
                    architecto laudantium eum? Repellat ab iure est vel.
                  </p>
                  {showText2 && (
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Assumenda dolorem, earum libero consequuntur vero minima
                      nemo pariatur maxime maiores iusto illum aliquid accusamus
                      in atque deserunt ad eius quaerat? Suscipit!
                    </p>
                  )}
                  {!showText2 ? (
                    <span className={s.readFull} onClick={() => toggleText2()}>Читать полностью</span>
                  ) : (
                    <span className={s.readFull} onClick={() => toggleText2()}>Показать меньше</span>
                  )}
                </div>
              </div>
              <Image
                src={SliderImages.chatImg}
                width={264}
                height={380}
                className={s.chatImg}
              />
            </div>
          </swiper-slide>
         </swiper-container>
         <Image src={SliderImages.next} width={24} height={24} className={s.next}/>
         <Image src={SliderImages.prev} width={24} height={24} className={s.prev}/>
      </div>
    </div>
  );
};
export default Slider;
