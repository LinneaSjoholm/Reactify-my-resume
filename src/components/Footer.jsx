import SocialMedia from './SocialMedia'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            
            <section className="footer__container">
            
            <h3 className="footer__title">My socials</h3>
            <SocialMedia />
            <p className="footer__copyright">&copy; Linnea Sjöholm {new Date().getFullYear()}</p>
            </section>
            
        </footer>
    )
}

export default Footer