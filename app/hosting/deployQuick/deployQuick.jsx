"use client";
import d from "./deployQuick.module.scss";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const DeployQuick = () => {
  const { data } = useSWR(
    "https://quitystrapi.onrender.com/api/quick-deploys?populate=*",
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 10000,
      refreshInterval: 60000,
    }
  );
  //----------------------------------------------------------------------------
  const [dataArray, setDataArray] = useState();
  useEffect(() => {
    if (data) {
      const dataResponse = data.data;
      setDataArray(dataResponse);
    }
  }, [data]);
  const sortedData =
    dataArray &&
    dataArray.sort((a, b) => {
      return a.id - b.id;
    });

  return (
    <div className={d.deployQuick__wrapper}>
      <div className={d.deployQuick__body}>
        <h3 className={d.mainTitle}>
          Размещайте ASIC-майнеры <br />
          на хостинге за 1 день
        </h3>
        <p className={d.subTitle}>Как работает хостинг Quity?</p>
        <div className={d.items__wrapper}>
          {dataArray &&
            sortedData.map((item, index) => (
              <div className={d.item} key={index}>
                <Image
                  src={dataArray && item.attributes.icon.data.attributes.url}
                  width={56}
                  height={56}
                  className={d.itemImg}
                  alt="icon"
                />
                <h3 className={d.itemTitle}>
                  {dataArray ? item.attributes.title : ""}
                </h3>
                <p className={d.itemText}>
                  {dataArray ? item.attributes.text : ""}
                  <span className={d.itemLink}>
                    {dataArray && item.attributes.link
                      ? item.attributes.link
                      : ""}
                  </span>
                </p>
              </div>
            ))}
        </div>
        <div className={d.button__wrapper}>
        <div className={d.buttonInfo}>
          <div className={d.buttonInfo__amount}>
            <span className={d.amount}>432</span>
            <span className={d.text}>машиноместа</span>
          </div>
          <span className={d.buttonInfo__text}>свободно по состоянию на 10 мая</span>
        </div>
        <button className={d.button}>Разместить ASIC-майнер на хостинге</button>
      </div>
      </div>
      <Image
        src={
          dataArray &&
          dataArray.length > 0 &&
          dataArray[0].attributes.circleBg.data.attributes.url
            ? dataArray[0].attributes.circleBg.data.attributes.url
            : ""
        }
        width={200}
        height={200}
        className={d.circleBg}
        alt="bg"
      />
     </div>
  );
};
export default DeployQuick;
