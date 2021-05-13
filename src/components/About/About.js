import React from 'react';
import AboutStyles from "./About.module.css";


const About = () => {
return (
    <main className={AboutStyles.wrapper}>
        <div className='left-about'>
            <div className={AboutStyles.image}>
                <img alt='background' src={'image-background.svg'} />
                <div className={AboutStyles.student}>

                <img alt='student' src={'student.svg'} />
                </div>
            </div>
        </div>
        <div className={AboutStyles.right}>
            <span className={AboutStyles.title}>
            About the apprenticeship
            </span>
            <span className={AboutStyles.description}>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  </span>
        </div>
    </main>
)
}


export default About;