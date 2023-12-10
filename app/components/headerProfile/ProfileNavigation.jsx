"use client";
import "./headerProfile.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProfileNavigation = () => {
    const pathname = usePathname()
  return (
    <div className="profileNavigation__wrapper">
      <Link href="#">
        <div className={pathname === "/myOrders" ? "profileActive" : "profileNonactive"}>Мои заявки</div>
      </Link>
      <Link href="#">
        <div className={pathname === "/" ? "profileActive" : "profileNonactive"}>Мои профиль</div>
      </Link>
    </div>
  );
};

export default ProfileNavigation;
