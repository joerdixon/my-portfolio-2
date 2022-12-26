import React, { useState } from 'react'
// Logo SVG's
import ghsvg from '../../../assets/logos/github.svg'
import lisvg from '../../../assets/logos/linkedin.svg'
import lcsvg from '../../../assets/logos/leetcode.svg'
import gmsvg from '../../../assets/icons/mail.svg'
// import './Contact.css'

// TODO: Re-evaluate having a contact page at all.

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
        <div className='footer-container w-5/6 my-0 mx-auto flex justify-evenly items-center h-1/6'>
            <ul className='footer-links w-full flex justify-evenly items-center h-2/3'>
                {/* Linked In */}
                <a className="transition-transform-colors hover:bg-li-blue hover:-translate-y-1 duration-500 rounded-full" href="https://www.linkedin.com/in/joerdixon/" target='_blank' name="Link to Joe's LinkedIn"><img className="footerlink" src={lisvg} alt="LinkedIn logo" /></a>
                {/* GitHub */}
                <a className="transition-transform-colors hover:bg-gh-grey hover:-translate-y-1 duration-500 rounded-full" href="https://github.com/joerdixon" target='_blank' name="Link to Joe's GitHub Profile"><img className="footerlink" src={ghsvg} alt="GitHub logo" /></a>
                {/* Gmail */}
                <a className="transition-transform-colors hover:bg-gm-red hover:-translate-y-1 duration-500 rounded-full" href="mailto:joseph35dixon@gmail.com" target='_blank' name="Link to create and send an email."><img className="footerlink" src={gmsvg} alt="Mail logo." /></a>
            </ul>
        </div>
        // <div className="contact-container">
        //     <h1>Contact me!</h1>
        //     <form className="contact-form">
        //         <div className='name-email-container'>
        //             <div className='name-container'>
        //                 <label htmlFor="contact-name">Name</label>
        //                 <input id='contact-name' className="contact-form" name="name" value={name} onChange={e => setName(e.target.value)} />
        //             </div>
        //             <div className='email-container'>
        //                 <label htmlFor="contact-email">Email</label>
        //                 <input id='contact-email' className="contact-form" name="email" type='email' value={email} onChange={e => setEmail(e.target.value)} />
        //             </div>
        //         </div>
        //         <label htmlFor="contact-message">Message</label>
        //         <textarea id='contact-message' className="contact-form" name="message" value={message} onChange={e => setMessage(e.target.value)} />
        //         <br />
        //         <button className="contact-form" type="button" onClick={handleFormSubmit}>Send</button>
        //     </form>
        //     {errorMessage && (
        //         <div>
        //             <p className="error-text">{errorMessage}</p>
        //         </div>
        //     )}
        // </div>
    )
}

export default Contact;