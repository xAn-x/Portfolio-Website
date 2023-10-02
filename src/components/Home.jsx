import React from 'react'
import style from "./style.module.css"
export default function Home() {
    return (
        <div className={`${style.pageLayout}`}>
            <h4 className={`${style.homeHeading}`}>
                Hi I am,
            </h4>
            <div className={`${style.wrapper}`}>
                <p className={`${style.line__1}`}>Deepanshu Bhatt</p>
                <p className={`${style.line__2}`}>I'm a Software Engineer :)</p>
                <div className="mt-3">
                    <p className={`${style.aboutPara}`} >A creative thinker and problem solver, adept in software development and working with various data structures. A strong team player with excellent collaboration skills, and a commitment to maximizing the production process within a facility.</p>
                    {/* <button type="button" className={`btn btn-outline-danger ${style.viewMoreBtn} mt-3`}>View More</button> */}
                </div>
            </div>
        </div >
    )
}
