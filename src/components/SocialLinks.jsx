import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../styles/Links.css'

function SocialLinks() {
    return (
        <section className="social-links">
            <Link to ="/"><FontAwesomeIcon icon={faHouse} /></Link>
            <a href="https://github.com/LinneaSjoholm">
            <FontAwesomeIcon icon={faSquareGithub} /></a>
            <a href="https://www.linkedin.com/in/linnea-sj%C3%B6holm-b88353308/">
            <FontAwesomeIcon icon={faLinkedin} /></a>
            </section>
    )
}

export default SocialLinks