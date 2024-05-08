import SocialMedia from './SocialMedia'
import '../styles/Footer.css'

function Footer() {
    return (
        <footer>
            <section className="footer__container">
            <h2 className="footer__title">My socials</h2>
            <SocialMedia />
            </section>
        </footer>
    )
}

export default Footer