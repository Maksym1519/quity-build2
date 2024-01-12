import p from "./profile/profile.module.scss";
import Profile from "./profile/page";
import Registration from "./profile/registration/Registration";

export default function Home() {
  return (
    <>
      <div className={p.registrationForm__wrapper}>
        <div className={p.firstPage__wrapper}>
          <Profile />
        </div>
        <div className={p.registrationForm__body}>
          <Registration />
        </div>
       </div>
    </>
  );
}
