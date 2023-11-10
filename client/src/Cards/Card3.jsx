import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Style/Cards/Card3.css'; // Create a CSS file for styling
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons
import { useNavigate } from 'react-router-dom';

const Card3 = () => {
  let navigate=useNavigate()

  const cardData = [
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    {
      name: 'Faisal K',
      age: '38 yrs',
      height: '6\' 0"',
      religion: 'Muslim',
      language: 'Urdu',
      caste: 'Pathan',
      location: 'Lives in Varanasi, India',
    },
    // Add more card data objects for other items
  ];

  // Generate an array of items to display in the carousel (4 items per slide)
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(cardData.length / itemsPerPage);

  const renderCarouselItems = () => {
    const carouselItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const slideStartIndex = i * itemsPerPage;
      const slideEndIndex = slideStartIndex + itemsPerPage;

      const slideItems = cardData.slice(slideStartIndex, slideEndIndex).map((item, index) => (
        <div key={index} >
        <div onClick={()=>navigate('/singleprofile')} style={{cursor:'pointer'}} key={index} className="card Card1">
          {/* <div className="card" style={{ width: "12rem" }}> */}
            <div style={{ margin: "auto" }}>
              <img src="img/fawad.png" style={{ height: "100px", width: '100px', borderRadius: '200%' }} className="card-img-top" alt="..." />
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title">Muhammad J</h5>
              <p className="card-text">29 yrs, 6' 1", <br /> Urdu, Ellicott City, USA</p>
              <a href="#" className="custom-button">Connect</a>
            </div>
          </div>
        </div>
      ));

      carouselItems.push(
        <div key={i} style={{display:'flex'}} className="carousel-slide">
          {slideItems}
        </div>
      );
    }

    return carouselItems;
  };

  return (
    <div className="Card3">
      <div className="card-carousel">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={false}
          emulateTouch={true}
          renderThumbs={() => { }} // Disable the default thumbnail navigation
          thumbWidth={0} // Set thumbnail width to 0 to hide it
          // renderArrowPrev={(onClickHandler, hasPrev, label) => (
          //   <button onClick={onClickHandler} disabled={!hasPrev} className="custom-left-arrow">
          //     <FaArrowLeft />
          //   </button>
          // )}
          // renderArrowNext={(onClickHandler, hasNext, label) => (
          //   <button onClick={onClickHandler} disabled={!hasNext} className="custom-right-arrow">
          //     <FaArrowRight />
          //   </button>
          // )}
          >
          {renderCarouselItems()}
        </Carousel>
      </div>
    </div>
  );
};

export default Card3;
