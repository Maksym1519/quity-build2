"use client";
import "./navigation.scss";
import { usePathname, usepathName } from "next/navigation";
import Link from "next/link";
import Icones from "@/public/Data";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const isActive = pathname === "/profile" || pathname === "/shop";
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      {mobileMenu && (
        <div className="mobileNavigation">
          <Link href="#" style={{ textDecoration: 'none' }}>
            <span className={isActive ? "active" : "nonActive"}>Магазин</span>
          </Link>
          <Link href="/hosting" style={{ textDecoration: 'none' }}>
            <span className={pathname === "/hosting" ? "active" : "nonActive"}>
              Хостинг
            </span>
          </Link>
          <Link href="/repair" style={{ textDecoration: 'none' }}>
            <div className="borderRight">
              <span
                className={pathname === "/repair" ? "active" : "nonActive"}
                style={{ paddingRight: "20px" }}
              >
                Ремонт
              </span>
            </div>
          </Link>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <span className={pathname === "/about" ? "active" : "nonActive"}>
              О компании
            </span>
          </Link>
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <span className={pathname === "/blog" ? "active" : "nonActive"}>
              Quity-блог
            </span>
          </Link>
          <div className="socialMedia__wrapperMobile">
            <span className="text">
              Получите консультацию <br />в мессенджерах
            </span>
            <br />
            <div className="images__container">
              <div className="image__wrapper">
                <Image src={Icones.whatsUp} width={32} height={32} />
              </div>
              <div className="image__wrapper">
                <Image src={Icones.viber} width={32} height={32} />
              </div>
              <div className="image__wrapper">
                <Image src={Icones.telegram} width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className={mobileMenu ? "burgerClose" : "burger"}
        onClick={toggleMobileMenu}
      >
        <span className="burger__line"></span>
      </div>
      <Image src={Icones.logo} width={101} height={31} className="mobileLogo" />
      <div className="siteNavigation">
        <Link href="#" style={{ textDecoration: 'none' }}>
          <span className={isActive ? "active" : "nonActive"}>Магазин</span>
        </Link>
        <Link href="/hosting" style={{ textDecoration: 'none' }}>
          <span className={pathname === "/hosting" ? "active" : "nonActive"}>
            Хостинг
          </span>
        </Link>
        <Link href="/repair" style={{ textDecoration: 'none' }}>
          <div className="borderRight">
            <span
              className={pathname === "/repair" ? "active" : "nonActive"}
              style={{ paddingRight: "20px" }}
            >
              Ремонт
            </span>
          </div>
        </Link>
        <Link href="/about" style={{ textDecoration: 'none' }}>
          <span className={pathname === "/about" ? "active" : "nonActive"}>
            О компании
          </span>
        </Link>
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <span className={pathname === "/blog" ? "active" : "nonActive"}>
            Quity-блог
          </span>
        </Link>
      </div>
    </>
  );
};
export default Navigation;
