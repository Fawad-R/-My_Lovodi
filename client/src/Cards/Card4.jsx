import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupIcon from '@mui/icons-material/Group';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';
import '../Style/Cards/Card4.css';
import { useNavigate } from 'react-router-dom';

const Card4 = () => {
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
let navigate=useNavigate()
    return (
        <>
            <div className="Card4 Card1">
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
                                    <img style={{ width: '150px',height: '150px',borderRadius:"200%" }} src='img/fawad.png' alt={`Image ${index}`} />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className="card-details">
                        <h4>Shakir R</h4>
                        <div style={{ display: 'flex', margin: '0%' }}>
                            <div onClick={()=>navigate('/singleprofile')}  style={{borderRight: '1px solid',marginRight:"24px",paddingRight:"24px",cursor:'pointer'}} >
                                <div style={{ display: 'flex', margin: '0%', justifyContent: 'space-between' }}>

                                    <div style={{}}>
                                        {/* ,borderBottom:'1px solid' */}
                                        <p style={{ margin: '0%' }}><QuestionAnswerIcon style={{ fontSize: '14px', marginRight: '2px' }} />Online Now</p>
                                        <p style={{ margin: '0%', padding: '0%' }} >35 yrs , 5' 11</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Punjabi , Sunni Hanafi</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Sargodha, Punjab</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Ph.D</p>
                                        <p style={{ margin: '0%', padding: '0%' }}>Science Professional (Others)</p>
                                    </div>
                                    
                                </div>
                                {/* <p style={{ width: "420px" }}>
                                    Looking for an understanding and caring life partner ..!!! Assalamu Alaikum, Caring And Intelligent ,...More
                                </p> */}
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center" }}>
                                <p> <i> He invited you to Connect</i></p>
                                <div>
                                    <button className='whatsapp'> <WhatsAppIcon style={{ fontSize: '14px' }} /> Accept</button>
                                    <button >  <CallIcon style={{ fontSize: '14px' }} /> Decline</button>
                                    {/* <button> <SendIcon style={{ fontSize: '14px' }} /> Lovodi Chat</button> */}
                                </div>
                            </div>
                        </div>
                        {/* <p style={{ width: "420px", margin: "0%", padding: '0%' }}>
                            Looking for an understanding and caring life partner ..!!! Assalamu Alaikum, Caring And Intelligent ,...More
                        </p> */}
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>
    );
};

export default Card4;