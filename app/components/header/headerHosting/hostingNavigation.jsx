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
        <Link href="#"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/myOrders" ? hn.profileActive : hn.profileNonactive
            }
          >
            Размещение в дата-центр
          </div>
        </Link>
        <Link href="#"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/profile" ? hn.profileActive : hn.profileNonactive
            }
          >
            Размещение в дата-центр
          </div>
        </Link>
        <Link href="/return" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/return" ? hn.profileActive : hn.profileNonactive
            }
          >
            Отзывы
          </div>
        </Link>
        <Link href="/orders" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/orders" ? hn.profileActive : hn.profileNonactive
            }
          >
            FAQ
          </div>
        </Link>
      </div>
     </div>
  );
};

export default HostingNavigation;
