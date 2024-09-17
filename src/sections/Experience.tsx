"use client";
import React,{ useEffect, useState } from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
function Experience() {
    const [selected, setSelected]=useState(0);
    useEffect(()=>{
        const transformSelected=()=>{
            const underline=document.querySelector<HTMLElement>(".underline");
            underline!.style.top=`${selected*2.5}rem`;
        };
        transformSelected();
    },[selected]);
    const experiences = [
        {
            name:"H2O Geomatics",
            role:"Python Programmer",
            url: "https://www.h2ogeomatics.com/",
            start: "Sept 2023",
            end: "Dec 2023",
            shortDescription: [
                "Programmed technical solutions to improve performance of code, implemented and resulted in up to 50x processing speed improvement for large data sets using Cythonization, Parallel Processing, Numba, and Python code optimization.",
                "Utilized Modular Object Oriented Python Coding to simplify large problems",
                "Designed and implemented an algorithm to merge raster images based on uncertainty values of each pixel as part of the machine learning/AI tool chain.",
                "Designed and implemented Graphical User-Interface (GUI) for user friendly data file selection and operations."
            ],
        },
        {
            name:"Environment Canada",
            role:"Python Data Verification",
            url: "https://weather.gc.ca/",
            start: "Jan 2023",
            end: "April 2023",
            shortDescription: [
                "Implemented data mining algorithms and preformed time series analysis in Python to extract erroneous temperature measurements periodically collected by weather stations across North America over the span of 5 years",
                "Coded Python/Linux AWK script to iterate through all files and detect and remove all non-Canadian stations by analyzing the coordinate location of the station",
                "Implemented a Logistic Regression algorithm to predict the temperature at each weather station and K-nearest Neighbors Classification algorithm to label them as “erroneous” or “proper” based on its deviation from the predicted value"
            ],
        },
    ];
  return (
    <motion.div className="experience" id="experience"
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{duration:0.6}}
    variants={{
        visible: {opacity:1, y: -50},
        hidden: {opacity: 0, y: 0},
    }}>
        <div className="title">
            <h2>Where I&apos;ve Worked</h2>
        </div>
        <div className="container">
            <ul className="exp-slider">
                <div className="underline"></div>
                {
                    experiences.map((experience, index)=>{
                        return(
                            <li key={index} className={`exp-slider-item ${
                                index===selected && "exp-slider-item-selected"
                            }`}
                            onClick={()=>setSelected(index)}>
                                <span>{experience.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="exp-details">
                <div className="exp-details-position">
                    <h3>
                        <span>{experiences[selected].role}</span>
                        <span className="exp-details-position-company">
                            &nbsp;@&nbsp;
                            <Link className='link' href={experiences[selected].url}>{experiences[selected].name}{" "}</Link>
                        </span>
                    </h3>
                    <p className="exp-details-range">
                        {experiences[selected].start}-{experiences[selected].end}
                    </p>
                    <ul className="exp-details list">
                        {experiences[selected].shortDescription.map((description,index)=>(
                            <li key={index} className='exp-details-list-item'>
                                {description}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Experience