"use client";
import React from 'react'
import Link from 'next/link';
import Button from '@/components/Button';
import {motion} from "framer-motion";
function Hero() {
  return (
    <div className="hero">
        <motion.h1 className='hero-title'
        initial={{opacity:0, y:5}}
        animate={{opacity:1, y:0}}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay:0.6,
        }}>My name is</motion.h1>
        <motion.h2 className='hero-title-large'initial={{opacity:0, y:5}}
        animate={{opacity:1, y:0}}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay:0.75,
        }}>Andrew Wang</motion.h2>
        <motion.h4 className='hero-title-large hero-title-sub'
        initial={{opacity:0, y:5}}
        animate={{opacity:1, y:0}}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay:1.05,
        }}>I am a UWaterloo student</motion.h4>
        <motion.p className='hero-text'
        initial={{opacity:0, y:5}}
        animate={{opacity:1, y:0}}
        transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 1.35,
        }}>
            I am a Computer Engineering student at the University of Waterloo. My current focus is towards machine learning and full-stack web development.
        </motion.p>
    </div>
  )
}

export default Hero