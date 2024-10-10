import { useState } from 'react';

export default function Contact () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'firstName') {
          return  setFirstName(value)
        } else if (name === 'lastName') {
           return setLastName(value)
        } else if (name === 'email') {
           return setEmail(value)
        } else if (name === 'phone') {
           return setPhone(value)
        } else {
            console.error("Value not set")
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log([firstName, lastName, email, phone])

        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
    }
    return (
        <div className="content">
            <h2>Request a Consultation</h2>
            <hr></hr>
            <form className="form" onSubmit={handleFormSubmit}>
                <div className='input'>
                    <label for="firstName">First Name</label>
                    <input onChange={handleInputChange} value={firstName} type="text" id="firstName" name="firstName"></input>
                </div>
                <div className='input'>
                    <label for="lastName">Last Name</label>
                    <input onChange={handleInputChange} value={lastName} type="text" id="lastName" name="lastName"></input>
                </div>
                <div className='input'>
                    <label for="email">Email</label>
                    <input onChange={handleInputChange} value={email} type="text" id="email" name="email"></input>
                </div>
                <div className='input'>
                    <label for="phone">Phone</label>
                    <input onChange={handleInputChange} value={phone} type="text" id="phone" name="phone"></input>
                </div>
                <div className='btnCont'>
                    <button type="submit">Submit Request</button>
                </div>
            </form>
        </div>
    )
}