import { useState } from 'react';

export default function Contact () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [ministry, setMinistry] = useState('')
    const [description, setDescription] = useState('')
    
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
        } else if (name === 'ministry') {
            return setMinistry(value)
        } else if (name === 'description') {
            return setDescription(value)
        } else {
            console.error("Value not set")
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log([firstName, lastName, email, phone, ministry, description])

        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMinistry('')
        setDescription('')
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
                <div className='input'>
                    <label for="ministry">ministry</label>
                    <input onChange={handleInputChange} value={ministry} type="text" id="ministry" name="ministry"></input>
                </div>
                <div className='input'>
                    <label for="description">Description</label>
                    <textarea onChange={handleInputChange} value={description} id="description" name="description"></textarea>
                </div>
                <div className='btnCont'>
                    <button type="submit">Submit Request</button>
                </div>
            </form>
        </div>
    )
}