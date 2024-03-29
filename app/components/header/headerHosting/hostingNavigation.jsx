"use client";
import hn from "./hostingNavigation.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HostingNavigation = () => {
    const pathname = usePathname();
  return (
    <div className={hn.shopNavigation__wrapper}>
      <div className={hn.shopNavigation__linkContainer}>
        <Link href="/controlPanel"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/controlPanel" ? hn.profileActive : hn.profileNonactive
            }
          >
            Панель управления
         </div>
        </Link>
        <Link href="/devices"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/devices" ? hn.profileActive : hn.profileNonactive
            }
          >
            Мои устройства
          </div>
        </Link>
        <Link href="/application" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/application" ? hn.profileActive : hn.profileNonactive
            }
          >
            Мои заявки
          </div>
        </Link>
        <Link href="/profile" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/orders" ? hn.profileActive : hn.profileNonactive
            }
          >
            Мои профиль
          </div>
        </Link>
      </div>
     </div>
  );
};

export default HostingNavigation;
