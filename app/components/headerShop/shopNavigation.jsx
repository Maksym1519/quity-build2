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
        <Link href="/about"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/myOrders" ? sn.profileActive : sn.profileNonactive
            }
          >
            Доставка
          </div>
        </Link>
        <Link href="/requisite"  style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/profile" ? sn.profileActive : sn.profileNonactive
            }
          >
            Оплата
          </div>
        </Link>
        <Link href="/return" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/return" ? sn.profileActive : sn.profileNonactive
            }
          >
            Возврат
          </div>
        </Link>
        <Link href="/orders" style={{ textDecoration: 'none' }}>
          <div
            className={
              pathname === "/orders" ? sn.profileActive : sn.profileNonactive
            }
          >
            Мои заявки
          </div>
        </Link>
      </div>
     </div>
  );
};

export default ShopNavigation;
