"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Links = [
 {
  name: "home",
  path:'/'
 },
 {
  name: "services",
  path:'/services'
 },
 {
  name: "resume",
  path:'/resume'
 },
 {
  name: "work",
  path:'/work'
 },
 {
  name: "contact",
  path:'/contact'
 },
]

const Nav = () => {
 const pathname = usePathname()
  return (
    <nav className="flex items-center gap-4">
      {Links.map((link, index) => {
       return (
         <Link
           className={`${
             link.path === pathname && 'text-accent border-b-2 border-accent'
           } capitalize font-medium hover:text-accent transition-all`}
           key={index}
           href={link.path}
         >
           {link.name}
         </Link>
       );
      })}
    </nav>
  );
};
export default Nav;
