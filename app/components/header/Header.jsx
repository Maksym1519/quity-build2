"use client";
import Link from "next/link";
import "./header.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";
//components--------------------------------------------------------------
import HeaderProfile from "../headerProfile/HeaderProfile";
import HeaderShop from "../headerShop/headerShop";
import Navigation from "../navigation/Navigation";
import Icones from "../../../public/Data";
import { useEffect, useState } from "react";
import { ClientsInformation } from "@/lib/features/getClientsInfoSlice";
//redux--------------------------------------------------------------
import { selectClientsInfo } from "@/lib/features/getClientsInfoSlice";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
  const [avatarImage,setAvatarImage] = useState()
  const clientAvatar = useAppSelector(selectClientsInfo)
   useEffect(() => {
    setAvatarImage(clientAvatar)
  },[clientAvatar])
 
  //-----------------------------------------------------------------------
  const pathname = usePathname()
  
 return (
    <header className="wrapper">
      <ClientsInformation />
      <div className="container">
        <div className="navigation__wrapper">
          <Navigation />
          {/* <div className="burgerMenu"></div> */}
            <div className="contacts">
            <div className="phoneNumber__wrapper">
              <span>+38 (097) 123 45 67</span>
              <Image
                src={Icones.warning}
                width={12}
                height={12}
                alt="warning"
              />
            </div>
            <div className="backCall">Обратный звонок</div>
            <div className="profile__wrapper">
              <span className="userName">User</span>
              <div className="avatar__wrapper">
                <Image
                  src={avatarImage ? avatarImage : Icones.emptyAvatar}
                  width={30}
                  height={30}
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="headerFunctions__wrapper">
          {pathname === "/profile" && <HeaderProfile />}
          {pathname === "/shop" && <HeaderShop />}
        </div>
      </div>
    </header>
  );
};

export default Header;
