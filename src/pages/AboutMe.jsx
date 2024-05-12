import myInfo from "../data/myInfo"
import plant2 from "../assets/plant2.png"
import '../styles/Aboutme.css'

function AboutMe() {
  return (
    <>
    
    <div className="about__container">
      <h1 className="about__title">Get to know me</h1>
      <p className="about__info">My name is {myInfo.name} and I'm {myInfo.age} years old. 
      These days, you can find me nestled in the heart of {myInfo.city},  {myInfo.country}.
      As of late, I've been immersing myself in the world of {myInfo.education}, a realm 
      with endless possibilities. <br></br><br></br>
      As I continue to delve into the world of Frontend Development, I am inspired by its boundless potential 
      and the opportunities it presents for creative expression and innovation. 
      With each passing day, I am driven to deepen my understanding and hone my skills in this dynamic field.</p>
      
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