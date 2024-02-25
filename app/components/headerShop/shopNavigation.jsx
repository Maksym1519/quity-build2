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
          <button type="button"
            className={
              pathname === "/about" ? sn.profileActive : sn.profileNonactive
            }
          >
            Доставка и оплата
          </button>
        </Link>
        {/* <Link href="/about" style={{ textDecoration: 'none' }}>
          <button type="button"
            className={
              pathname === "/about/requisite" ? sn.profileActive : sn.profileNonactive
            }
          >
            Оплата
          </button>
        </Link> */}
        <Link href="/return" style={{ textDecoration: 'none' }}>
          <button type="button"
            className={
              pathname === "/return" ? sn.profileActive : sn.profileNonactive
            }
          >
            Возврат
          </button>
        </Link>
        <Link href="/orders" style={{ textDecoration: 'none' }}>
          <button type="button"
            className={
              pathname === "/orders" ? sn.profileActive : sn.profileNonactive
            }
          >
            Мои заявки
          </button>
        </Link>
      </div>
     </div>
  );
};

export default ShopNavigation;
