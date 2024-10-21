import { useState } from 'react';

const Navigation = ({ currentPage, handlePageChange}) => {
    const [isVisible, setIsVisible] = window.innerWidth < 850 ? useState(false) : useState(true)

    const handleMenuClick = () => {
        if (window.innerWidth < 850) {
            setIsVisible(prevVisible => !prevVisible);

        } else {
            setIsVisible(true)
        }
    }

    const handleClick = (page, event) => {
        event.preventDefault();
       if (window.innerWidth < 850) {
        setIsVisible(false)
       }
        handlePageChange(page);
    };

 
    return (
        <div>
            <div 
            className='menu' 
            onClick={handleMenuClick}
            >
                <div className="hamIcon"></div>
                <div className="hamIcon"></div>
                <div className="hamIcon"></div>
            </div>
       <ul className='menu-items' style={{ display: isVisible ? 'block' : 'none'}}>
            <li className={currentPage === 'About' ? ' active' : ''}>
                <a 
                href="#about" 
                onClick={(event) => handleClick('About', event)}

                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className={currentPage === 'Projects' ? 'active' : ''}>
                <a
                href="#portfolio"
                onClick={(event) => handleClick('Projects', event)}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            <li className={currentPage === 'Contact' ? ' active' : ''}>
            <a
                href="#contact"
                onClick={(event) => handleClick('Contact', event)}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            <li className={currentPage === 'Resume' ? ' active' : ''}>
            <a
                href="#resume"
                onClick={(event) => handleClick('Resume', event)}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
       </ul>
       </div>
    )
}

export default Navigation;