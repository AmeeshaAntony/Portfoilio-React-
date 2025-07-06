import React from "react";
import './Contact.css';
function Contact(){
    return(
        <div className="contact-container">
            <h1>Reach Out</h1>
            <form className="contact-form">
                <input name="name" placeholder="Name" type="text">Name</input>
                <input name="email" placeholder="Email" type="email">Email</input>
                <input name="message" placeholder="write to us" type="textarea">Message</input>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;