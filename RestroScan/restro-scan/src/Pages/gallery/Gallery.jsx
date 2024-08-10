import React,{ useEffect, useState }  from 'react'
import './Gallery.Module.css';
import axios from 'axios';

const Gallery = () => {

  const [galleryInfo, setGalleryInfo] = useState({ title: '', description: '' });
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:8000/gallery/items/')
      .then(response => {
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the gallery data!", error);
      });

    axios.get('http://localhost:8000/gallery/info/')
      .then(response => {
        setGalleryInfo(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the gallery info!", error);
      });
  }, []);

  return (
    <div className='gallery-m'>
      <div className='gallery'> 
      <h2 >{galleryInfo.title}</h2>
      <p className='p-gallery'>{galleryInfo.description}</p>
      </div>

      <div className='gallery-items'>
        {galleryItems.map((item, index) => (
          <div className='gallery-item' key={index}>
            <img src={`http://localhost:8000${item.image}`} alt={item.title} className="gallery-image" />
            <h3 className='gallery-title'>{item.title}</h3>
            <p className='gallery-description'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
