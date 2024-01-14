import { useEffect, useState } from "react";
import a from "./about.module.scss";
import { AboutData } from "@/lib/features/about/aboutSlice";
import { useAppSelector } from "@/lib/hooks";
import { aboutInfo } from "@/lib/features/about/aboutSlice";
import Reasones from "./reasons";
import AboutManager from "./aboutManager";
import SignInTelegram from "./signInTelegram";

const About = () => {
  //get-data-from-redux---------------------------------
  const [dataFromServer, setDataFromServer] = useState();
  const [mainTitle, setMainTitle] = useState();
  const [mainText1, setMainText1] = useState();
  const [mainText2, setMainText2] = useState();
  const [mainText3, setMainText3] = useState();
  const [mainText4, setMainText4] = useState();
  const [quoteText, setQuoteText] = useState();
  const [author, setAuthor] =useState()
  const dataFromRedux = useAppSelector(aboutInfo);
  useEffect(() => {
    setDataFromServer(dataFromRedux);
  }, [dataFromRedux]);
   useEffect(() => {
    if (dataFromServer && dataFromServer !== null) {
      setMainTitle(dataFromServer[0].attributes.mainTitle);
      setMainText1(dataFromServer[0].attributes.mainText1);
      setMainText2(dataFromServer[0].attributes.mainText2);
      setMainText3(dataFromServer[0].attributes.mainText3);
      setMainText4(dataFromServer[0].attributes.mainText4);
      setQuoteText(dataFromServer[0].attributes.quoteText);
      setAuthor(dataFromServer[0].attributes.author)
    }
  }, dataFromServer);

  return (
    <div className={a.wrapper}>
      <AboutData />
      <div className={a.about__body}>
        <div className={a.mainText__wrapper}>
          <h2 className={a.mainTitle}>{mainTitle}</h2>
          <p className={a.mainText}>{mainText1}</p>
          <p className={a.mainText}>{mainText2}</p>
          <p className={a.mainText}>{mainText3}</p>
          <p className={a.mainText}>{mainText4}</p>
         </div>
         <div className={a.quote__wrapper}>
          <p className={a.quoteText}>{quoteText}</p>
         <span className={a.authorName}>{author}</span>
         </div>
         <Reasones />
         <AboutManager />
         <SignInTelegram />
      </div>
    </div>
  );
};
export default About;
