"use client";
import v from "./videoInfo.module.scss";
import Image from "next/image";
import useSWR from "swr";
import { useState, useEffect, useRef } from "react";
import Loading from "../../components/loading/loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VideoInfo = () => {
  const { data } = useSWR(
    "https://quitystrapi.onrender.com/api/hosting-video-infos?populate=*",
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 10000,
      refreshInterval: 60000,
    }
  );
  //---------------------------------------------------------------------
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

  //videoState-------------------------------------------------
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
     if (videoRef.current) {
      if (playing) {
        videoRef.current.pause(); 
      } else {
        videoRef.current.play(); 
      }
      setPlaying(!playing); 
    }
  };
  const toggleVideo = () => {
    setPlaying(!playing)
  }

  return (
    <div className={v.videoInfo__wrapper}>
      <h2 className={v.mainTitle}>
        {(sortedData && sortedData[0]?.attributes.title) || ""}
      </h2>
      <h3 className={v.subTitle}>
        {(sortedData && sortedData[0]?.attributes.subTitle) || ""}
      </h3>
      <div className={v.items__wrapper}>
        {sortedData &&
          sortedData.map((item, index) => (
            <div className={v.item} key={index}>
              <Image
                src={
                  (sortedData &&
                    sortedData[0]?.attributes.icon.data.attributes.url) ||
                  ""
                }
                width={88}
                height={88}
              />
              <p className={v.itemText}>{item?.attributes.itemText || ""}</p>
            </div>
          ))}
      </div>
      <div className={v.video__wrapper} onClick={toggleVideo}>
           <video
            width="100%"
            height="100%"
            controls
            ref={videoRef}
            className={v.videoFrame}
            src={
              sortedData
                ? sortedData[0]?.attributes.video.data.attributes.url
                : ""
            }
          >
            Your browser does not support the video tag.
          </video>
        {!playing && (
          <>
            <Image
              src={
                (sortedData &&
                  sortedData[0]?.attributes.play.data.attributes.url) ||
                ""
              }
              width={88}
              height={88}
              className={v.playIcon}
              onClick={handleVideoClick}
            />
            <p className={v.playText}>
              {(sortedData && sortedData[0]?.attributes.playText) || ""}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default VideoInfo;
