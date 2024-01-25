"use client";
import p from "./pageNavigation.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Icones from "@/public/Data";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { pageNavigationInfo } from "@/lib/features/blog/header/pageNavigationSlice";
import { setAll } from "@/lib/features/blog/blogStateSlice";
import { useEffect, useState } from "react";

const PageNavigation = (props) => {
  const [dataFromServer, setDataFromServer] = useState();
  const [title, setTitle] = useState();
  const dataFromRedux = useAppSelector(pageNavigationInfo);
  useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setTitle(
        dataFromServer.attributes.blogTitle ||
          dataFromServer.attributes.blogBlockChainTitle
      );
    }
  }, [dataFromServer]);

  useEffect(() => {
    if (pageNavigationInfo) {
      setDataFromServer(dataFromRedux);
    }
  }, [dataFromRedux]);
  //pathname------------------------------------
  let pathname = usePathname();
  switch (pathname) {
    case "/blog":
      pathname = "Блог";
      break;
    case "/shop":
      pathname = "Главная";
      break;
    case "/about":
      pathname = "О компании";
      break;
    case "/catalog":
      pathname = "Каталог оборудования";
      break;
      case "/card":
        pathname = "Каталог оборудования / ASIC-майнеры"
    default:
      break;
  }
  //set-redux-state-for-back------------------------
  const dispatch = useAppDispatch();
  const clickAllBlogNews = () => {
    dispatch(setAll());
  };

  return (
    <div className={p.wrapper}>
      <div className={pathname === "Главная" ? p.pageItemActive : p.pageItem}>
        <Link href={"/shop"}>Главная</Link>
        <Image
          src={Icones.arrowNavigation}
          width={12}
          height={12}
          alt="arrow"
        />
      </div>
{pathname === "Блог" && (
      <div
        className={pathname === "Блог" ? p.pageItemActive : p.pageItem}
        onClick={clickAllBlogNews}
      >
        <Link href={"/blog"}>Quity-блог</Link>
        <Image
          src={Icones.arrowNavigation}
          width={12}
          height={12}
          alt="arrow"
        />
      </div>
)}
      {pathname === "Каталог оборудования" && (
        <div
          className={
            pathname === "Каталог оборудования" ? p.pageItemActive : p.pageItem
          }
          onClick={clickAllBlogNews}
        >
          <Link href={"/catalog"}>Каталог товаров</Link>
          <Image
            src={Icones.arrowNavigation}
            width={12}
            height={12}
            alt="arrow"
          />
        </div>
      )}
      {pathname === "Каталог оборудования / ASIC-майнеры" && (
        <div
          className={
            pathname === "Каталог оборудования / ASIC-майнеры" ? p.pageItemActive : p.pageItem
          }
          onClick={clickAllBlogNews}
        >
          <Link href={"/card"}> Каталог оборудования / ASIC-майнеры</Link>
          <Image
            src={Icones.arrowNavigation}
            width={12}
            height={12}
            alt="arrow"
          />
        </div>
      )}
      <div className={pageNavigationInfo ? p.pageItemActive : p.pageItem}>
        {pathname === "Блог" && title}
      </div>
    </div>
  );
};
export default PageNavigation;
