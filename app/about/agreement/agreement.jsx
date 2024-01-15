import a from "./agreement.module.scss";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { agreementInfo } from "@/lib/features/about/aboutSlice";
import { AgreementData } from "@/lib/features/about/aboutSlice";
import SignInTelegram from "../about/signInTelegram";

const Agreement = () => {
    const [dataFromServer, setDataFromServer] = useState();
    const [mainTitle, setMainTitle] = useState();
    const [subjectText, setSubjectText] = useState();
    const [subjectTitle, setSubjectTitle] = useState();
    const [orderTitle, setOrderTitle] = useState();
    const [orderText, setOrderText] = useState();
    const [splitedText, setSplitedText] = useState([]);
    const dataFromRedux = useAppSelector(agreementInfo);
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
        <div className={a.agreement__wrapper}>
            <AgreementData />
           <div className={a.agreement__body}>
           <h3 className={a.mainTitle}>{mainTitle}</h3>
        <div className={a.subjectAgreement}>
          <h4 className={a.subTitle}>{subjectTitle}</h4>
          <p className={a.text}>{subjectText}</p>
        </div>
        <div className={a.order}>
          <h4 className={a.subTitle}>{orderTitle}</h4>
          <ul className={a.text}>
            {splitedText.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
           </div>
           <SignInTelegram />
        </div>
    )
}
export default Agreement;