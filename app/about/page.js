"use client";
import a from "./aboutPage.module.scss";
import AboutNavigation from "./navigation/aboutNavigation";
import About from "./about/about";
import Requisites from "./requisite/requisites";
import Contacts from "./contacts/contacts";
import PublicOffer from "./publicOffer/publicOffer";
import Agreement from "./agreement/agreement";
import { useAppSelector } from "@/lib/hooks";
import { useState, useEffect } from "react";
import { aboutInfo } from "@/lib/features/about/aboutSlice";
import { AboutData } from "@/lib/features/about/aboutSlice";
import Loading from "../components/loading/loading";

export default function AboutPage() {
  const currentComponent = useAppSelector(
    (state) => state.about.currentComponent
  );
  //-----------------------------------------------------------------------
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const footerHeight = 585;

      if (scrollPosition + windowHeight > totalHeight - footerHeight) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //isLoading---------------------------------------------------
  const [isLoading, setIsLoading] = useState(true);
  //render-content-if-value----------------------------------------
  const dataFromRedux = useAppSelector(aboutInfo);
  useEffect(() => {
    if (dataFromRedux && dataFromRedux !== null) {
      setIsLoading(false);
    }
  }, [dataFromRedux]);

  return (
    <>
      <div className={a.wrapper}>
        <AboutData />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="container">
            <div className={a.about__body}>
              <div
                className={`${a.fixedNavigationContainer} ${
                  isFixed ? a.fixed : a.absolute
                }`}
              >
                <AboutNavigation className={a.aboutNavigationComponent} />
              </div>
              {currentComponent === "about" && <About className={a.content} />}
              {currentComponent === "requisite" && (
                <Requisites className={a.content} />
              )}
              {currentComponent === "contacts" && (
                <Contacts className={a.content} />
              )}
              {currentComponent === "publicOffer" && (
                <PublicOffer className={a.content} />
              )}
              {currentComponent === "agreement" && (
                <Agreement className={a.content} />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
