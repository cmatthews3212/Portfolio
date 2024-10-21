import { useState } from 'react';
import { init, send } from '@emailjs/browser'

export default function Contact () {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [ministry, setMinistry] = useState('')
    // const [description, setDescription] = useState('')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ministry: '',
        description: ''
    });

   
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        ministry: '',
        description: ''
    });

    const [errorMessage, setErrorMessage] = useState('')

    init('SyDAG4upyEVJH2_Rd')

    const handleBlur = (field) => {
        if (!formData[field]) {
            setError((prevError) => ({...prevError, [field]: 'This field is required.'}));
        } else {
            setError((prevError) => ({ ...prevError, [field]: ''}));
        }
    };
    
    
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (error) {
            setError('')
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.ministry || !formData.description) {
            setErrorMessage('Please fill in all fields.')
        } else {
            setErrorMessage('')
            send('service_rx4kkue', 'template_bf39skm', formData) 
            .then((res) => {
                console.log('Email success', res.status, res.text);
            }, (err) => {
                console.error('Email failed', err)
            });

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            ministry: '',
            description: ''
        });
    }
        }


    return (
        <div className="content contact-content">
            <h2>Request a Consultation</h2>
            <hr></hr>
            <form className="form" onSubmit={sendEmail}>
                <div className='input'>
                    <label for="firstName">First Name</label>
                    <input onBlur={() => handleBlur('firstName')} onChange={handleInputChange} value={formData.firstName} type="text" id="firstName" name="firstName"></input>
                    { error.firstName && <span style={{color: 'red'}}>{error.firstName}</span>}
                </div>
                <div className='input'>
                    <label for="lastName">Last Name</label>
                    <input onBlur={() => handleBlur('lastName')} onChange={handleInputChange} value={formData.lastName} type="text" id="lastName" name="lastName"></input>
                    { error.lastName && <span style={{color: 'red'}}>{error.lastName}</span>}
                </div>
                <div className='input'>
                    <label for="email">Email</label>
                    <input onBlur={() => handleBlur('email')} onChange={handleInputChange} value={formData.email} type="email" id="email" name="email"></input>
                    { error.email && <span style={{color: 'red'}}>{error.email}</span>}
                </div>
                <div className='input'>
                    <label for="phone">Phone</label>
                    <input onBlur={() => handleBlur('phone')} onChange={handleInputChange} value={formData.phone} type="text" id="phone" name="phone"></input>
                    { error.phone && <span style={{color: 'red'}}>{error.phone}</span>}
                </div>
                <div className='input'>
                    <label for="ministry">Non-Profit Name</label>
                    <input onBlur={() => handleBlur('ministry')} onChange={handleInputChange} value={formData.ministry} type="text" id="ministry" name="ministry"></input>
                    { error.ministry && <span style={{color: 'red'}}>{error.ministry}</span>}
                </div>
                <div className='input'>
                    <label for="description">Non-Profit Description or Personal Message</label>
                    <textarea onBlur={() => handleBlur('description')} onChange={handleInputChange} value={formData.description} id="description" name="description"></textarea>
                    { error.description && <span style={{color: 'red'}}>{error.description}</span>}
                </div>
                <div className='btnCont'>
                    <button type="submit">Submit Request</button>
                </div>
                {errorMessage && <p className='error'>{errorMessage}</p>}
            </form>
        </div>
    )
}