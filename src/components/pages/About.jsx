import imgUrl from '../../assets/profile.jpg';

export default function About () {
    return (
        <div className="content">
            <h2>About Me</h2>
            <hr></hr>
            <div className="imgCont">
                <img src={imgUrl}></img>
                <div className="about-info">
                    <p>I am a freelance web developer geared towards helping non-profits build high-quality web products for low-market rates. My mission is to provide you the best website to fit your needs, goals, and vision for your non-profit. I provide services that include helping you strategies your website goals, designing your new website in a way that will best achieve those goals, and building your website from the ground up!</p>
                </div>
            </div>
            <hr></hr>
            <h2>What I provide</h2>
            <hr></hr>
            <div className='info'>
                <ul className='provide'>
                    <li><span>*</span>Support and expertize in strategizing your website based on your non-profit goals.</li>
                    {/* <hr className='list'></hr> */}
                    <li><span>*</span>Support in designing the layout and look of your non-profit website.</li>
                    {/* <hr className='list'></hr> */}
                    <li><span>*</span>Developing your non-profit website based on your non-profit needs, goals, and design.</li>
                    {/* <hr className='list'></hr> */}
                </ul>
            </div>
            <hr></hr>
            {/* <h2>My Mission</h2>
            <hr></hr>
            <div className="info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ullamcorper enim sit amet vulputate. Etiam id felis eget ante iaculis volutpat aliquam nec urna. Nullam gravida consectetur neque. Nullam sollicitudin ultrices eros. Maecenas eleifend bibendum ultrices. Mauris a feugiat lectus. Nulla ac ipsum condimentum, pellentesque nisi non, ullamcorper mi.</p>

            </div>
            <hr></hr> */}
            <h2>Why Work with Me</h2>
            <hr></hr>
            <div className="info">
            <p>If you team with me to build your non-profit website, you will not be working with just any web developer. You will be working with a web developer that is passionate about furthering the good of thw world and abeling your non-profit towards that! Many web developers have the skills needed to build your ministry website, but working with me will give you the peace of mind that your developer has the same values and vision as your non-profit does.</p>

            </div>
            <hr></hr>
            <h2>Why You Matter to Me</h2>
            <hr></hr>
            <div className="info">
            <p>You matter to me because I care about your non-profit mission and furthering it along. This is why I offer low-value market rates for my service, because I view my job as your web developer a service to those in service, by offering you rates that you can afford and that will also bring your website to the next level to futher your non-profit!</p>

            </div>
            <hr></hr>
        </div>
    )
}