"use client";
import t from "./terms.module.scss";
import Image from "next/image";
import { hostingTerms } from "@/lib/features/hosting/hostingTermsSlice";
import { hostingTermsInfo } from "@/lib/features/hosting/hostingTermsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

const HostingTerms = () => {
  const dispatch = useAppDispatch();
  const termsData = useAppSelector(hostingTermsInfo);
  useEffect(() => {
    dispatch(hostingTerms());
  }, [dispatch]);
  useEffect(() => {
    if (termsData) {
      console.log(termsData);
    }
  }, [termsData]);
  return (
    <div className={t.terms__wrapper}>
      <h2 className={t.mainTitle}>{termsData[0]?.attributes?.title || ""}</h2>
      <h3 className={t.subTitle}>{termsData[0]?.attributes?.subTitle || ""}</h3>
      <div className={t.mainContent}>
        <div className={t.items__wrapper}>
          {termsData &&
            termsData.map((item, index) => (
              <div className={t.item} key={index}>
                <Image
                  src={termsData && item.attributes.icon.data.attributes.url}
                  width={88}
                  height={88}
                />
                <div className={t.itemText__wrapper}>
                  <h4 className={t.itemTitle}>
                    {item?.attributes?.itemTitle || ""}
                  </h4>
                  <p className={t.itemText}>
                    {item?.attributes?.itemText || ""}
                    <span className={t.itemLink}>
                      {item.attributes.itemLink ? item.attributes.itemLink : ""}
                    </span>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className={t.mainImg__wrapper}>
          <Image
            src={
              termsData &&
              termsData[0]?.attributes.mainImage.data.attributes.url
            }
            width={624}
            height={592}
            className={t.mainImage}
          />
        </div>
      </div>
    </div>
  );
};
export default HostingTerms;
