"use client";
import a from "./aboutPage.module.scss";
import AboutNavigation from "./navigation/aboutNavigation";
import About from "./about/about";
import { useAppSelector } from "@/lib/hooks";

export default function AboutPage() {
    const currentComponent = useAppSelector((state) => state.about.currentComponent)
  return (
    <>
      <div className={a.wrapper}>
        <div className="container">
          <div className={a.about__body}>
            <AboutNavigation />
            {currentComponent === "about" && <About />}
          </div>
        </div>
      </div>
    </>
  );
}
