
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/SocialMedia.css'

function SocialMedia() {
    return (
        <section className="socialmedia-links">
            <a href="https://github.com/LinneaSjoholm">
            <FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href="https://www.linkedin.com/in/linnea-sj%C3%B6holm-b88353308/">
            <FontAwesomeIcon icon={faLinkedin} /></a>
            </section>
    )
}

export default SocialMedia