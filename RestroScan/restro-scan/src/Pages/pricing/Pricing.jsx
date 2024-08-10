import React, { useEffect, useState } from 'react'
import './Pricing.Module.css'
import axios from 'axios'

const Pricing = () => {
  const [pricingData, setPricingData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/pricing_img/')
      .then(response => {
        setPricingData(response.data[0]); // Assuming you want the first item
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  if (!pricingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className='Pricing-page'>
      <h2>{pricingData.title}</h2>
      <div className='Pricing-pic'>
        <img src={`http://localhost:8000${pricingData.image}`} alt='pimg' className='p-img' />
      </div>
    </div>
  </div>
  )
}

export default Pricing
