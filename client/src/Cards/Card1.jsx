import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import '../Style/Cards/Card1.css';

const Card1 = () => {
    // Define images for the slider
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image URLs here
    ];

    // State to manage the currently selected slide
    const [selectedSlide, setSelectedSlide] = useState(0);

    const handleSlideChange = (index) => {
        setSelectedSlide(index);
    };

    return (
        <>
            <div className="Card1">
                <div className="card-container">
                    <div className="image-slider">
                        <Carousel
                            showStatus={false}
                            showThumbs={false}
                            selectedItem={selectedSlide}
                            onChange={handleSlideChange}
                        >
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img style={{ width: '100%' }} src='img/fawad.png' alt={`Image ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className="card-details">
                        <h4>Shakir R</h4>
                        <div className='card-details1'>
                            <div className='card-details2'>
                                <div className='card-details3'>
                                    <div style={{}}>
                                        {/* ,borderBottom:'1px solid' */}
                                        <p style={{ margin: '0%' }}><QuestionAnswerIcon style={{ fontSize: '14px', marginRight: '2px' }} />Online Now</p>
                                        <p style={{ margin: '0%', padding: '0%' }} >Never Married</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Shahjahanpur, India</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Agent / Broker / Trader / Contractor</p>
                                    </div>
                                    <div style={{ paddingRight: "20px", marginRight: "5px" }}>
                                        {/* ,borderBottom:'1px solid' */}
                                        <p style={{ margin: '0%' }}><GroupIcon style={{ fontSize: '14px', marginRight: '2px' }} />You & Him</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>33 yrs, 5' 11"</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Muslim, Arain</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Urdu</p>
                                    </div>
                                </div>
                                <p style={{ width: "420px" }}>
                                    Looking for an understanding and caring life partner ..!!! Assalamu Alaikum, Caring And Intelligent ,...More
                                </p>
                            </div>
                            {/* , width: '140px' */}
                            {/* <div style={{ display: "flex", flexDirection: "column", alignContent: "center",justifyItems:"center", alignItems: "center" }}> */}
                            <div className="profile-container">
                                <p> <i> Like this profile?</i></p>
                                <div className='icon-container'>
                                <CheckCircleOutlineIcon className='CheckCircleOutlineIcon' />
                                <p>Connect Now</p>
                            </div>
                            </div>
                        </div>
                        {/* <p style={{ width: "420px" }}>
                            Looking for an understanding and caring life partner ..!!! Assalamu Alaikum, Caring And Intelligent ,...More
                        </p> */}
                    </div>
                </div>
            </div>

            <div className="Card1">
                <div className="card-container">
                    <div className="image-slider">
                        <Carousel
                            showStatus={false}
                            showThumbs={false}
                            selectedItem={selectedSlide}
                            onChange={handleSlideChange}
                        >
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img style={{ width: '100%' }} src='img/fawad.png' alt={`Image ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="card-details">
                        <h4>Shakir R</h4>
                        <div className='card-details1'>
                            <div className='card-details2' >
                                <div className='card-details3' >
                                    <div className='card-details3_Left_1' >
                                        <p style={{ margin: '0%' }}><QuestionAnswerIcon style={{ fontSize: '14px', marginRight: '2px' }} />Online Now</p>
                                        <p style={{ margin: '0%', padding: '0%' }} >Never Married</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Shahjahanpur, India</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Agent / Broker / Trader / Contractor</p>
                                    </div>
                                    <div className='card-details3_Left_2' style={{   }}>
                                        <p style={{ margin: '0%' }}><GroupIcon style={{ fontSize: '14px', marginRight: '2px' }} />You & Him</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>33 yrs, 5' 11"</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Muslim, Arain</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Urdu</p>
                                    </div>
                                </div>
                                <p style={{ width: "420px" }}>
                                    Looking for an understanding and caring life partner ..!!! Assalamu Alaikum, Caring And Intelligent ,...More
                                </p>
                            </div>
                            <div className='card-details1_Right'>
                                <p> <i> Upgrade to Contact him directly</i></p>
                                <div>
                                    <button >  <CallIcon className='buttons' /> Call</button>
                                    <button className='whatsapp'> <WhatsAppIcon className='buttons' /> Whatsapp</button>
                                    <button> <SendIcon className='buttons' /> Lovodi Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>
    );
};

export default Card1;