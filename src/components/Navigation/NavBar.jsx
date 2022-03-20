import React from 'react'
import "./navbar.css"

export const NavBar = () => {
    return (
        <div>
            {/* <!-- Navigation --> */}
            <nav class="navbar ">
                <h1 class="nav-logo">&#10092;&#10100; Gowtham &#10101;&#10093;</h1>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
