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
                I have a passion for AI and Machine Learning and have developed several Python applications for detecting human expressions and appearances. I have applied many data pipelining, data mining, and statistical analysis in my work and projects. and I would be very interested in applying my knowledge and programming skills in this field. I would be very interested in getting more hands-on experience in this field.
                </p>
                <p className="about-grid-info-text">
                As a self-motivated quick learner with strong problem-solving skills and unlimited curiosity and desire to learn new things, I am enthusiastic to explore my career in computing and learn all aspects of software development. I enjoy solving problems and taking challenges with self motivated research and analysis. At the same time I am also an effective team player and natural leader who loves to take initiative and organize the project.
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
                    <Image src="/andrew.jpg" alt="profile" fill/>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About