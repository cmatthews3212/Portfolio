import imgUrl from '../../assets/profile.jpg';

export default function About () {
    return (
        <div className="content">
            <h2>About Me</h2>
            <hr></hr>
            <div className="imgCont">
                <img src={imgUrl}></img>
                <div className="about-info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ullamcorper enim sit amet vulputate. Etiam id felis eget ante iaculis volutpat aliquam nec urna. Nullam gravida consectetur neque. Nullam sollicitudin ultrices eros. Maecenas eleifend bibendum ultrices. Mauris a feugiat lectus. Nulla ac ipsum condimentum, pellentesque nisi non, ullamcorper mi.</p>
                </div>
            </div>
            <hr></hr>
            <h2>My Mission</h2>
            <hr></hr>
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ullamcorper enim sit amet vulputate. Etiam id felis eget ante iaculis volutpat aliquam nec urna. Nullam gravida consectetur neque. Nullam sollicitudin ultrices eros. Maecenas eleifend bibendum ultrices. Mauris a feugiat lectus. Nulla ac ipsum condimentum, pellentesque nisi non, ullamcorper mi.</p>

            </div>
            <hr></hr>
            <h2>Why Work with Me</h2>
            <hr></hr>
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ullamcorper enim sit amet vulputate. Etiam id felis eget ante iaculis volutpat aliquam nec urna. Nullam gravida consectetur neque. Nullam sollicitudin ultrices eros. Maecenas eleifend bibendum ultrices. Mauris a feugiat lectus. Nulla ac ipsum condimentum, pellentesque nisi non, ullamcorper mi.</p>

            </div>
            <hr></hr>
            <h2>Why You Matter to Me</h2>
            <hr></hr>
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ullamcorper enim sit amet vulputate. Etiam id felis eget ante iaculis volutpat aliquam nec urna. Nullam gravida consectetur neque. Nullam sollicitudin ultrices eros. Maecenas eleifend bibendum ultrices. Mauris a feugiat lectus. Nulla ac ipsum condimentum, pellentesque nisi non, ullamcorper mi.</p>

            </div>
            <hr></hr>
        </div>
    )
}