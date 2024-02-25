"use client";
import "./navigation.scss";
import { usePathname, usepathName } from "next/navigation";
import Link from "next/link";
import Icones from "@/public/Data";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const isActive = pathname === "/profile" || pathname === "/shop" || pathname === "/card" || pathname === "/blog";
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <>
      {mobileMenu && (
        <div className="mobileNavigation">
          <Link href="/shop" style={{ textDecoration: 'none' }}>
            <button type="button" className={pathname === "/shop" ? "active" : "nonActive"}>Магазин</button>
          </Link>
          <Link href="/hosting" style={{ textDecoration: 'none' }}>
            <button type="button" className={pathname === "/hosting" ? "active" : "nonActive"}>
              Хостинг
            </button>
          </Link>
          <Link href="/repair" style={{ textDecoration: 'none' }}>
            <div className="borderRight">
              <button type="button"
                className={pathname === "/repair" ? "active" : "nonActive"}
                style={{ paddingRight: "20px" }}
              >
                Ремонт
              </button>
            </div>
          </Link>
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <button type="button" className={pathname === "/about" ? "active" : "nonActive"}>
              О компании
            </button>
          </Link>
          <Link href="/blog" style={{ textDecoration: 'none' }}>
            <button type="button" className={pathname === "/blog" ? "active" : "nonActive"}>
              Quity-блог
            </button>
          </Link>
          <div className="socialMedia__wrapperMobile">
            <span className="text">
              Получите консультацию <br />в мессенджерах
            </span>
            <br />
            <div className="images__container">
              <div className="image__wrapper">
                <Image src={Icones.whatsUp} width={32} height={32} alt="icon"/>
              </div>
              <div className="image__wrapper">
                <Image src={Icones.viber} width={32} height={32} alt="icon"/>
              </div>
              <div className="image__wrapper">
                <Image src={Icones.telegram} width={32} height={32} alt="icon"/>
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
      <Image src={Icones.logo} width={101} height={31} className="mobileLogo" alt="icon"/>
      <div className="siteNavigation">
        <Link href="/shop" style={{ textDecoration: 'none' }}>
          <button type="button" className={pathname === "/shop" || pathname === "/catalog" ? "active" : "nonActive"}>Магазин</button>
        </Link>
        <Link href="/hosting" style={{ textDecoration: 'none' }}>
          <button className={pathname === "/hosting" || pathname === "/application" || pathname === "/devices" || pathname === "/controlPanel" ? "active" : "nonActive"}>
            Хостинг
          </button>
        </Link>
        <Link href="/repair" style={{ textDecoration: 'none' }}>
          <div className="borderRight">
            <button
              className={pathname === "/repair" ? "active" : "nonActive"}
              style={{ paddingRight: "20px" }}
            >
              Ремонт
            </button>
          </div>
        </Link>
        <Link href="/about" style={{ textDecoration: 'none' }}>
          <button className={pathname === "/about" ? "active" : "nonActive"}>
            О компании
          </button>
        </Link>
        <Link href="/blog" style={{ textDecoration: 'none' }}>
          <button className={pathname === "/blog" ? "active" : "nonActive"}>
            Quity-блог
          </button>
        </Link>
      </div>
    </>
  );
};
export default Navigation;
