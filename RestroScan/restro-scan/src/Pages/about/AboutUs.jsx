import React, { useState, useEffect } from 'react'
import './AboutUs.Module.css';
import axios from 'axios';

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState([]);
  const [aboutUssections, aboutUsSetSections] = useState([]);
  const [aboutUssectionsIndustries, setAboutUssectionsIndustries] = useState([]);
  const [aboutUsproductsSections, setaboutUsproductsSections] = useState([]);
  const [successStorySections, setSuccessStorySections] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/about-us/')
      .then(response => {
        setAboutUsData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });

    axios.get('http://localhost:8000/about-us-section/info/')
      .then(response => {
        aboutUsSetSections(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });

    axios.get('http://localhost:8000/products-and-services-section/')
      .then(response => {
        setaboutUsproductsSections(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the industries data!', error);
      });

    axios.get('http://localhost:8000/industries-section/')
      .then(response => {
        setAboutUssectionsIndustries(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the industries data!', error);
      });
       
      axios.get('http://localhost:8000/success-story/')
            .then(response => {
                setSuccessStorySections(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the success story data!', error);
            });

  }, []);

  return (
    <main>
      <section className='about-us-m'>
        <h2 className='h'>About Us</h2>
        {aboutUsData.map((item, index) => (
          <div className='about-us-p' key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
        {/* <h2 className='h'>About Us</h2>
        <div className='about-us-p'>
          <h2>RestroScans</h2>
          <p>The Restroscan application is created to assist restaurant proprietors and administrators in handling different aspects of their business. It has a user-friendly and easy-to-use interface that allows users to navigate through the various modules and functions with ease. The Restroscan application is created to assist restaurant proprietors and administrators in handling different aspects of their business. It has a user-friendly and easy-to-use interface that allows users to navigate through the various modules and functions with ease.</p>
          </div> */}
      </section>

      <section className='about-us'>
        {/* <div className='about-us-m-2'>
        <h2>Adyant</h2>
        <p>"Adyant" a word taken from Sanskrit which means from "Beginning To End".</p>
        <p>(A complete solution for all your needs)</p>
        <p>Adyant is a group of IT professionals having 15+ years of experience with a common goal of customer satisfactions. We believe in a motto to build world class software for everyone, which can make everyone’s life easy and meet day to day needs.</p>
        <p>We build software which satisfies Client needs from individual Customers to an Enterprise.</p>
        <p>We are both Customer and Employee centric.</p>
        <p>We are true believer of Youth empowerment and providing a platform for learning, specially for the students to mark their presence at global stage.</p>
        </div>

        <div className='about-us-m-roots'>
          <h3>Adyant Roots</h3>
          <p>Adyant Roots
          Our Skilled Professionals are in the industry since 2003 and our roots are built out globally, our branches are spread over India, US, New Zealand and UK. We have a big footprint because we believe world is a global village</p>
        </div> */}
        <div className='content'>
          {aboutUssections.map((section, index) => (
            <div className='about-us-m-2' key={index}>
              <h2>{section.title}</h2>
              {section.paragraphs.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
        <div className='roots'>
          {aboutUssections.map((section, index) => (
            section.roots_title && (
              <div className='about-us-m-roots' key={index}>
                <h3>{section.roots_title}</h3>
                <p>{section.roots_content}</p>
              </div>
            )
          ))}
        </div>

      </section>

      <section className='about-us-1'>
        {/* <div className='products'>
          <h2>Products and Services</h2>
          <p>Adyant provides global products for small, medium, and scaled business size. We always emphasize in an innovation in a unique approach which develop robust and scalable software products and application to meet our client requirements.</p>
          <p>Our unique and innovative approach in developing and delivering the software cuts the project risk by bringing Agile software methods using different framework powered by open-source model ensuring to deliver working software early working around allocated budget.</p>
          <p>Adyant experts tactically addresses clients’ requirements for better functioning of their business. We believe in customer satisfaction simultaneously giving solution that is crafted for next generation enterprise needs.</p>
        </div>
        <div className='industries'>
          <h3>We work in various industries vertical like</h3>
          <ul>
            <li>Accounting</li>
            <li>Logistic</li>
            <li>Billing</li>
            <li>Legal</li>
            <li>Biometrics</li>
            <li>Analytics</li>
            <li>Education</li>
            <li>Security</li>
            <li>Automation</li>
            <li>Banking and Finance</li>
            <li>E-Commerce</li>
          </ul>
        </div> */}

        <div className='products'>
          {aboutUsproductsSections.map((section, index) => (
            <div key={index}>
              <h2>{section.title}</h2>
              {section.paragraphs.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
        <div className='industries'>
          {aboutUssectionsIndustries.map((section, index) => (
            <div key={index}>
              <h3>{section.title}</h3>
              <ul>
                {section.industries_list.split('\n').map((industry, i) => (
                  <li key={i}>{industry}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <div className='success-story'>
                {successStorySections.map((section, index) => (
                    <div key={index}>
                        <h2>{section.title}</h2>
                        {section.paragraphs.split('\n').map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                ))}
            </div>
    </main>
  )
}

export default AboutUs
