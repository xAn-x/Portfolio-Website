import React from 'react'
import style from "./style.module.css";
import projectsData from './projectsData';

import webLink from "../images/utils/webLink.png"
import githubLink from "../images/utils/githubLink.png"

export default function Projects() {
    return (
        <div className={`${style.pageLayout}`}>
            <h1 className={`${style.pageHeading}`}>Projects</h1>
            <div className={`${style.projectContainer}`}>
                {projectsData.map((project, idx) => {
                    return (
                        <div className={`${style.projectBox}`} key={`{project-${idx + 1}}`}>
                            <div>
                                <img src={project.image} alt="project-image" className={`${style.projectImage}`} />
                            </div>
                            <h2 className={`${style.projectTitle}`}>{project.name}</h2>
                            <p className={`${style.projectDiscription}`}>{project.description}</p>
                            <div className={`${style.linkContainer} d - flex justify - content - between`}>
                                <a href={project.websiteLink} target="_blank">
                                    <div>
                                        <img src={webLink} alt="website link" className={`${style.projectLink}`} />
                                    </div>
                                    <div>Website Link</div>
                                </a>
                                <a href={project.githubLink} target="_blank">
                                    <div>
                                        <img src={githubLink} alt="github link" className={`${style.projectLink}`} />
                                    </div>
                                    <div>Github Link</div>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
