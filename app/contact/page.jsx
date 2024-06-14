"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@radix-ui/react-select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+88 015 400 727 82',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'yesforhad1@gmail.com',
  },
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+88 015 400 727 82',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Ulipur, kurigram, BD',
  },
];
import { motion } from "framer-motion";


const Contact = () => {
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
     className="py-6"
   >
     <div className="container mx-auto">
       <div className="flex flex-col xl:flex-row gap-[30px]">
         {/* form */}
         <div className="xl:h-[54%] order-2 xl:order-none">
      <form
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
      >
       <h3 className="text-4xl text-accent">Let's work together</h3>
       <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi doloremque, minus libero quaerat animi.</p>
       {/* input */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="firstname" placeholder="First Name"/>
        <Input type="lastname" placeholder="Last Name"/>
        <Input type="email" placeholder="Email Address"/>
        <Input type="phone" placeholder="Phone Number"/>
       </div>
       {/* select */}
       <Select>
        <SelectTrigger className="w-full">
         <SelectValue placeholder="Select a service"/>
        </SelectTrigger>
        <SelectContent>
         <SelectGroup>
          <SelectLabel>
           Select a service 
          </SelectLabel>
          <SelectItem value="est">
          Web Development
          </SelectItem>
          <SelectItem value="cst">
          UI/UX Design
          </SelectItem>
          <SelectItem value="mst">
          Logo Design
          </SelectItem>

         </SelectGroup>
        </SelectContent>
       </Select>
      </form>
         </div>
         {/* info */}
     <div
     className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
     >Info</div>
       </div>
     </div>
   </motion.section>
 );
}

export default Contact;