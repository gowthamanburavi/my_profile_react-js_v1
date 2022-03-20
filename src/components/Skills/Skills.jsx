import React from 'react'
import "./skills.css"

export const Skills = () => {
    return (
        <div>
            {/* <!-- Top skills --> */}
            <section calss="skills" id="skills">
                <h1 class="topic-heading">My Top Skills</h1>
                <div class="skills-icons">
                    <div>
                        <img src="https://img.icons8.com/color/96/000000/html-5--v1.png" alt="" class="icon icon-card" />
                        <img src="https://img.icons8.com/color/96/000000/css3.png" alt="" class="icon icon-card" />
                        <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt=""
                            class="icon icon-card" />
                    </div>

                    <div>
                        <img src="https://img.icons8.com/plasticine/100/000000/react.png" alt="" class="icon icon-card" />
                        <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="" class="icon icon-card" />
                        {/* <!-- <img src="https://img.icons8.com/color/96/000000/tensorflow.png" alt="" class="icon icon-card" /> --> */}
                        {/* <!-- <img src="https://img.icons8.com/color/96/000000/amazon-web-services.png" alt="" class="icon icon-card" /> --> */}
                        <img src="https://img.icons8.com/color/96/000000/git.png" alt="" class="icon icon-card" />
                    </div>
                </div>
            </section></div>
    )
}
