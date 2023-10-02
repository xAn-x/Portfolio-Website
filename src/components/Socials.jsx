import React from 'react'
import style from "./style.module.css";
import codechef from "../images/socials/codechef.svg"
import whatsapp from "../images/socials/whatsapp.svg"
import github from "../images/socials/github.svg"
import gmail from "../images/socials/gmail.svg"
import linkedIn from "../images/socials/linkedin.svg"
import leetcode from "../images/socials/leetcode.png"

export default function Socials() {
    return (
        <div className={`${style.pageLayout}`}>
            <h1 className={`${style.pageHeading}`}>Socials</h1>
            <div className={`${style.socialsContainer}`}>
                <a href="https://www.linkedin.com/in/deepanshu-bhatt-b74a21209/" target="_blank">
                    <img src={linkedIn} alt="linkedin" className={`${style.socialIcon}`} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=918966821476" target="_blank">
                    <img src={whatsapp} alt="whatsapp" className={`${style.socialIcon}`} />
                </a>
                <a href="https://github.com/xAn-x" target="_blank">
                    <img src={github} alt="github" className={`${style.socialIcon}`} />
                </a>
                <a href="mailto:deepanshubhat011@gmail.com" target="_blank">
                    <img src={gmail} alt="gmail" className={`${style.socialIcon}`} />
                </a>
                <a href="https://leetcode.com/__xAn_/" target="_blank">
                    <img src={leetcode} alt="leetcode" className={`${style.socialIcon}`} />
                </a>
                <a href="https://www.codechef.com/users/stanieee" target="_blank">
                    <img src={codechef} alt="codechef" className={`${style.socialIcon}`} />
                </a>
            </div>
        </div>
    )
}
