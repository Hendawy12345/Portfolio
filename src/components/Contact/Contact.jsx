import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.first_name) errors.first_name = "First name is required.";
    if (!formData.last_name) errors.last_name = "Last name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      emailjs.sendForm('service_alrlnlc', 'template_y17aux8', e.target, 'TYxvzl2JxA8bGmXp-')
        .then((result) => {
          console.log(result.text);
          setLoading(false);
          setFormData({
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            message: ''
          });
          setFormErrors({});
        }, (error) => {
          console.log(error.text);
          setLoading(false);
          setFormErrors({ general: "Failed to send message. Please try again later." });
        });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={sendEmail} className='form m-auto w-50'>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="f_name" className="form-label">First Name:</label>
              <input
                placeholder='First Name'
                type="text"
                id="f_name"
                name="first_name"
                className="form-control"
                value={formData.first_name}
                onChange={handleInputChange}
              />
              {formErrors.first_name && <small className="text-danger">{formErrors.first_name}</small>}
            </div>
            <div className="col-md-6">
              <label htmlFor="l_name" className="form-label">Last Name:</label>
              <input
                placeholder='Last Name'
                type="text"
                id="l_name"
                name="last_name"
                className="form-control"
                value={formData.last_name}
                onChange={handleInputChange}
              />
              {formErrors.last_name && <small className="text-danger">{formErrors.last_name}</small>}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">Phone:</label>
              <input
                placeholder='Phone'
                type="text"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {formErrors.phone && <small className="text-danger">{formErrors.phone}</small>}
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                placeholder='Email'
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <small className="text-danger">{formErrors.email}</small>}
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea
              placeholder='Leave Your Message'
              id="message"
              name="message"
              className='form-control textarea'
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {formErrors.message && <small className="text-danger">{formErrors.message}</small>}
          </div>

          <div className="text-center">
            <button type="submit" className='send_massage' disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {formErrors.general && <div className="text-danger mt-3">{formErrors.general}</div>}
          </div>
        </form>
      </div>
    </>
  );
}
