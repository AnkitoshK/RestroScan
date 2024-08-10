import React from 'react'
import './ContactUs.Module.css';
import { useState,useEffect } from 'react';
import { RiGlobalLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaPen } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    queries: ''
  });
  const [errors, setErrors] = useState({});
  const [contactUsSections, setContactUsSections] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{1,15}$/;

    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!formData.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(formData.mobile)) {
      errors.mobile = 'Mobile number must be up to 15 digits';
    }
    if (!formData.queries) {
      errors.queries = 'Query is required';
    } else if (formData.queries.split(' ').length > 300) {
      errors.queries = 'Query must be within 300 words';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      
      // Handle form submission
      const postData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        queries: formData.queries,
      };

      axios.post('http://127.0.0.1:8000/contacts/', postData)
        .then(response => {
          console.log(response.data);
          toast.success('Form submitted successfully');
          resetForm();
        })
        .catch(error => {
          toast.error('There was an error submitting the form');
          // Handle error
        });
    } else {
      setErrors(errors);
    }
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/contact-us-section/')
        .then(response => {
            setContactUsSections(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the contact us data!', error);
        });
}, []);

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      queries: ''
    });
    setErrors({});
  };

  return (
    // <div className="contact-container">
    //   <div className="contact-left">
    //     <h2>Contact Us</h2>
    //     <p className='contact-p'>We know that our clients have unique needs and circumstances. Tell us more about your project, and we will get back to you soon with some ideas of how we can address those circumstances while creating the most stable software possible.</p>

    //     <div className="company-info">
    //       <h5>Adyant SoftTech Pvt. Ltd.</h5>
    //       <p>Raipur, Chhattisgarh, India</p>
    //       </div>
          
    <div className="contact-container">
    {contactUsSections.map((section, index) => (
        <div className="contact-left" key={index}>
            <h2>{section.title}</h2>
            <p className='contact-p'>{section.description}</p>
            <div className="company-info">
                <h5>{section.company_name}</h5>
                <p>{section.company_address}</p>
            </div>
        
    
    <div className="flags">
        <div className="flag-item">
            <a href='https://adyant.co.in/contact-us-india-1' target="_blank">
                <img src="/Images/ContactUs/India-Flag.png" alt="India" />
                <p>INDIA</p>
            </a>
        </div>
        <div className="flag-item">
            <a href='https://adyant.co.in/contact-us-us-1' target="_blank">
                <img src="/Images/ContactUs/US-Flag.png" alt="US" />
                <p>US</p>
            </a>
        </div>
        <div className="flag-item">
            <a href='https://adyant.co.in/contact-us-uk' target="_blank">
                <img src="/Images/ContactUs/UK-Flag.png" alt="UK" />
                <p>UK</p>
            </a>
        </div>
        <div className="flag-item">
            <a href='https://adyant.co.in/contact-us-new-zealand-1' target="_blank">
                <img src="/Images/ContactUs/New-Zeland-Flag.png" alt="New Zealand" />
                <p>NEW ZEALAND</p>
            </a>
        </div>
    </div>
    
    <div className="contact-details">
        <a href='https://adyant.co.in/' target="_blank"><RiGlobalLine className='link-a' /> <p>adyant.co.in</p></a>
        <a href='#' target="_blank"><MdOutlineEmail className='link-e' /> <p>info@adyant.co.in</p></a>
    </div>
    </div>
     ))}
    <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <div className="input-wrapper">
                    <FaUser className='input-icon' />
                    <input
                        type="text"
                        name="name"
                        placeholder="* Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                    />
                </div>
                {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <MdEmail className='input-icon' />
                    <input
                        type="email"
                        name="email"
                        placeholder="* Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                    />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <FaPhone className='input-icon' />
                    <input
                        type="number"
                        name="mobile"
                        placeholder="* Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={errors.mobile ? 'error' : ''}
                    />
                </div>
                {errors.mobile && <p className="error-message">{errors.mobile}</p>}
            </div>
            <div className="form-group">
                <div className="input-wrapper">
                    <FaPen className='input-icon' />
                    <textarea
                        name="queries"
                        placeholder="* Your queries"
                        value={formData.queries}
                        onChange={handleChange}
                        className={errors.queries ? 'error' : ''}
                    ></textarea>
                </div>
                {errors.queries && <span className="error-message-textarea">{errors.queries}</span>}
            </div>
            <div className="form-buttons">
                <button type="submit" className="btn-submit" onClick={() => console.log(formData)}>Submit</button>
                <button type="button" className="btn-cancel" onClick={resetForm}>Cancel</button>
            </div>
        </form>
    </div>
    <ToastContainer />
</div>
);
}

export default ContactUs
