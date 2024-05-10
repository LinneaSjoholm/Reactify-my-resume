
import Button from './Button'
import { useState } from 'react'

import '../styles/Form.css';

function ContactForm() {

  const initialFieldState = { name: '', email: '', message: ''};

  const [inputFields, setInputFields] = useState([
    {name: '', email: '', message: ''}
  ]);
  
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  } 

  const submit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    setInputFields([initialFieldState]);
  }

  return (
    <div className="contact__form">
      <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <label htmlFor="name">Name</label>
              <input
                name='name'
                placeholder='Enter your name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <label htmlFor="email">Email</label>
              <input
                name='email'
                placeholder='Enter your email'
                value={input.email}
                onChange={event => handleFormChange(index, event)}
              />
              <label htmlFor="message">Message</label>
              <textarea 
              cols="30" 
              rows="10" 
              name="message" 
              placeholder="Enter your message"
              value={input.message}
              required
              onChange={event => handleFormChange(index, event)}
              />

            
            </div>
          )
        })}
      </form>
      <Button className="btn-form" onClick={submit}>Submit</Button>
    </div>
  );
}
  

export default ContactForm
