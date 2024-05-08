import myInfo from "../data/myInfo"
import Footer from "../components/Footer"
import plant2 from "../assets/plant2.png"

import '../styles/Aboutme.css'

function AboutMe() {
  return (
    <>
    <div className="about__container">
      <h1 className="about__title">Get to know me</h1>
      <p className="about__info">My name is {myInfo.name}, and I'm {myInfo.age} years old. Nowadays, I reside in {myInfo.city},{myInfo.country} and have been living here since February. 
        Originally, I come from Skåne, and the reason I ended up in  {myInfo.city} is because I wanted to embark on new adventures. 
        Currently, I'm studying to become a {myInfo.education}, so this world is very new to me. 
        I'm incredibly enthusiastic about diving into this field headfirst and embracing all the challenges and opportunities it brings. 
        Let's see where this exciting journey takes me!</p>
      
      <section className="about__skills">
      <h2 className="skills">My skills</h2>
      <div className="skills-skill">HTML</div>
      <div className="skills-skill">CSS</div>
      <div className="skills-skill">JavaScript</div>
      <div className="skills-skill">React</div>
      </section>
      </div>

      <section className="background__plant2">
        <img src={plant2} alt="plants" className="background-image" />
        </section>

        <Footer />
</>

  );
}

export default AboutMe;