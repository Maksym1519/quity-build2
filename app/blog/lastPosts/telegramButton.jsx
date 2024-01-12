import t from "./telegramButton.module.scss";
import Image from "next/image";
import { BlogImages } from "@/public/Data";

const TelegramButton = () => {
    return (
        <div className={t.wrapper}>
           <div className={t.telegramButton__body}>
              <h3 className={t.title}>Больше новостей и прогнозов в нашем Telegram @Quityblog</h3>
              <p className={t.text}>а также свежие цены и акции для подписчиков</p>
              <Image src={BlogImages.telegramLogo} width={80} height={80} alt="logo"/>
              <button className={t.button}>Перейти</button>
              <Image src={BlogImages.telegramButtonBG} width={296} height={280} className={t.bg} alt="logo"/>
              <Image src={BlogImages.telegramButtonBGblue} width={250} height={180} className={t.bgBlue} alt="logo"/>
        </div>
        </div>
    )
}
export default TelegramButton;