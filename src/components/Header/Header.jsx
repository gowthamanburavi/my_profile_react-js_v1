import React from 'react'
import "./header.css"
import My_Pics from "../../images/my_pic_1.png"
import linkedin from "../../images/icons8-linkedin.svg"
import github from "../../images/icons8-github.svg"
import twitter from "../../images/icons8-twitter.svg"
import telegram from "../../images/icons8-telegram-app.svg"

export const Header = () => {
    return (
        <div>
            {/* <!-- Header --> */}
            <header class="header" id="home">
                <figure class="header-image-container">
                    <img class="header-image" src={My_Pics} alt="" />
                    <figcaption>Image of Gowtham</figcaption>
                </figure>
                <div class="header-intro">
                    <h1>
                        Hello, I'm <br />
                        <strong class="rainbow-text">
                            Gowtham <br /> Anburavi</strong>
                    </h1>
                    <h2>Web developer | React JS | Python</h2>
                    <div class="header-social-logos">
                        <a href="https://www.linkedin.com/in/gowthamanburavi" target="blank"><img
                            src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/gowthamanburavi" target="blank"><img src={github}
                            alt="github" /></a>
                        <a href="https://twitter.com/GowthamAnburavi" target="blank"><img src={twitter}
                            alt="twitter" /></a>
                        <a href="https://t.me/gtmar" target="blank"><img src={telegram}
                            alt="instagram" /></a>
                    </div>
                </div>

            </header></div>
    )
}
