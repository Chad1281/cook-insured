import React from "react";
import "./style.css";
import Phone from "../../assets/images/other/phone.png";

export default function ContactForm() {
    return(
        <div className="contact hide">
            <h2>Contact Request</h2>
            <form>
                <label for="name">Full Name:</label><br />
                <input type="text" id="fname" name="fname" placeholder="Your name" /><br />
                <label for="phonhe">Phone Number:</label><br />
                <input type="tel" id="phone" name="phone" placeholder="555-555-5555" /><br />
                <label for="comment">Comments:</label><br />
                <textarea id="comment" name="comment" placeholder="Leave a comment"></textarea><br />
                <input type="submit" value="Submit" />
            </form>
            <div id="agent">
                <p><a href="tel:512-644-3039">Call Chad Cook 512-312-7360</a></p>
                <address><a href="mailto:ccook@fireflyagency.com" title="Email" alt="email">Email ccook@fireflyagency.com</a></address>
            </div>            
            <img src={Phone} alt="Man on iPad while on phone" />
        </div>
    )
}