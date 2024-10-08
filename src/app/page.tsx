"use client";
import React, { useState } from 'react'
import Head from 'next/head';
import "@/scss/index.scss";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Loader from '@/components/Loader';
export default function Page() {
  const [IsLoading, setIsLoading]=useState(true);
  const [ShowContent, setShowContent]=useState(false);
  const handleLoaderLoaded=()=>{
    setIsLoading(false);
    setTimeout(()=>setShowContent(true), 450);
  }
  return (
    <div className='app'>
      <Head>
        <title>Andrew Wang</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      {ShowContent&&(
        <>
          <Navbar/>
          <SocialIcons/>
          <Email/>
          <main>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Contact/>
          </main>
        </>
      )}
      <Loader IsLoading={IsLoading} setIsLoading={handleLoaderLoaded}/>
    </div>
  )
}
