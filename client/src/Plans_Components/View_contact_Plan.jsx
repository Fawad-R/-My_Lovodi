import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const View_contact_Plan = () => {
    return (
        <div style={{ marginTop: '200px' }}>
            <div className=" container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="content">
                            <div className="section-header">
                                <h6 className="sub-title extra-padding">
                                    Upgrade Your Profile
                                </h6>
                                <h2 className="title">
                                View Contact Plans
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="pricing-plan-wrapper">
                            <img className="left-img" src="assets/images/membership/left-img.png" alt="" />
                            <img className="right-img" src="assets/images/membership/right-img.png" alt="" />
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>3
                                        </h4>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                <li><CheckIcon style={{ fontSize: "15px" }} />25 View contact info of mutual friends</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>5
                                        </h4>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                <li><CheckIcon style={{ fontSize: "15px" }} />50 View contact info of mutual friends</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="custom-button">Buy Now!</a>
                                        <img className="shape" src="assets/images/membership/plan-bg.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-plan">
                                        <p className="duration">
                                        </p>
                                        <h4 className="number">
                                            <sup>$</sup>7
                                        </h4>
                                        <div >
                                            <ul style={{ textAlign: 'left' }}>
                                                <li><CheckIcon style={{ fontSize: "15px" }} />75 View contact info of mutual friends</li>
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

export default View_contact_Plan