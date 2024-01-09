import l from "./lastPosts.module.scss";
import Image from "next/image";
import Icones from "@/public/Data";
import TelegramButton from "./telegramButton";
import { useAppSelector } from "@/lib/hooks";
import { blogInfoCloudMiningFromServer } from "@/lib/features/blog/blogStateSlice";
import { useEffect, useState } from "react";

const LastCloudMiningPosts = () => {
  const currentDate = new Date();
  const options = {
    day: "numeric",
    month: "long",
  };
  const formatedDate = currentDate.toLocaleDateString("ru-RU", options);
  //get-data-from-redux-------------------------------------------------------
  const [cryptoNewsArray, setCryptoNewsArray] = useState([]);
  const dataFromRedux = useAppSelector(blogInfoCloudMiningFromServer);
  console.log(cryptoNewsArray)
  useEffect(() => {
    if(dataFromRedux && dataFromRedux !== null) {
        setCryptoNewsArray(dataFromRedux);
    }
   }, [dataFromRedux]);
  return (
    <div className={l.wrapper}>
      <div className={l.lastPosts__body}>
        <h4 className={l.lastPosts__title}>Последние посты</h4>
        <div className={l.items__wrapper}>
          {cryptoNewsArray.slice(0, 4).map((item, index) => (
            <div className={l.item} key={index}>
              <div className={l.category__wrapper}>
                <Image src={Icones.dotIconBlog} width={4} height={4} />
                <p className={l.category}>{item.attributes.blogCloudMiningCategory}</p>
              </div>
              <h3 className={l.title}>{item.attributes.blogCloudMiningTitle}</h3>
              <div className={l.date__wrapper}>
                <span className={l.date}>{formatedDate}</span>
                <div className={l.time__wrapper}>
                  <Image
                    src={Icones.timeIconBlog}
                    width={16}
                    height={16}
                    alt="time"
                  />
                  <span className={l.time}>{item.attributes.timeToRead}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     {cryptoNewsArray && <TelegramButton />}
    </div>
  );
};

export default LastCloudMiningPosts;
