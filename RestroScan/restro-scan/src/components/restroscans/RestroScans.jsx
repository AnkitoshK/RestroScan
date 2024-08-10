import React from 'react'
import './RestroScans.Module.css'
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import axios from 'axios';

const RestroScans = () => {

  const [formData, setFormData] = useState({
    name: '',
    rname:'',
    email: '',
    mobile: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{1,15}$/;

    if (!formData.name) errors.name = 'Please enter Owner name';
    if (!formData.rname) errors.rname = 'Please enter restaurant name';
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
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      // Handle form submission
      const postData = {
        owner_name: formData.name,
        restaurant_name: formData.rname,
        email: formData.email,
        mobile_number: formData.mobile,
      };

      axios.post("http://127.0.0.1:8000/restaurants/", postData)
        .then(response => {
          console.log(response.data);
          alert('Registered Successfully');
          resetForm();
        })
        .catch(error => {
          console.log(error);
          // Handle error (e.g., show error message)
        });
      
    } else {
      setErrors(errors);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      rname:'',
      email: '',
      mobile: '',
    });
    setErrors({});
  };
  return (
    <div className='restro-container-m'>
       <div className="restro-bg"></div>
      <div className='restro-container'>
        <h2>Get RestroScans</h2>

        <form className="restro-form" onSubmit={handleSubmit}>
        <div className="restro-form-group">
        <div className="restro-input-wrapper">
        <FaUser className='restro-input-icon'/>
          <input
            type="text"
            name="name"
            placeholder="* Owner Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          /> 
          </div>
          {errors.name && <span className="restro-error-message">{errors.name}</span>}
        </div>

        <div className="restro-form-group">
        <div className="restro-input-wrapper">
        <IoRestaurant className='restro-input-icon'/>

          <input
            type="text"
            name="rname"
            placeholder="* Restaurant Name"
            value={formData.rname}
            onChange={handleChange}
            className={errors.rname ? 'error' : ''}
          /> 
          </div>
          {errors.rname && <span className="restro-error-message">{errors.rname}</span>}
        </div>

        <div className="restro-form-group">
        <div className="restro-input-wrapper">
        <MdEmail className='restro-input-icon'/>
          <input
            type="email"
            name="email"
            placeholder="* Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
         </div>
          {errors.email && <span className="restro-error-message ">{errors.email}</span>}
          
        </div>
        <div className="restro-form-group">
        <div className="restro-input-wrapper">
        <FaPhone className='restro-input-icon'/>
          <input
            type="number"
            name="mobile"
            placeholder="* Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className={errors.mobile ? 'error' : ''}
          />
          </div>
          {errors.mobile &&<p className="restro-error-message ">{errors.mobile}</p>}
        </div>
        <div className="restro-form-buttons">
          <button type="submit" className="restro-btn-submit" >Submit</button>
          <button type="button" className="restro-btn-cancel" onClick={resetForm}>Cancel</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default RestroScans
