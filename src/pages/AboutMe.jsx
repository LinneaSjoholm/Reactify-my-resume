import myInfo from "../data/myInfo"
import plant2 from "../assets/plant2.png"
import '../styles/Aboutme.css'

function AboutMe() {
  return (
    <>
    
    <div className="about__container">
      <h1 className="about__title">Get to know me</h1>
      <p className="about__info">I go by the name of {myInfo.name} and I'm {myInfo.age} years young. 
      These days, you can find me nestled in the heart of {myInfo.city},  {myInfo.country}.
      As of late, I've been immersing myself in the world of {myInfo.education}, a realm 
      with endless possibilities. <br></br><br></br>
      The journey ahead may be daunting, but my spirit is fueled by 
      boundless enthusiasm to conquer every challenge that comes my way.
      The future is unwritten, but I'm ready to script my own destiny.</p>
      
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

    </>

  );
}

export default AboutMe