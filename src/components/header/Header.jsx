import React from 'react'

const Header = () => {
    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">HI!</span>
                    <span className="down">I am Md. Ziadul Haque</span>
                </h1>
                <p className="header-subtitle">Web Developer</p>

                <button className="btn btn-primary">Visit My Profile</button>
            </div>
        </header>
    )
}

export default Header