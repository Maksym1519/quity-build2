import c from "./contacts.module.scss";
import Icones from "@/public/Data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { contactsInfo } from "@/lib/features/about/aboutSlice";
import { ContactsData } from "@/lib/features/about/aboutSlice";
import SignInTelegram from "../about/signInTelegram";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contacts = () => {
  const [dataFromServer, setDataFromServer] = useState();
  const [officeAddress, setOfficeAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const dataFromRedux = useAppSelector(contactsInfo);
  
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);
  
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setOfficeAddress(dataFromServer[0].attributes.officeAddress);
      setPhone(dataFromServer[0].attributes.phone);
      setEmail(dataFromServer[0].attributes.email);
    }
  }, [dataFromServer]);

  // Проверяем доступность window только на клиентской стороне
  const isWindowAvailable = typeof window !== 'undefined';

  // Map data
  const location = {
    latitude: 46.431904506217656, 
    longitude: 30.72604491308508
  };
  const position = [location.latitude, location.longitude];

  // Change map icon
  // let customMarker;
  //   customMarker = new L.Icon({
  //     iconUrl: Icones.geotag, 
  //     iconSize: [32, 52], 
  //     iconAnchor: [16, 32], 
  //     popupAnchor: [0, -32]
  //   });
  

  return (
    <div className={c.contacts__wrapper}>
      <ContactsData />
      <div className={c.contacts__container}>
        <div className={c.contacts__body}>
          <div className={c.contactsInfo}>
            <div className={c.contactsInfo__item}>
              <p className={c.contactsInfo__item_text}>Офис</p>
              <p className={c.contactsInfo__item_text}>{officeAddress}</p>
            </div>
            <div className={c.contactsInfo__item}>
              <p className={c.contactsInfo__item_text}>Телефон</p>
              <p className={c.contactsInfo__item_text}>{phone}</p>
            </div>
            <div className={c.contactsInfo__item}>
              <p className={c.contactsInfo__item_text}>Email</p>
              <p className={c.contactsInfo__item_text}>{email}</p>
            </div>
            <div className={c.contactsInfo__item}>
              <p className={c.contactsInfo__item_text}>
                Напишите нам в мессенджере
              </p>
              <div className={c.contactsInfo__item_socialMedia}>
                <Image
                  src={Icones.whatsUp}
                  width={32}
                  height={32}
                  className={c.contactsInfo__item_img}
                  alt="logo"
                />
                <Image
                  src={Icones.viber}
                  width={32}
                  height={32}
                  className={c.contactsInfo__item_img}
                  alt="logo"
                />
                <Image
                  src={Icones.telegram}
                  width={32}
                  height={32}
                  className={c.contactsInfo__item_img}
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className={c.map__wrapper}>
            {/* {isWindowAvailable && (
              <MapContainer
                center={position}
                zoom={17}
                style={{ height: "100%", width: "100%" }}
                zoomControl={false} 
                attributionControl={false} 
                className={c.map}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customMarker}>
                  <Popup>Your Location</Popup>
                </Marker>
              </MapContainer>
            )}
            {!isWindowAvailable && (
              <div className={c.map__error}>
                Map cannot be rendered because window is not available.
              </div>
            )} */}
          </div>
        </div>
        <SignInTelegram />
      </div>
    </div>
  );
};

export default Contacts;
