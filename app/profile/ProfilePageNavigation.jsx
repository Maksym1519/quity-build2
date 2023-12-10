"use client";
import { usePathname } from "next/navigation";
import pp from "./profilePageNavigation.module.scss";
import Link from "next/link";

const ProfilePageNavigation = () => {
  const pathName = usePathname();
  return (
    <div className={pp.wrapper}>
      <Link href="/personalData">
        <div
          className={pathName === "/" ? pp.active : pp.nonActive}
        >
         Личные данные
        </div>
      </Link>
      <Link href="/personalData">
        <div className={pathName === "/myAdress" ? pp.active : pp.nonActive}>
        Мои адреса
        </div>
      </Link>
      <Link href="/personalData">
        <div className={pathName === "/mySecurity" ? pp.active : pp.nonActive}>
        Настройки безопасности
        </div>
      </Link>
    </div>
  );
};

export default ProfilePageNavigation;
