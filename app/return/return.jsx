"use client";
import r from "./return.module.scss";
import { useAppSelector } from "@/lib/hooks";
import { returnInfo } from "@/lib/features/return/returnSlice";
import { useState, useEffect } from "react";
import { ReturnData } from "@/lib/features/return/returnSlice";
import Loading from "../components/loading/loading";

const Return = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataFromServer, setDataFromServer] = useState();
  const [mainTitle, setMainTitle] = useState();
  const [text, setText] = useState();
  const dataFromRedux = useAppSelector(returnInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
    setIsLoading(false);
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setMainTitle(dataFromServer[0].attributes.mainTitle);
      setText(dataFromServer[0].attributes.text);
    }
  }, dataFromServer);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={r.return__body}>
          <ReturnData />
          <h3 className={r.mainTitle}>{mainTitle}</h3>
          <p className={r.text}>{text}</p>
        </div>
      )}
    </>
  );
};
export default Return;
