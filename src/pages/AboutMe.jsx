import myInfo from "../data/myInfo"
import '../styles/Aboutme.css'

function AboutMe() {
  return (
    <div className="about-container">
    <section>
      <h1>About me</h1>
        <p>My name is {myInfo.name} and I am {myInfo.age} years old. Currently living in {myInfo.city}, {myInfo.country}.</p>
        <p>At the moment i'm studying to become a {myInfo.education}.</p>
    </section>
</div>
  );
}

export default AboutMe;