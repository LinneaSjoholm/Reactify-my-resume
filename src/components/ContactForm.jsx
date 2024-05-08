
import Button from './Button';
import '../styles/Form.css';


function ContactForm() {

  return (
    <div className="contact__form">
      <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Enter you email" required />

      <label htmlFor="message">Message</label>
      <textarea cols="30" rows="10" id="message" name="message" placeholder="Enter your message" required></textarea>

      </form>
      <Button className="btn-form">Submit</Button>
    </div>
  )
}

export default ContactForm;
