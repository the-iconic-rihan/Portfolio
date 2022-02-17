import React from 'react'
import './about.css';
import BhumiLogo from '../../img/BhumiLogo.png';
import photographer from "../../img/photographer.jpg";
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg">

                </div>
                <div className="a-card">
                    <img src={photographer} alt="not supported" className="a-img" />
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo recusandae amet dolore impedit earum, blanditiis tempora harum beatae quae quos natus est fugit. Reiciendis, labore?
                </p>
                <p className="a-desc">
                    Goal-oriented software Developer brings strong commitment to
                    collaboration and solutions-oriented problem-solving.
                    Fluid in programming languages like Python, Java and CPP.

                </p>
                <div className="a-award">
                    <img src={BhumiLogo} alt="not supported" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Member<br /><span className='a-title-date'>BHUMI NGO</span><br />
                            <small className='a-title-date'>September 2021-present | Remote, India</small>
                        </h4>
                        <p className="a-award-desc">
                            Participated in various virtual event conducted by bhumi NGO.
                            Attended webinars related to financial literacy,problem-solving, Conflict-management and
                            Soft Skills conducted by BHUMI NGO in Collaboration with corporate sectors.
                            Completed with Web development crash course from BHUMI NGO
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About