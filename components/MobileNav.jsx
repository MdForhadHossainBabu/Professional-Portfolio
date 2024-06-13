"use client"


import { usePathname } from 'next/navigation';
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold" >
              Forhad<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Links.map((link, index)=>{
            return <Link  className={`${
             link.path === pathname && 'text-accent border-b-2 border-accent'
           } capitalize font-medium hover:text-accent transition-all`} key={index} href={link.path}>{link.name}</Link>
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
