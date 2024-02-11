// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Manish R" />

            <div className='header__content'>
                <h1>Hi, I'm Manish R</h1>
                <p>Blockchain Developer</p>
                <a href="mailto:manishr2889@gmail.com" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;