import { useState } from 'react';

const Navigation = ({ currentPage, handlePageChange}) => {
    const handleClick = (page, event) => {
        event.preventDefault();
        handlePageChange(page);
    };

    return (
       <ul>
            <li>
                <a 
                href="#about" 
                onClick={(event) => handleClick('About', event)}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li>
                <a
                href="#portfolio"
                onClick={(event) => handleClick('Projects', event)}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li>
            <a
                href="#contact"
                onClick={(event) => handleClick('Contact', event)}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li>
            <a
                href="#resume"
                onClick={(event) => handleClick('Resume', event)}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
       </ul>
    )
}

export default Navigation;