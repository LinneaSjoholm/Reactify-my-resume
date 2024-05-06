import React from 'react';
import ContactForm from '../components/ContactForm'
import '../styles/Contact.css'

function Contact() {
    return (
        <section className="contact-container">
            <h2 className="contact-title">Contact me</h2>
            <p className="contact-text">Have questions or want to get in touch? Fill out the form below.</p>
            <ContactForm />
        </section>
    );
}

export default Contact;
