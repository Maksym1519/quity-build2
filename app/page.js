import Link from "next/link";
import p from '../app/profile/profile.module.scss';
//components-------------------------------------------------------
import ProfilePageNavigation from "./profile/ProfilePageNavigation";
import PersonalData from "./profile/personalData/PersonalData";


export default function Home() {
   return (
    <div className={p.wrapper}>
     <div className="container">
       <main className={p.main__wrapper}>
          <h2 className={p.title}>Мои профиль</h2>
          <ProfilePageNavigation />
          <PersonalData />
       </main>
    </div>
  </div>
  )
}
