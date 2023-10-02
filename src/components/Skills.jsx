import React from 'react'
import style from "./style.module.css";

import skillsData from "./skillsData.js";


export default function Skills() {
    return (
        <div className={`${style.pageLayout}`}>
            <h1 className={`${style.pageHeading}`}>Skills</h1>
            <div className={`${style.skillsContainer} d-flex`}>
                {skillsData.map((skill, idx) => {
                    return (
                        <div className={`${style.skillBox}`} key={`skill@${idx + 1}`}>
                            <img src={skill.image} alt={skill.name} className={`${style.skillBanner}`} />
                            <h3 className={`${style.skillHeading}`}>{skill.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
