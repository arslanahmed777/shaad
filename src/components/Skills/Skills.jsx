import React from 'react'
import html from "../../assets/images/html.png"
import css from "../../assets/images/css.png"
import js from "../../assets/images/js.png"
import react from "../../assets/images/react.png"
import php from "../../assets/images/php.png"
import nodejs from "../../assets/images/nodejs.png"
import mongodb from "../../assets/images/mongodb.png"
import mysql from "../../assets/images/mysql.png"
import redux from "../../assets/images/redux.png"
import github from "../../assets/images/github.png"
const Skills = () => {
    const skills = [
        { name: "html", pic: html, classes: "" },
        { name: "css", pic: css, classes: "" },
        { name: "js", pic: js, classes: "" },
        { name: "react", pic: react, classes: "" },
        { name: "php", pic: php, classes: "" },
        { name: "nodejs", pic: nodejs, classes: "" },
        { name: "mongodb", pic: mongodb, classes: "" },
        { name: "mysql", pic: mysql, classes: "" },
        { name: "redux", pic: redux, classes: "" },
        { name: "github", pic: github, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },
        { name: "html", pic: html, classes: "" },

    ]
    return (
        <div className='row'>
            <div className='col-lg-12'>
                <h1 className='text-center text-3xl font-semibold mb-4'>Skills</h1>
            </div>
            {skills.map((skill, i) => {
                return (
                    <div key={i} className='col-lg-1 flex mb-4'>
                        <img src={skill.pic} alt={skill.name} className='w-full h-auto max-w-[50px] m-auto' />
                    </div>
                )
            })}

        </div>
    )
}

export default Skills