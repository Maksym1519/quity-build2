"use client";
import s from "./scheme.module.scss";
import Image from "next/image";
import useSWR from "swr";
import { useState, useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Scheme = () => {
  const { data } = useSWR(
    "https://quitystrapi.onrender.com/api/hosting-schemes?populate=*",
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
    <div className={s.scheme__wrapper}>
      <h3 className={s.mainTitle}>
        {sortedData ? sortedData[0].attributes.title : ""}
      </h3>
      <div className={s.scheme__body}>
      <div className={s.items__wrapper}>
  {sortedData &&
    sortedData.slice(0, 2).map((item, index) => ( 
      <div className={s.item} key={index}>
        <p className={s.itemText}>
          {sortedData ? item.attributes.text : ""}
        </p>
      </div>
    ))}
</div>

        {/* //---------------------------------------------------------------------- */}
        <div className={s.image__wrapper}>
          <div className={s.image__container}>
            <Image
              src={
                sortedData
                  ? sortedData[0].attributes.imgBg.data.attributes.url
                  : ""
              }
              width={638}
              height={638}
              alt="BG"
              className={s.img__background}
            />
            <Image
              src={
                sortedData
                  ? sortedData[0].attributes.imagePhone.data.attributes.url
                  : ""
              }
              width={250}
              height={638}
              alt="image"
              className={s.img__main}
            />
            <div className={s.icon_wrapper1}>
              {" "}
              <Image
                src={
                  sortedData &&
                  sortedData[0].attributes.icon.data.attributes.url
                    ? sortedData[0].attributes.icon.data.attributes.url
                    : ""
                }
                width={88}
                height={88}
              />
            </div>
            <div className={s.icon_wrapper2}>
              {" "}
              <Image
                src={
                  sortedData &&
                  sortedData[0].attributes.icon.data.attributes.url
                    ? sortedData[0].attributes.icon.data.attributes.url
                    : ""
                }
                width={88}
                height={88}
              />
            </div>
            <div className={s.icon_wrapper3}>
              {" "}
              <Image
                src={
                  sortedData &&
                  sortedData[0].attributes.icon.data.attributes.url
                    ? sortedData[0].attributes.icon.data.attributes.url
                    : ""
                }
                width={88}
                height={88}
              />
            </div>
            <div className={s.icon_wrapper4}>
              {" "}
              <Image
                src={
                  sortedData &&
                  sortedData[0].attributes.icon.data.attributes.url
                    ? sortedData[0].attributes.icon.data.attributes.url
                    : ""
                }
                width={88}
                height={88}
              />
            </div>
          </div>
        </div>
         {/* //---------------------------------------------------------------------- */}
         <div className={s.items__wrapper + " " + s.items__wrapper_right}>
  {sortedData &&
    sortedData.slice(2, 4).map((item, index) => ( 
      <div className={s.item} key={index}>
        <p className={s.itemText}>
          {sortedData ? item.attributes.text : ""}
        </p>
      </div>
    ))}
</div>

      </div>
    </div>
  );
};
export default Scheme;
