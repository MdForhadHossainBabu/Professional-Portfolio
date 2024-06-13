"use client"


import Link from "next/link"
import {FaFacebook,FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from "react-icons/fa"
const socials = [
  { icon: <FaFacebook />, path: '/a' },
  { icon: <FaGithub />, path: '/a' },
  { icon: <FaLinkedinIn />, path: '/b' },
  { icon: <FaYoutube />, path: '/c' },
  { icon: <FaTwitter />, path: '/d' },
];
const Social = ({containerStyle, iconStyles}) => {
 return (
  <div className={containerStyle} >
{socials.map((item, index)=>{
 return (
   <Link key={index} className={iconStyles} href={item.path}>
     {item.icon}
   </Link>
 );
})}
  </div>
 )
}
export default Social;