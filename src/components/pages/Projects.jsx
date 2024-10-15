import furBabyUrl from '../../assets/projectImgs/furBaby.png';
import weatherUrl from '../../assets/projectImgs/weather-app.png';
import taskUrl from '../../assets/projectImgs/task-board.png';
import weddingUrl from '../../assets/projectImgs/wedding-app.png';
import metronomeUrl from '../../assets/projectImgs/metronome.png';
import bookUrl from '../../assets/projectImgs/bookApp.png';

export default function Projects () {
    return (
        <div className="content">
            <h2>My Projects</h2>
            <hr></hr>
            <div className="projectCont">
                <img src={furBabyUrl}></img>
                <div className="project-info">
                    <h3>Find Your Fur Baby!</h3>
                    <p>Find your fur baby is an app designed to help you find your new best friend! Take the quiz to see what dog breed best matches your personality and lifestyle, then search your area for adobtable dogs of that breed in your area!</p>
                    <div className="links">
                        <a target='_blank' href="https://pawsitive-connections.github.io/find-your-fur-baby/">View App</a>
                        <a target='_blank' href="https://github.com/cmatthews3212/find-your-fur-baby">View Repository</a>
                    </div>

                </div>
            </div>
            <hr></hr>
            <div className="projectCont">
                <img src={weatherUrl}></img>
                <div className="project-info">
                    <h3>Weather App</h3>
                    <p>This weather app is designed to help users find the current and next 5 days of weather wherever they need! They can search their current area, an area they are traveling to, or just an area they are curious about!</p>
                    <div className="links">
                        <a target='_blank' href="https://cmatthews3212.github.io/Weather-App/">View App</a>
                        <a target='_blank' href="https://github.com/cmatthews3212/Weather-App">View Repository</a>
                    </div>

                </div>
            </div>
            <hr></hr>
            <div className="projectCont">
                <img src={taskUrl}></img>
                <div className="project-info">
                    <h3>Task Board</h3>
                    <p>This task board app is designed to help users keep track of their to-do's, easily add and delete new tasks, and see when things are due, close to due, or overdue!</p>
                    <div className="links">
                        <a target='_blank' href="https://cmatthews3212.github.io/Task-Board/">View App</a>
                        <a target='_blank' href="https://github.com/cmatthews3212/Task-Board">View Repository</a>
                    </div>

                </div>
            </div>
            <hr></hr>
            <div className="projectCont">
                <img src={weddingUrl}></img>
                <div className="project-info">
                    <h3>Singer Wedding Website</h3>
                    <p>This wedding website is designed using React for the Singer wedding following the designs by the Bride and using mobile-first design methods.</p>
                    <div className="links">
                        <a target='_blank' href="https://singer-wedding.netlify.app/">View App</a>
                        <a target='_blank' href="https://github.com/cmatthews3212/singer-wedding">View Repository</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="projectCont">
                <img src={metronomeUrl}></img>
                <div className="project-info">
                    <h3>Complex Metronome</h3>
                    <p>This complex metronome mobile app is designed for musicians who use odd time-signatures and need to break up their beats into sections for their music. It is designed by Elijah Matthews and Developed by Christine Matthews and is still in development. </p>
                    <p>Note: to view app on desktop, inspect the page and view in mobile mode.</p>
                    <div className="links">
                        <a target="_blank" href="https://complex-metronome.netlify.app/">View App</a>
                        <a className='private'>Private Repository</a>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="projectCont">
                <img src={bookUrl}></img>
                <div className="project-info">
                    <h3>Hello Book</h3>
                    <div className="links">
                        <p>Hello Book is an ecommerce website where users can browse, buy, and sell used books! It is designed for the book lovers who just want to find their next read at a reasonable price. </p>
                        <p>Note: the website may take long to load or may not load at all due to where it is being hosted.</p>
                        <a target='_blank' href="https://hello-books-zbnd.onrender.com/">View App</a>
                        <a target='_blank' href="https://github.com/Book-Hackers/Hello-Books">View Repository</a>
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}