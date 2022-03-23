import React from 'react'
import "./timeline.css"

export const Timeline = () => {
    return (
        <div>
            {/* <!-- Education --> */}
            <section class="education" id="education">
                <h1 class="topic-heading">Education & Experience</h1>
                <div class="education-container">
                    <div class="timeline">
                        <ul>
                            <li>
                                <div class="timeline-content">
                                    <h1>2018 - Present</h1>
                                    <p>Own business, procurement and sales of silk. Weft processing for strength and durability</p>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-content">
                                    <h1>2015 - 2017</h1>
                                    <p>System engineer at Tata Consultancy Services. Developing and maintaining web pages with Teamsite</p>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-content">
                                    <h1>2010 - 2014</h1>
                                    <p>Engineering graduation fom SNS College of Technology, Coimbatore</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
