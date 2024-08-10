import React , { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import {Link } from 'react-router-dom';

const Home = () => {
  const [content, setContent] = useState({ title: '', description: '' });
  const [benefits, setBenefits] = useState([]);
  const [features, setFeatures] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/home-page/')
      .then(response => {
        setContent(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the content!", error);
      });

      axios.get('http://localhost:8000/benefits/')
      .then(response => {
        setBenefits(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the benefits!", error);
      });

      axios.get('http://localhost:8000/features/')
      .then(response => {
        setFeatures(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the features!", error);
      });

      axios.get('http://localhost:8000/restaurantconnected/')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the restaurant data!", error);
      });

  }, []);

  // const benefit = [
  //   { title: 'Accessibility', description: 'By using the online edition, patrons can easily acquire the menu.' },
  //   { title: 'Convenience', description: 'Customers can easily search for specific dishes or items and view detailed descriptions along with prices.' },
  //   { title: 'Improved Accuracy', description: 'By employing an online menu, a restaurant can guarantee that its menu is consistently current and precise, without being concerned about any delays.' },
  //   { title: 'Economical', description: 'An online menu can be a cost-efficient option compared to printed menus, which can be costly to create and maintain.' },
  //   { title: 'Enhanced customer experience', description: 'Restaurants can enhance overall customer satisfaction by providing an easy-to-use and informative menu, which can result in increased customer loyalty and repeat business.' },
  //   { title: 'Environmental advantages', description: 'By decreasing the need for printed menus, it can reduce paper waste and contribute positively to the environment.' }
  // ];

  // const restaurants = [
  //   {name: 'Dadi\'s Paakshala', icon: '/Images/dadis-paakshala.png' },
  //   {name: 'GRILLE Baan',       icon: '/Images/gRILLE-baan.png' },
  //   {name: 'Mystery Cafe & Cake', icon: '/Images/Mystery-Cafe-&-Cake.png' },
  //   {name: 'CHKN n BURGER', icon: '/Images/CHKN-n-BURGER.jpeg' },
  //   {name: 'One More Drink', icon: '/Images/One-More-Drink.png' },
  //   {name: 'G.S.KITCHEN', icon: '/Images/G-S-KITCHEN.png' },
  //   {name: 'Raag music cafe', icon: '/Images/Raag-music-cafe.jpeg' },
  //   {name: 'Amar Tandoori Family Dhaba', icon: '/Images/Amar-Tandoori-Family-Dhaba.png' },
  //   {name: 'Green Lite', icon: '/Images/Green-Lite.png' },
  //   {name: 'MP\'S KITCHEN', icon: '/Images/MP\'S-KITCHEN.jpeg' },
  //   {name: 'Sip & Bite', icon: '/Images/Sip-&-Bite.png' },
  //   {name: 'The Coal Factory', icon: '/Images/The-Coal-Factory.jpeg' },
  //   {name: 'Hotel Ashish International', icon: '/Images/Hotel-Ashish-International.png' },
  //   {name: 'Utkal Mishthan Bhandar', icon: '/Images/Utkal-Mishthan-Bhandar.jpeg' },
  //   {name: 'Sandwich Junction Raigarh', icon: '/Images/Sandwich-Junction-Raigarh.jpeg' },
  //   {name: 'The Memories Cafe', icon: '/Images/The-Memories-Cafe.jpeg' },
  //   {name: 'Dwarika Veg Restaurant', icon: '/Images/Dwarika-Veg-Restaurant.jpeg' },
  //   {name: 'H2 Cafe Foods & Drinks', icon: '/Images/H2-Cafe-Foods-&-Drinks.jpeg' },
  //   {name: 'Sonali Restaurant', icon: '/Images/Sonali-Restaurant.png' },
  //   {name: 'Afghani Seekh Kabab', icon: '/Images/Afghani-Seekh-Kabab.jpeg' },
  //   {name: 'Indian Chilly', icon: '/Images/Indian-Chilly.png' },
  //   {name: 'Shawarma Wala', icon: '/Images/dadis-paakshala.png' },
  //   {name: 'Leela\'s Cafe', icon: '/Images/Leela\'s-Cafe.png' },
  //   {name: 'Maosaji FastFood', icon: '/Images/Maosaji-FastFood.png' },
  //   {name: 'Mitra Da Junction', icon: '/Images/Mitra-Da-Junction.png' },
  //   {name: 'Urban Bistro', icon: '/Images/Urban-Bistro.png' },
  //   {name: 'Nanhe Cafe', icon: '/Images/Nanhe-Cafe.jpeg' },
  //   {name: 'Agrawal Food Plaza', icon: '/Images/Agrawal-Food-Plaza.png' },
  //   {name: 'Malhar', icon: '/Images/Malhar.jpeg' },
  //   {name: 'Chhotu Ji Restaurant', icon: '/Images/Chhotu-Ji-Restaurant.png' },
  //   // {name: 'Sanjha Chulha', icon: '/Images/dadis-paakshala.png' },
  //   // {name: 'Hotel Anand Punjabi Restaurant', icon: '/Images/Hotel-Anand-Punjabi-Restaurant.jpeg' },
  //   // {name: 'Maosaji', icon: '/Images/Tripti-Restaurant.png' },
     
  // ]


  return (
    
    <main>
      <section className='sec'>
        <div className='bg'>
        <h2>{content.title}</h2>
        <p className='p'>
        {content.description}
        </p>
        <Link to='/restroscans' ><button className='btn-home'>Book Demo</button></Link>
        </div>
      </section>
       
      <section className='benefits'>
        <h2>Benefits</h2>
        <div className='grid-benefits'>
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h5>{benefit.title}</h5>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='features'>
        <h2>Features</h2>
        {/* <div className='features-list'>
          {features.map((feature, index) => (
            <ul key={index}>
              <li style={{
                backgroundImage: `url()`,
                backgroundSize: '25px 25px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center',
                paddingLeft: '30px'
              }}>
                {feature.title}
              </li>
            </ul>
          ))}
          <div className='features-app-img'>
            <img src="Images/featuresapp.png" alt="img-app" />
          </div>
        </div> */}

         <div className='features-list'>
          {features.map((feature, index) => (
            <div className='feature-item' key={index}>
              <img src={`http://localhost:8000${feature.image}`} alt={feature.title} />
              <p>{feature.title}</p>
            </div>
          ))}
          <div className='features-app-img'>
            <img src="Images/featuresapp.png" alt="img-app" />
          </div>
        </div>
        
      </section>

      <section className='pricing'>
        <h2>Pricing</h2>
        <div className='img-div'>
        <img src='Images/Pricing/pricing.jpg' alt='pimg' className='p-img'></img>
        </div>
      </section>

      <section className='restaurants'>
      <h2>Restaurant's connected with us</h2>
      <div className="r-container">
        {restaurants.map((restaurant, index) => (
          <div className="item" key={index}>
            <img src={`http://localhost:8000${restaurant.icon}`} alt={restaurant.name} className="icon" />
            <p className="name">{restaurant.name}</p>
          </div>
        ))}
      </div> 
      </section>
      
      </main>
  )
}

export default Home
