import { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


const Portfolio = () => {
   
    const [currentPage, setCurrentPage] = useState('Projects');

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
    return (
        <div>
            <Header>
                <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}>            
                </Navigation>
            </Header>
            <main>{renderPage()}</main>
            <Footer></Footer>
        </div>

    )
}

export default Portfolio;