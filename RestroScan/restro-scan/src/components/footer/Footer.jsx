import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import './Footer.Module.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/people/Adyant/100083538721741/" className="social-icon" target="_blank"><FaFacebook /></a>
        <a href="https://adyant.co.in/" className="social-icon" target="_blank"><FaGoogle /></a>
        <a href="https://x.com/i/flow/login?redirect_after_login=%2Fadyant_softtech" className="social-icon" target="_blank"><FaTwitter /></a>
        <a href="https://www.instagram.com/adyantsofttech/" className="social-icon" target="_blank"><FaInstagram /></a>
        <a href="https://www.youtube.com/@adyantsofttechprivateltd8396/videos" className="social-icon" target="_blank"><BsYoutube /></a>
      </div>
      <div className="footer-content">
        <p>Adyant SoftTech Pvt. Ltd.</p>
        <p>C-179, Street no 9 Near Shahid Bhagat Singh Park, Shailendra Nagar Raipur, Chhattisgarh, India</p>
      </div>
    </div>
  )
}

export default Footer
