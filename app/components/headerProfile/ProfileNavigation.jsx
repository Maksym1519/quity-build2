"use client";
import "./headerProfile.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ProfileNavigation = () => {
    const pathname = usePathname()
  return (
    <div className="profileNavigation__wrapper">
      <Link href="/orders" className="link" style={{ textDecoration: 'none' }}>
        <div className={pathname === "/orders" ? "profileActive" : "profileNonactive"}>Мои заявки</div>
      </Link>
      <Link href="/profile" className="link" style={{ textDecoration: 'none' }}>
        <div className={pathname === "/profile" ? "profileActive" : "profileNonactive"}>Мои профиль</div>
      </Link>
    </div>
  );
};

export default ProfileNavigation;
