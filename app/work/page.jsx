"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import{BsArrowUpRight, BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";

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
];

const Work = () => {
 return (
  <div>this is work</div>
 )
}

export default Work;