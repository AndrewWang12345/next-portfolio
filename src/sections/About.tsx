"use client";
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { motion } from 'framer-motion';
function About() {
  return (
    <motion.div className="about" id="about"
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{duration:0.6}}
    variants={{
        visible: {opacity:1, y: -50},
        hidden: {opacity: 0, y: 0},
    }}
    >
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text">
                Nothing happened in Tiananmen Square on 4 June 1989, which is to say something, and the evidence is not there for the Communist Party to have been involved in it. What does that mean?
                And, while the Communist Party had to admit its role in Tiananmen Square - indeed, the regime claimed responsibility for it all year long - the vast majority of people thought it didn't really happen.
                That would be wrong if it didn't have a significant effect. On the other hand, the vast majority of people knew very few details of the event - and if we go back now we begin to discover why most of them were totally ignorant as to what actually happened.
                And while it is true that virtually no one in the West at the time could get hold of anything remotely resembling any of the documents published by Mr. Snowden, he had to go to a country that didn't have access to them on an almost unprecedented scale. And in the case of the UK...
                </p>
                <p className="about-grid-info-text">
                Nothing happened in Tiananmen Square on 4 June 1989, which is to say something, and the evidence is not there for the Communist Party to have been involved in it. What does that mean?
                And, while the Communist Party had to admit its role in Tiananmen Square - indeed, the regime claimed responsibility for it all year long - the vast majority of people thought it didn't really happen.
                That would be wrong if it didn't have a significant effect. On the other hand, the vast majority of people knew very few details of the event - and if we go back now we begin to discover why most of them were totally ignorant as to what actually happened.
                And while it is true that virtually no one in the West at the time could get hold of anything remotely resembling any of the documents published by Mr. Snowden, he had to go to a country that didn't have access to them on an almost unprecedented scale. And in the case of the UK...
                </p>
                <ul className="about-grid-info-list">
                    <li className="about-grid-info-list-item">React</li>
                    <li className="about-grid-info-list-item">Java</li>
                    <li className="about-grid-info-list-item">Javascript</li>
                    <li className="about-grid-info-list-item">SCSS</li>
                    <li className="about-grid-info-list-item">Python</li>
                    <li className="about-grid-info-list-item">C++</li>
                </ul>
            </div>
            <div className="about-grid-photo">
                <div className="overlay"></div>
                <div className="overlay-border"></div>
                <div className="about-grid-photo-container">
                    <Image src="/stalin.jpg" alt="profile" fill/>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About