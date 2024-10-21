import { useState } from 'react';

const Footer = () => {
    return (
        <footer>
        <h3>Developed by Christine Matthews</h3>
        <h4>Contact and portfolio:</h4>
        <ul>
            <li><span>*</span><a href="emailto:matthews.christinemarie@gmail.com">matthews.christinemarie@gmail.com</a></li>
            <li><span>*</span><a href="phone:6089212357">(608) 921-2357</a></li>
            <li><span>*</span><a href="https://github.com/cmatthews3212">Github Profile</a></li>
            <li><span>*</span><a href="https://www.linkedin.com/in/christine-andreola-matthews-21a7241b5/">LinkedIn Profile</a></li>
            <li><span>*</span><a href="https://www.facebook.com/christine.andreola">Facebook Profile</a></li>
        </ul>

        </footer>
    )
}

export default Footer;