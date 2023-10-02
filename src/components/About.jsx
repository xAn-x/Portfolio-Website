import React from 'react'
import style from './style.module.css';
export default function About() {
    return (
        <div className={`${style.pageLayout}`}>
            <h1 className={`${style.aboutHeading}`}>About</h1>
            <h2 className={`${style.about_para1}`}>Hi,I am Deepanshu,nice to have you, Please Take a look around</h2>
            <p className={`${style.about_para2}`}>
                I'm a passionate software developer with strong problem-solving abilities, having successfully tackled over 850 problems on LeetCode.
                My expertise extends to web development, where I specialize in the MERN stack and also possess proficiency in Next.js.
                My programming repertoire includes C++, Java, Python, and JavaScript. Furthermore, I hold a solid grasp of core subjects such as Operating Systems, Database Management Systems (DBMS), MySQL, and Computer Networks (CN).
            </p>
        </div>
    )
}
