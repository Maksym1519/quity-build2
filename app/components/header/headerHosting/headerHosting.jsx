import h from './headerHosting.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import HostingNavigation from './hostingNavigation';
import { usePathname } from 'next/navigation';
import Icones from '@/public/Data';

const HeaderHosting = () => {
    const pathname = usePathname();
    return (
        <div className={h.headerShop__column}>
        <div className={h.headerShop__wrapper}>
          <div className={h.navigation}>
            <div className={h.image__wrapper + " " + h.logo__wrapper}>
              <Image
                src={Icones.logo}
                width={101}
                height={31}
                className={h.logo}
                alt="logo"
              />
            </div>
            <div className={h.miningEquipment}>
              <Link href="#" style={{ textDecoration: "none" }}>
              Оборудование <br/>для майнинга
             </Link>
            </div>
            <HostingNavigation />
          </div>
          <div className={h.socialMedia__wrapper}>
            <span className={h.text}>
              Получите консультацию <br />в мессенджерах
            </span>
            <div className={h.image__wrapper}>
              <Image src={Icones.whatsUp} width={32} height={32} alt="icon" />
            </div>
            <div className={h.image__wrapper}>
              <Image src={Icones.viber} width={32} height={32} alt="icon" />
            </div>
            <div className={h.image__wrapper}>
              <Image src={Icones.telegram} width={32} height={32} alt="icon" />
            </div>
          </div>
        </div>
       </div>
    )
}

export default HeaderHosting;