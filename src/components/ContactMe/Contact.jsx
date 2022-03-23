import React, { useRef, useState } from 'react'
import "./contactme.css"
import emailjs from '@emailjs/browser';



export const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formRef);
        emailjs.sendForm('service_uudg1ln', 'template_0zzg53a', formRef.current, 'r7RloG3DoMiq0_k6e')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            {/* <!-- Contact me --> */}
            <section class="contact" id="contact">
                <h1 class="topic-heading">Contact Me</h1>
                <div class="contact-form-container">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="user_name" placeholder="Enter Your Name" class="input-field"
                            required />
                        <label for="email">Email</label>
                        <input type="email" id="email" name="user_email" placeholder="Enter Your Email" class="input-field"
                            required />
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" name="user_subject" placeholder="Enter Your Subject" class="input-field"
                            required />
                        <label for="message">Message</label>
                        <textarea id="message" cols="60" rows="7" placeholder="Enter Your Message" name="message"
                            class="input-field" required></textarea>
                        {/* <!-- <input type="submit" value="Submit" id="submit-btn" class="submit-btn" /> --> */}
                        <button type="submit" value="Submit" id="submit-btn" class="submit-btn">Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </section>
        </div>
    )
}
