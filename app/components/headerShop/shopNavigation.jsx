"use client";
import sn from "./shopNavigation.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ShopNavigation = () => {
    const pathname = usePathname();
  return (
    <div className={sn.shopNavigation__wrapper}>
      <div className={sn.shopNavigation__linkContainer}>
        <Link href="#"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/myOrders" ? sn.profileActive : sn.profileNonactive
            }
          >
            Доставка
          </div>
        </Link>
        <Link href="#"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/profile" ? sn.profileActive : sn.profileNonactive
            }
          >
            Оплата
          </div>
        </Link>
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/profile" ? sn.profileActive : sn.profileNonactive
            }
          >
            Возврат
          </div>
        </Link>
        <Link href="#" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/profile" ? sn.profileActive : sn.profileNonactive
            }
          >
            Таблица доходности
          </div>
        </Link>
      </div>
     </div>
  );
};

export default ShopNavigation;
