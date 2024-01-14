import r from "./requisites.module.scss";
import { useAppSelector } from "@/lib/hooks";
import { requisitesInfo } from "@/lib/features/about/aboutSlice";
import { useState, useEffect } from "react";
import { RequisitesData } from "@/lib/features/about/aboutSlice";
import SignInTelegram from "../about/signInTelegram";

const Requisites = () => {
  const [dataFromServer, setDataFromServer] = useState();
  const [mainTitle, setMainTitle] = useState();
  const [comapanyTitle, setCompanyTitle] = useState()
  const [comapanyName, setCompanyName] = useState()
  const [idNumber, setIdNumber] = useState()
  const [ogrnNumber, setOgrnNumber] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [bankRequisiteTitle, setBankRequisiteTitle] = useState()
  const [bankName, setBankName] = useState()
  const [rs, setRs] = useState()
  const [ks, setKs] = useState()
  const [iban, setIban] = useState()
  const dataFromRedux = useAppSelector(requisitesInfo);
  useEffect(() => {
    if (dataFromRedux && dataFromRedux !== null) {
      setDataFromServer(dataFromRedux);
    }
  }, [dataFromRedux]);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setMainTitle(dataFromServer[0].attributes.mainTitle);
      setCompanyTitle(dataFromServer[0].attributes.aboutCompanyTitle);
      setCompanyName(dataFromServer[0].attributes.nameCompany);
      setIdNumber(dataFromServer[0].attributes.idNumber);
      setOgrnNumber(dataFromServer[0].attributes.ogrn);
      setPhone(dataFromServer[0].attributes.phone);
      setEmail(dataFromServer[0].attributes.email);
      setBankRequisiteTitle(dataFromServer[0].attributes.bankRequisiteTitle);
      setBankName(dataFromServer[0].attributes.nameBank);
      setRs(dataFromServer[0].attributes.rs);
      setKs(dataFromServer[0].attributes.ks);
      setIban(dataFromServer[0].attributes.iban);
    }
  }, [dataFromServer]);
  console.log(dataFromRedux);
  return (
    <div className={r.requisites__wrapper}>
      <RequisitesData />
      <div className={r.requisites__body}>
        <h3 className={r.mainTitle}>{mainTitle}</h3>
        <div className={r.infoAboutCompany__wrapper}>
          <h4 className={r.subTitle}>{comapanyTitle}</h4>
          <div className={r.items__wrapper}>
            <div className={r.item}>
              <p className={r.itemTitle}>Название компании</p>
              <p className={r.itemInfo}>{comapanyName}</p>
            </div>
            <div className={r.item}>
              <p className={r.itemTitle}>ИНН/КПП</p>
              <p className={r.itemInfo}>{idNumber}</p>
            </div>
            <div className={r.item}>
              <p className={r.itemTitle}>ОГРН</p>
              <p className={r.itemInfo}>{ogrnNumber}</p>
            </div>
            <div className={r.item}>
              <p className={r.itemTitle}>Телефон</p>
              <p className={r.itemInfo}>{phone}</p>
            </div>
            <div className={r.item}>
              <p className={r.itemTitle}>E-mail</p>
              <p className={r.itemInfo}>{email}</p>
            </div>
          </div>
        </div>
        <div className={r.infoAboutBank__wrapper}>
          <h4 className={r.subTitle}>{bankRequisiteTitle}</h4>
          <div className={r.items__wrapper}>
            <div className={r.item}>
            <p className={r.itemTitle}>Наименование банка</p>
              <p className={r.itemInfo}>{bankName}</p>
            </div>
            <div className={r.item}>
            <p className={r.itemTitle}>Р/с</p>
              <p className={r.itemInfo}>{rs}</p>
            </div>
            <div className={r.item}>
            <p className={r.itemTitle}>К/с</p>
              <p className={r.itemInfo}>{ks}</p>
            </div>
            <div className={r.item}>
            <p className={r.itemTitle}>IBAN</p>
              <p className={r.itemInfo}>{iban}</p>
            </div>
          </div>
        </div>
        <SignInTelegram />
      </div>
    </div>
  );
};
export default Requisites;
