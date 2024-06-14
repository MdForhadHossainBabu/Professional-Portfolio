"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss  } from 'react-icons/si';


// about data
const about = {
 title: "About me",
 description: "Hey! There I'm Forhad Hossain. I'm passionate web developer & my curiosity is always best of coding",
 info: [
  {
   fieldName: "Name",
   fieldValue: "Forhad Hossain"
  },
  {
   fieldName: "Phone",
   fieldValue: "+88 015 400 727 82"
  },
  {
   fieldName: "Experience",
   fieldValue: "2+ Years"
  },
  {
   fieldName: "Skype",
   fieldValue: "Forhad"
  },
  {
   fieldName: "Nationality",
   fieldValue: "Bangladeshi"
  },
  {
   fieldName: "Email",
   fieldValue: "yesforhad1@gmail.com"
  },
  {
   fieldName: "Freelance",
   fieldValue: "Available"
  },
  {
   fieldName: "Language",
   fieldValue: "English, Bangla"
  },
 ]
};

// Experience Data
const experience = {
 icon:"/asset/",
 title:"My Experience",
 description: "Hey! There I'm Forhad Hossain. I'm passionate web developer & my curiosity is always best of coding",
 items:[
  {
   company:"Tech Solution Inc.",
   position:"Full Stack Developer",
   duration:"2023- Present"
  },
  {
   company:"Web Design Studio",
   position:"Front-end Developer",
   duration:"Summer 2022"
  },
  {
   company:"E-commerce Startup",
   position:"Freelance Web Developer",
   duration:"2021 - 2022"
  },
  {
   company:"Tech Academy",
   position:"Teaching Assistant",
   duration:"2020 - 2021"
  },
  {
   company:"Digital Agency",
   position:"UI/UX Design",
   duration:"2020 - 2021"
  },
  {
   company:"Software Development",
   position:"Junior Development",
   duration:"2020 - 2021"
  },
 ]
}

// Education data
const education = {
 icon:"/asset/",
 title:"My Education",
 description: "Hey! There I'm Forhad Hossain. I'm passionate web developer & my curiosity is always best of coding",
 items:[
  {
   institute:"Programming Hero",
   degree:"Full Stack Development",
   duration:"2023 - Present"
  },
  {
   institute:"W3 Schools",
   degree:"Javascript Development",
   duration:"2023 - Present"
  },
  {
   institute:"Hacker Ranked",
   degree:"Array Solving",
   duration:"2023 - Present"
  },
  {
   institute:"Online Course",
   degree:"Programming Course",
   duration:"2023 - Present"
  },
  {
   institute:"Programming Hero",
   degree:"Certified Web Developer",
   duration:"2023 - 24"
  },
  {
   institute:"Design School",
   degree:"Graphics Design",
   duration:"2023 - 24"
  },
  {
   institute:"Kurigram Collectorate School & College",
   degree:"Higher Secondary Certificate",
   duration:"2023 - 25"
  },
 ]
}

// skill data
const skills = {
  title: 'My Skills',
  description: 'Helllo world this is tooo much',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
  ],
};


import {Tabs, TabsContent, TabsList,  TabsTrigger} from "@/components/ui/tabs"
import {Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger
} from "@/components/ui/tooltip"
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";





const Resume = () => {
 return (
   <motion.div
     initial={{
       opacity: 0,
     }}
     animate={{
       opacity: 1,
       transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
     }}
     className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
   >
     <div className="container mx-auto">
       <Tabs
         defaultValue="experience"
         className="flex flex-col xl:flex-row gap-[60px]"
       >
         <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
           <TabsTrigger value="experience">Experience</TabsTrigger>
           <TabsTrigger value="education">Education</TabsTrigger>
           <TabsTrigger value="skills">Skills</TabsTrigger>
           <TabsTrigger value="about me">About me</TabsTrigger>
         </TabsList>
         {/* content */}
         <div className="min-h-[70vh] w-full">
           {/* experience */}
           <TabsContent value="experience" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
               <h3 className="text-4xl font-bold">{experience.title}</h3>
               <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                 {experience.description}
               </p>
               <ScrollArea className="h-[400px] ">
                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                   {experience.items.map((item, index) => {
                     return (
                       <li
                         key={index}
                         className="bg-[#232329] h-[186px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                       >
                         <span className="text-accent">{item.duration}</span>
                         <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                           {item.position}
                         </h3>
                         <div className="flex items-center gap-3">
                           {/* dot */}
                           <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                           <p className="text-white/60">{item.company}</p>
                         </div>
                       </li>
                     );
                   })}
                 </ul>
               </ScrollArea>
             </div>
           </TabsContent>

           {/* education */}
           <TabsContent value="education" className="w-full">
             <div className="flex flex-col gap-[30px] text-center xl:text-left">
               <h3 className="text-4xl font-bold">{education.title}</h3>
               <p className="max-w-[600px] text-white/60  mx-auto xl:mx-0">
                 {education.description}
               </p>
               <ScrollArea className="h-[400px] ">
                 <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                   {education.items.map((item, index) => {
                     return (
                       <li
                         key={index}
                         className="bg-[#232329] h-[186px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                       >
                         <span className="text-accent">{item.duration}</span>
                         <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                           {item.degree}
                         </h3>
                         <div className="flex items-center gap-3">
                           {/* dot */}
                           <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>

                           <p className="text-white/60">{item.institute}</p>
                         </div>
                       </li>
                     );
                   })}
                 </ul>
               </ScrollArea>
             </div>
           </TabsContent>

           {/* Skill */}
           <TabsContent value="skills" className="w-full h-full">
             <div className="flex flex-col gap-[30px]">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{skills.title}</h3>
                 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                   {skills.description}
                 </p>
               </div>
               <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                 {skills.skillList.map((skill, index) => {
                   return (
                     <li key={index}>
                       <TooltipProvider delayDuration={100}>
                         <Tooltip>
                           <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                             <div className="text-6xl group-hover:text-accent transition-all duration-300">
                               {skill.icon}
                             </div>
                           </TooltipTrigger>
                           <TooltipContent>
                             <p className="capitalize">{skill.name}</p>
                           </TooltipContent>
                         </Tooltip>
                       </TooltipProvider>
                     </li>
                   );
                 })}
               </ul>
             </div>
           </TabsContent>

           {/* About me */}
           <TabsContent
             value="about me"
             className="w-full text-center xl:text-left"
           >
             <div className="flex flex-col gap-[30px]">
               <h3 className="text-4xl font-bold">{about.title}</h3>
               <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                 {about.description}
               </p>
               <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                 {about.info.map((item, index) => {
                   return (
                     <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                       <span className='text-white/60'>{item.fieldName}</span>
                       <span className='text-xl'>{item.fieldValue}</span>
                     </li>
                   );
                 })}
               </ul>
             </div>
           </TabsContent>
         </div>
       </Tabs>
     </div>
   </motion.div>
 );
}

export default Resume;