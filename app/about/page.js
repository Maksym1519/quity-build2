"use client";
import a from "./aboutPage.module.scss";
import AboutNavigation from "./navigation/aboutNavigation";
import About from "./about/about";
import Requisites from "./requisite/requisites";
import { useAppSelector } from "@/lib/hooks";
import { useState, useEffect } from "react";

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
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className={a.wrapper}>
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
            {currentComponent === "requisite" && <Requisites className={a.content} />}
          </div>
        </div>
      </div>
    </>
  );
}
