import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setErrorMessage('Please enter your name')
            return;
        } else if (message === '') {
            setErrorMessage(`Please enter a message!`);
            return;
        } else {
            setErrorMessage("")
        }
        setName('')
        setEmail('');
        setMessage('')
        alert(`
    Name: ${name}
    Email: ${email}
    Message: ${message}`);
    }

    return (
        <div className="contact-container">
            <h1>Contact me!</h1>
            <form className="contact-form">
                <div className='name-email-container'>
                    <div className='name-container'>
                    <label htmlFor="contact-name">Name</label>
                    <input id='contact-name' className="contact-form" name="name" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='email-container'>

                    <label htmlFor="contact-email">Email</label>
                    <input id='contact-email' className="contact-form" name="email" type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <label htmlFor="contact-message">Message</label>
                <textarea id='contact-message' className="contact-form" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                <br />
                <button className="contact-form" type="button" onClick={handleFormSubmit}>Send</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Contact;