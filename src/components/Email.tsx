"use client";
import React from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
function Email() {
  return (
    <motion.div className='email'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
    }}>
        <Link href="mailto:savagecamel123@gmail.com" className='email=link'>
            savagecamel123@gmail.com
        </Link>
    </motion.div>
  )
}

export default Email