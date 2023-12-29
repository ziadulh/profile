import React from 'react'
import hridoy from '../../assets/imgs/hridoy.jpg'

const About = () => {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <img src={hridoy} className="about-img" alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            Hey, I'm Md. Ziadul Haque, a web wizard with 3 years in the coding cosmos
                            Laravel, Jquery is my playground, where I sculpt robust backends and seamless APIs. 
                            <br/>
                            Dabbling in React, Vue, and Node.js, I add a sprinkle of frontend magic. From elegant interfaces to powerful backends, I bring digital dreams to life. Let's code the future together!
                        </p>
                        <button className="btn-rounded btn btn-outline-primary mt-4">Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About