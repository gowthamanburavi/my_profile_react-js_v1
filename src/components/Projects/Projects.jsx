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
                        <p class="project-desc">A quiz with questions from Open Trivia database API using React, React-Hooks, React-router, Context API and CSS for style the project</p>
                        <a href="https://serene-benz-e8e393.netlify.app/" class="btn btn-demo-live">Live demo</a>
                        <a href="https://github.com/gowthamanburavi/trivia_quiz" class="btn btn-git-repo">GitHub repo</a>
                    </div>
                    <div class="project-card">
                        <img src={gtmar} alt="" class="project-image" />
                        <h2 class="project-title">gtmar.one</h2>
                        <p class="project-desc">My portfolio built with React JS and styling with stylesheets</p>
                        {/* <!-- <button class="btn btn-demo-live">Live demo</button> --> */}
                        <a href="https://github.com/gowthamanburavi/my_profile_react-js_v1" class="btn btn-git-repo" style={{ borderRadius: "10px 10px 10px 10px", }}>GitHub repo</a>
                    </div>
                    <div class="project-card">
                        <img src={todo} alt="" class="project-image" />
                        <h2 class="project-title">TODO with Redux</h2>
                        <p class="project-desc">A TODO app with React, Redux for state management and effects with Framer motion.</p>
                        <a href="https://adoring-galileo-2e3951.netlify.app/" class="btn btn-demo-live">Live demo</a>
                        <a href="https://github.com/gowthamanburavi/react-redux-todo_list-app" class="btn btn-git-repo">GitHub repo</a>
                    </div>
                </div>
            </scetion >
        </div >
    )
}
