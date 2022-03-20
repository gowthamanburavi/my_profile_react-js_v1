import React from 'react'
import "./projects.css"
import gtmar from "../../images/gtmar-one.png"
import quiz from "../../images/quiz_you.png"
import todo from "../../images/redux_todo.png"

export const Projects = () => {
    return (
        <div>
            {/* <!-- Projects --> */}
            <scetion class="projects" id="projects">
                <h1 class="topic-heading">Some of my Projects</h1>
                <div class="projects-container">
                    <div class="project-card">
                        <img src={quiz} alt="" class="project-image" />
                        <h2 class="project-title">Quiz You!</h2>
                        <p class="project-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem a harum
                            quod accusamus, ex ullam alias odio quam et laborum blanditiis.</p>
                        <button class="btn btn-demo-live">Live demo</button>
                        <button class="btn btn-git-repo">GitHub repo</button>
                    </div>
                    <div class="project-card">
                        <img src={gtmar} alt="" class="project-image" />
                        <h2 class="project-title">gtmar.one</h2>
                        <p class="project-desc">A ToDo app built with Redux for state managemnt with Framer motion</p>
                        {/* <!-- <button class="btn btn-demo-live">Live demo</button> --> */}
                        <button class="btn btn-git-repo" style={{ borderRadius: "10px 10px 10px 10px", }}>GitHub repo</button>
                    </div>
                    <div class="project-card">
                        <img src={todo} alt="" class="project-image" />
                        <h2 class="project-title">TODO with Redux</h2>
                        <p class="project-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ea vel
                            quis magnam facere, </p>
                        <button class="btn btn-demo-live">Live demo</button>
                        <button class="btn btn-git-repo">GitHub repo</button>
                    </div>
                </div>
            </scetion >
        </div >
    )
}
