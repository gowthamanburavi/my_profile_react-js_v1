import React from 'react'
import "./contactme.css"

export const Contact = () => {
    return (
        <div>
            {/* <!-- Contact me --> */}
            <section class="contact" id="contact">
                <h1 class="topic-heading">Contact Me</h1>
                <div class="contact-form-container">
                    <form action="POST">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="sender-name" placeholder="Enter Your Name" class="input-field"
                            required />
                        <label for="email">Email</label>
                        <input type="email" id="email" name="sender-email" placeholder="Enter Your Email" class="input-field"
                            required />
                        <label for="message">Message</label>
                        <textarea id="message" cols="60" rows="10" placeholder="Enter Your Message" name="message"
                            class="input-field" required></textarea>
                        {/* <!-- <input type="submit" value="Submit" id="submit-btn" class="submit-btn" /> --> */}
                        <button type="submit" value="Submit" id="submit-btn" class="submit-btn">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
