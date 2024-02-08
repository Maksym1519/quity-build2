"use client";
import d from "./deploy.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import { useState } from "react";
import { useRef } from "react";

const Deploy = () => {
  const [video, setVideo] = useState(false);
  const showVideo = () => {
    setVideo(!video);
  };
 
  return (
    <div className={d.deploy__wrapper}>
{!video &&
     <div className={video ? d.deploy__body_video : d.deploy__body}>
        <div className={d.deploy__info}>
          <h2 className={d.deploy__info_title}>
            Разместите оборудование в майнинг-отеле с бесперебойной работой и
            обслуживанием 24/7
          </h2>
          <ul className={d.deploy__info_terms}>
            <li className={d.item}>Оплата 3,7 Р за кВтч с НДС;</li>
            <li className={d.item}>
              Отслеживайте заработок с любого устройства в системе мониторинга.
            </li>
          </ul>
          <button className={d.deploy__info_button}>
            Рассчитать стоимость размещения и прибыль
          </button>
        </div>
        <div className={d.deploy__video}>
          <Image
            src={Icones.play}
            width={56}
            height={56}
            className={d.playButton}
            onClick={showVideo}
          />
          <p className={d.video__text}>
            Посмотрите видео <br />о нашем дата-центре
          </p>
           </div>
      </div>
}
      {video && (
           <iframe
           width="100%"
           height="475"
           src="https://www.youtube.com/embed/SUHKdAKVNk0?si=lz_7zNIlfFv9KCIr"
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen
           onMouseOut={showVideo}
           className={d.videoFrame}
             ></iframe>
      )}
    </div>
  );
};
export default Deploy;
