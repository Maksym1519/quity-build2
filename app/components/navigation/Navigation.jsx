"use client";
import './navigation.scss';
import { usePathname, usepathName } from 'next/navigation';
import Link from 'next/link';

const Navigation = () => {
    const pathname = usePathname()
   
return (
    <div className="siteNavigation">
    <Link href="#">
      <span className={pathname === '/' ? 'active' : 'nonActive'}>Магазин</span>
    </Link>
    <Link href="/hosting">
      <span className={pathname === '/hosting' ? 'active' : 'nonActive'}>Хостинг</span>
    </Link>
    <Link href="/repair">
      <span className={pathname === '/repair' ? 'active' : 'nonActive'}>Ремонт</span>
    </Link>
    <Link href="/about">
      <span className={pathname === '/about' ? 'active' : 'nonActive'}>О компании</span>
    </Link>
    <Link href="/blog">
      <span className={pathname === '/blog' ? 'active' : 'nonActive'}>Quity-блог</span>
    </Link>
  </div>
)
}
export default Navigation;