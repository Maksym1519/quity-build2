import p from "./publicOffer.module.scss";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { publicOfferInfo } from "@/lib/features/about/aboutSlice";
import { PublicOfferData } from "@/lib/features/about/aboutSlice";
import SignInTelegram from "../about/signInTelegram";

const PublicOffer = () => {
  const [dataFromServer, setDataFromServer] = useState();
  const [mainTitle, setMainTitle] = useState();
  const [subjectText, setSubjectText] = useState();
  const [subjectTitle, setSubjectTitle] = useState();
  const [orderTitle, setOrderTitle] = useState();
  const [orderText, setOrderText] = useState();
  const [splitedText, setSplitedText] = useState([]);
  const dataFromRedux = useAppSelector(publicOfferInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setMainTitle(dataFromServer[0].attributes.mainTitle);
      setSubjectText(dataFromServer[0].attributes.subjectText);
      setSubjectTitle(dataFromServer[0].attributes.subjectTitle);
      setOrderTitle(dataFromServer[0].attributes.orderTitle);
      setOrderText(dataFromServer[0].attributes.orderText);
      if (orderText) {
        const lines = orderText.split("\n");
        setSplitedText(lines);
      }
    }
  }, dataFromServer);
  return (
    <div className={p.publicOffer__wrapper}>
      <PublicOfferData />
      <div className={p.publicOffer__body}>
        <h3 className={p.mainTitle}>{mainTitle}</h3>
        <div className={p.subjectAgreement}>
          <h4 className={p.subTitle}>{subjectTitle}</h4>
          <p className={p.text}>{subjectText}</p>
        </div>
        <div className={p.order}>
          <h4 className={p.subTitle}>{orderTitle}</h4>
          <ul className={p.text}>
            {splitedText.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      <SignInTelegram />
    </div>
  );
};
export default PublicOffer;
