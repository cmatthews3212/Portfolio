import { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


const Header = () => {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const menuStyle = {
        display: 'block'
    }

    return (
        <div >
        <header>
            <h1>Christine Matthews</h1>
            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}>            
            </Navigation>
        </header>
        <main>{renderPage()}</main>
        </div>
    

    )
}

export default Header;