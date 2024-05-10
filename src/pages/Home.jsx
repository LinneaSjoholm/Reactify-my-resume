import '../styles/Home.css'
import image1 from '../assets/profile.jpg'
import plant1 from '../assets/plant1.png'

function Home() {
    return (
        <>
        <section className="home__container">
            <h1 className="home__title">Hey, I'm Linnea</h1>
            <p className="home__tagline">where creativity meets code and<br></br> 
            innovation sparks to life</p>
        </section>

        <div className="line"></div>
        <section className='home__image-container'>
        <img src={image1} alt="Linnea Sjöholm" className="home-image" />
        </section>
        
        <section className="background__plant1">
        <img src={plant1} alt="plants" className="background-image" />
        </section>
        </>
    )
}

export default Home