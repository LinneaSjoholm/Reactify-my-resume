import React from 'react';
import ContactForm from '../components/ContactForm'
import '../styles/Contact.css'
import plant3 from '../assets/plant3.png'

function Contact() {
    return (
        <>
        
        <section className="contact__container">
            <h2 className="contact__title">Contact me</h2>
            <p className="contact__text">Have questions or want to get in touch? Fill out the form below.</p>
            <ContactForm />
            </section>

        <section className="background__plant3">
        <img src={plant3} alt="plants" className="background-image" />
        </section>

        </>
    );
}

export default Contact;
