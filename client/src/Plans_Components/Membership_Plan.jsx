import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const Membership_Plan = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title extra-padding">
                                    Upgrade Your Profile
                                </h6>
                                <h2 className="title">
                                    Membership Plans
                                </h2>
                                {/* <p className="text">
                                    Benefit from Peyamba at its maximum you!
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-s-top">
                    <div className="col-lg-3 col-md-6">
                        <div className="plan-info">
                            <div className="icon">
                                <img src="assets/images/membership/icon1.png" alt="" />
                            </div>
                            <h4 className="title">
                                Unlimited Messages
                            </h4>
                            <p className="text">
                                Send and receive messages
                                with no limits
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="plan-info">
                            <div className="icon">
                                <img src="assets/images/membership/icon2.png" alt="" />
                            </div>
                            <h4 className="title">
                                View Your Contacts
                            </h4>
                            {/* <br /> */}
                            <p className="text">
                                View info of Mutual Likes
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="plan-info">
                            <div className="icon">
                                <img src="assets/images/membership/icon3.png" alt="" />
                            </div>
                            <h4 className="title">
                                Add Some short videos
                            </h4>
                            {/* <br />
                            <br /> */}
                            <p className="text">
                                Add videos
                                with no limits
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="plan-info">
                            <div className="icon">
                                <img src="assets/images/membership/icon4.png" alt="" />
                            </div>
                            <h4 className="title">
                                View & Reply to Chat
                            </h4>
                            <p className="text">
                                Read and reply to
                                the messages
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pricing-plan-wrapper">
                            {/* <img className="left-img" src="assets/images/membership/left-img.png" alt="" />
                            <img className="right-img" src="assets/images/membership/right-img.png" alt="" /> */}
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            Trial Plan
                                        </p>
                                        <h4 className="number">
                                            <sup></sup>Free
                                        </h4>
                                        <p className="stamet">
                                            {/* <br /> */}
                                            14 days period
                                        </p>
                                        <div >
                                            {/* ,margin:"0%",padding:'0%' */}
                                            <ul style={{ textAlign: 'left' }}>
                                                {/* <li><CheckIcon style={{ fontSize: "15px" }} /> 14 days period</li> */}
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Send unlimited Messages</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 10 View contact info</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 30 Send Interests</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> View Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Reply Chat</li>
                                                <li style={{ textDecoration: 'line-through'  }}> Add Shorts</li>
                                                <li style={{ textDecoration: 'line-through'  }}> Priority over Free member</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Register Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            Free
                                        </p>
                                        <h4 className="number">
                                            <sup></sup>Free
                                        </h4>
                                        <p className="stamet">
                                            {/* Per Month */}
                                            {/* <br /> */}
                                            Free Mode
                                        </p>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                {/* <li><CheckIcon style={{ fontSize: "15px" }} /> Free Mode</li> */}
                                                <li style={{ textDecoration: 'line-through'  }}> Send unlimited Messages</li>
                                                <li style={{ textDecoration: 'line-through'  }}> View contact info</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 15 daily Send Interests</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> View Chat</li>
                                                <li style={{ textDecoration: 'line-through'  }}> Reply Chat</li>
                                                <li style={{ textDecoration: 'line-through'  }}> Add Shorts</li>
                                                <li style={{ textDecoration: 'line-through'  }}>Priority over Free member</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Register Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            SILVER Plan
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>28
                                        </h4>
                                        <p className="stamet">
                                            3 Months
                                        </p>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                {/* <li><CheckIcon style={{ fontSize: "15px" }} /> 14 days period</li> */}
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Send unlimited Message</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 80 View contact infos</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 50 daily Send Interests</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> View Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Reply Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Add Shorts</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Priority over Free member</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            Gold Plan
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>50
                                        </h4>
                                        <p className="stamet">
                                            6 Months
                                        </p>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                {/* <li><CheckIcon style={{ fontSize: "15px" }} /> 14 days period</li> */}
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Send unlimited Messages</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 200 View contact infos</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 125 daily Send Interests</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> View Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Reply Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Add Shorts</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Priority over Free member</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-5 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                            Platinium Plan
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>80
                                        </h4>
                                        <p className="stamet">
                                            12 Months
                                        </p>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                {/* <li><CheckIcon style={{ fontSize: "15px" }} /> 14 days period</li> */}
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Send unlimited Messages</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 400 View contact infos</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> 200 daily Send Interests</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> View Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Reply Chat</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Add Shorts</li>
                                                <li><CheckIcon style={{ fontSize: "15px" }} /> Priority over Free member</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Membership_Plan