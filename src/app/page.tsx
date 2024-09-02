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
export default function page() {
  const [IsLoading, SetIsLoading]=useState(true);
  const [ShowContent, SetShowContent]=useState(false);
  const handleLoaderLoaded=()=>{
    SetIsLoading(false);
    setTimeout(()=>SetShowContent(true), 450);
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
      <Loader IsLoading={IsLoading} SetIsLoading={handleLoaderLoaded}/>
    </div>
  )
}
