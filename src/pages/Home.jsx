import '../styles/Home.css'
import image1 from '../assets/profile.jpg'
import plant1 from '../assets/plant1.png'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
        {/* <Switch /> */}
        <section className="home__container">
            <h1 className="home__title">Hey there! I'm Linnea,</h1>
            <p className="home__tagline">where creativity meets code and innovation sparks to life</p>
        </section>
        <div className="line"></div>
        <section className='home__image-container'>
        <img src={image1} alt="Linnea Sjöholm" className="home-image" />
        </section>
        
        <section className="background__plant1">
        <img src={plant1} alt="plants" className="background-image" />
        </section>
        
        <Footer />
        </>
    )
}

export default Home