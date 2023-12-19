import "./headerProfile.scss";
import Logo from "../../../public/main-logo.svg";
import Telegram from '../../../public/telegram 1.svg';
import WhatsUp from '../../../public/whatsapp 1.svg';
import Viber from '../../../public/viber 1.svg';
import Image from "next/image";
import Link from "next/link";
//components----------------------------------------------------------------
import ProfileNavigation from "./ProfileNavigation";
import Icones from "@/public/Data";

const HeaderProfile = () => {
  return (
    <div className="headerProfile__wrapper">
      <div className="navigation">
        <div className="image__wrapper logo__wrapper">
          <Image src={Icones.logo} width={101} height={31} className="logo"/>
        </div>
        <div className="miningEquipment">
         <Link href="#">Оборудование<br/> для майнинга</Link>
        </div>
      <ProfileNavigation />
      </div>
      <div className="socialMedia__wrapper">
        <span className="text">Получите консультацию <br/>в мессенджерах</span>
        <div className="image__wrapper">
            <Image src={Icones.whatsUp} width={32} height={32}/>
        </div>
        <div className="image__wrapper">
            <Image src={Icones.viber} width={32} height={32}/>
        </div>
        <div className="image__wrapper">
            <Image src={Icones.telegram} width={32} height={32}/>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
