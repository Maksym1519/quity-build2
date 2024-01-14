import a from "./about.module.scss";
import { BlogImages } from "@/public/Data";
import Image from "next/image";

const SignInTelegram = () => {
    return (
        <div className={a.signInTelegram__wrapper}>
          <div className={a.signInTelegram__body}>
             <div className={a.title}>
             Подписывайтесь на нас в Telegram и узнавайте о специальных ценах и акциях первыми!
             </div>
             <p className={a.text}>а также свежие цены и акции для подписчиков</p>
             <Image src={BlogImages.telegramLogo} width={80} height={80} alt="logo" className={a.logo}/>
              <button className={a.button}>Перейти</button>
              <Image src={BlogImages.telegramButtonBG} width={296} height={280} className={a.bg} alt="logo"/>
              <Image src={BlogImages.telegramButtonBGblue} width={250} height={180} className={a.bgBlue} alt="logo"/>
          </div>
        </div>
    )
}
export default SignInTelegram;