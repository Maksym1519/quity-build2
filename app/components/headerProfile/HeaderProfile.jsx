import "./headerProfile.scss";
import Image from "next/image";
import Link from "next/link";
//components----------------------------------------------------------------
import ProfileNavigation from "./ProfileNavigation";
import Icones from "@/public/Data";

const HeaderProfile = (props) => {
  const styled = {
    fontFamily: props.fontFamily,
  };
  return (
    <div className="headerProfile__wrapper" style={styled}>
      <div className="navigation">
        <Link href="/shop">
          <div className="image__wrapper logo__wrapper">
            <Image
              src={Icones.logo}
              width={101}
              height={31}
              className="logo"
              alt="logo"
            />
          </div>
        </Link>
        <div className="miningEquipment">
          <Link href="/catalog" style={{ textDecoration: "none" }}>
            <button type="button">
              Оборудование
              <br /> для майнинга
            </button>
          </Link>
        </div>
        <ProfileNavigation />
      </div>
      <div className="socialMedia__wrapper">
        <span className="text">
          Получите консультацию <br />в мессенджерах
        </span>
        <div className="image__wrapper">
          <Image src={Icones.whatsUp} width={32} height={32} alt="icon" />
        </div>
        <div className="image__wrapper">
          <Image src={Icones.viber} width={32} height={32} alt="icon" />
        </div>
        <div className="image__wrapper">
          <Image src={Icones.telegram} width={32} height={32} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
