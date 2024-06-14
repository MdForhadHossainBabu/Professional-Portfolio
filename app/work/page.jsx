"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import{BsArrowUpRight, BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'frond-end',
    title: 'project 1',
    description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iusto minima dicta fugit cum.',
  stack: [{ name: "Html 5", }, { name: "Css 3", }, { name: "Javascript", }],
  image: "",
  live: "",
  github:""
  },
  {
    num: '02',
    category: 'full stack',
    title: 'project 2',
    description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iusto minima dicta fugit cum.',
  stack: [{ name: "React.js", }, { name: "Tailwind css", }, { name: "Node.js", }],
  image: "",
  live: "",
  github:""
  },
  {
    num: '03',
    category: 'full stack',
    title: 'project 3',
    description:
   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iusto minima dicta fugit cum.',
  stack: [{ name: "React.js", }, { name: "Tailwind css", }],
  image: "",
  live: "",
  github:""
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }

 return (
   <motion.section
     initial={{ opacity: 0 }}
     animate={{
       opacity: 1,
       transition: {
         delay: 2.4,
         duration: 0.4,
         ease: 'easeIn',
       },
     }}
     className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
   >
     <div className="container mx-auto">
       <div className="flex flex-col xl:flex-row-reverse xl:gap-[30px]">
         <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:rounded-none">
           <div className="flex flex-col gap-[30px]">
             {/* outline num */}
             <div className="text-7xl leading-none font-extrabold text-transparent text-outline">
               {project.num}
             </div>
             {/* project category */}
             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
               {project.category} project
             </h2>
             {/* project description */}
             <p className="text-white/60">{project.description}</p>
             {/* stack */}
             <ul className="flex gap-4">
               {project.stack.map((item, index) => {
                 return (
                   <li className="text-xl text-accent" key={index}>
                     {item.name}
                     {/* remove the last comma */}
                     {index !== project.stack.length - 1 && ','}
                   </li>
                 );
               })}
             </ul>
             {/* border */}
             <div className="border border-white/60" />

             <div className="flex items-center gap-4">
               {/* live project button */}
               <Link href={project.live}>
                 <TooltipProvider delayDuration={100}>
                   <Tooltip>
                     <TooltipTrigger className="bg-white/5 w-[60px]  h-[60px] flex justify-center rounded-full items-center group">
                       <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                     </TooltipTrigger>
                     <TooltipContent>
                       <p>Live Project</p>
                     </TooltipContent>
                   </Tooltip>
                 </TooltipProvider>
               </Link>
               {/* github project button */}
               <Link href={project.github}>
                 <TooltipProvider delayDuration={100}>
                   <Tooltip>
                     <TooltipTrigger className="bg-white/5 w-[60px]  h-[60px] flex justify-center rounded-full items-center group">
                       <BsGithub className="text-white text-3xl group-hover:text-accent" />
                     </TooltipTrigger>
                     <TooltipContent>
                       <p>Github Repository</p>
                     </TooltipContent>
                   </Tooltip>
                 </TooltipProvider>
               </Link>
             </div>
           </div>
         </div>
         <div className="w-full xl:w-[50%]">
           <Swiper
             spaceBetween={30}
             slidesPerView={1}
             onSlideChange={handleSlideChange}
             className="xl:h-[520px] mb-12"
           >
             {projects.map((project, index) => {
               return (
                 <SwiperSlide className="w-full" key={index}>
                   <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                     {/* overlay */}
                     <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                     {/* image */}
                     <div className="relative w-full h-full">
                       <Image
                         src={project.image}
                         alt="project"
                         fill
                         className="object-cover"
                       />
                     </div>
                   </div>
                 </SwiperSlide>
               );
             })}
             {/* slider button */}
             <WorkSliderBtns
               containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
               btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
             />
           </Swiper>
         </div>
       </div>
     </div>
   </motion.section>
 );
}

export default Work;