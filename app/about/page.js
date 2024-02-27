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
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
  }, []);
  const currentComponent = useAppSelector(
    (state) => state.about.currentComponent
  );
  //-----------------------------------------------------------------------
   
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
    {isBrowser &&  <div className={a.wrapper}>
        <AboutData />
        {isLoading ? (
          <Loading />
      ) : (
          <div className="container">
            <div className={a.about__body}>
            {/* Проверяем наличие window перед использованием */}
            {typeof window !== 'undefined' && (
              <div
                  className={a.fixed}
                >
                  <AboutNavigation className={a.aboutNavigationComponent} />
                </div>
            )}
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
      </div>}
     
    </>
  );
}
